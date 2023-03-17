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
        String targetUrl = determineTargetUrl(request,response,authentication);

        if (response.isCommitted()) {
            logger.debug("Response has already been committed. Unable to redirect to " + targetUrl);
            return;
        }

//        PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
//        String email = principalDetails.getUser().getEmail();
//        response.sendRedirect("/success?code=" + ((PrincipalDetails) authentication.getPrincipal()).getUser().getEmail());
        getRedirectStrategy().sendRedirect(request, response, targetUrl);
    }


    protected String determineTargetUrl(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        String targetUrl = "/";

        System.out.println(authentication);
        String jwt = tokenProvider.createToken(authentication);
        PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
        String email = principalDetails.getUser().getEmail();
        User user = userRepository.findByEmail(email).get();
        String provider = user.getProvider();

        return UriComponentsBuilder.fromUriString(targetUrl)
                .queryParam("code", jwt)
                .queryParam("email",email)
                .build().toUriString();
    }


}