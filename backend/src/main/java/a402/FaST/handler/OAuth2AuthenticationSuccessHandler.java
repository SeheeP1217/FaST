package a402.FaST.handler;

import a402.FaST.auth.PrincipalDetails;
import a402.FaST.jwt.TokenProvider;
import a402.FaST.model.dto.AuthorityDto;
import a402.FaST.model.dto.TokenDto;
import a402.FaST.model.dto.UserResponseDto;
import a402.FaST.model.entity.User;
import a402.FaST.repository.UserRepository;
import a402.FaST.service.UserServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Component
@Transactional
public class OAuth2AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    @Autowired
    TokenProvider tokenProvider;

    @Autowired
    UserRepository userRepository;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {

        // redirect 할 url을 지정해준다
        String targetUrl = "/";
        String jwt = tokenProvider.createToken(authentication);

        if (response.isCommitted()) {
            logger.debug("Response has already been committed. Unable to redirect to " + targetUrl);
            return;
        }

        PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
        String email = principalDetails.getUser().getEmail();
        System.out.println(email);
        TokenDto TokenResponseDto = null;
        UserResponseDto userResponseDto = null;
        HttpStatus status = HttpStatus.OK;
        User user = userRepository.findByEmail(email).get();
        System.out.println(user.getNickname());

        Map<String, Object> resultMap = new HashMap<>();

        TokenResponseDto = TokenDto.builder()
                .token(jwt)
                .build();
        userResponseDto = UserResponseDto.builder()
                .id(user.getId())
                .email(user.getEmail())
                .nickname(user.getNickname())
//                .salt(user.getSalt())
                .imgPath(user.getImg_path())
                .authorityDtoSet(user.getAuthorities().stream()
                        .map(authority -> AuthorityDto.builder().authorityName(authority.getAuthorityName()).build())
                        .collect(Collectors.toSet()))
                .build();

        resultMap.put("token", TokenResponseDto);
        resultMap.put("user", userResponseDto);

        System.out.println(resultMap);
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonData = objectMapper.writeValueAsString(resultMap);
        PrintWriter writer = response.getWriter();
        writer.println(jsonData);

//        return;

//        response.setContentType("text/html;charset=UTF-8");
//        response.setContentType("application/json");
        moveurl(resultMap);
//        response.sendRedirect(targetUrl);
//        getRedirectStrategy().sendRedirect(request, response, targetUrl);
    }

    private ResponseEntity<Map<String, Object>> moveurl(Map<String, Object> resultMap) {
        HttpStatus status = HttpStatus.OK;
        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

//    protected String determineTargetUrl(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
//
////        String targetUrl = "http://localhost:3000/home";
//        String targetUrl = "/";
////        String targetUrl = "/oauth2/social/success";
//
//        // 3. 인증 정보를 기반으로 JWT 토큰 생성
//        String jwt = tokenProvider.createToken(authentication);
////        System.out.println(jwt);
//
////        // 4. RefreshToken 저장
////        RefreshToken refreshToken = RefreshToken.builder()
////                .key(authentication.getName())
////                .value(tokenDto.getRefreshToken())
////                .build();
////
////        refreshTokenRepository.save(refreshToken);
////
////        int cookieMaxAge = tokenProvider.getExpiration().intValue() / 60;
////
////        CookieUtil.deleteCookie(request, response, "refreshToken");
////        CookieUtil.addCookie(response, "refreshToken", tokenDto.getRefreshToken(), cookieMaxAge);
////
////        CookieUtil.deleteCookie(request, response, "grantType");
////        CookieUtil.addCookie(response, "grantType", tokenDto.getGrantType(), cookieMaxAge);
////
////        CookieUtil.deleteCookie(request, response, "accessTokenExpiresIn");
////        CookieUtil.addCookie(response, "accessTokenExpiresIn", Long.toString(tokenDto.getAccessTokenExpiresIn()), cookieMaxAge);
//
//        return UriComponentsBuilder.fromUriString(targetUrl)
//                .queryParam("accessToken", jwt)
//                .build().toUriString();
//    }


}