package a402.FaST.Controller;

import a402.FaST.exception.DuplicateMemberException;
import a402.FaST.model.dto.AuthorityDto;
import a402.FaST.model.dto.TokenDto;
import a402.FaST.model.dto.UserResponseDto;
import a402.FaST.model.entity.User;
import a402.FaST.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequiredArgsConstructor
public class OauthController {
    private static final Logger logger = LoggerFactory.getLogger(OauthController.class);
    private final UserRepository userRepository;

    @GetMapping("/login/oauth2/code/kakao")
    private ResponseEntity<Map<String, Object>> getUser(@RequestParam("code") String code, @RequestParam("email") String email ) {

        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = HttpStatus.OK;

        logger.info("제발");
        logger.info("code {}",code);
        logger.info("email {}",email);
        User user = userRepository.findByEmail(email).get();
//        if (userRepository.existsByEmail(user.getEmail())) {
//            throw new DuplicateMemberException("이미 가입되어 있는 유저입니다.");
//        }


        TokenDto TokenResponseDto = null;
        UserResponseDto userResponseDto = null;

        TokenResponseDto = TokenDto.builder()
                .token(code)
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


        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }


}
