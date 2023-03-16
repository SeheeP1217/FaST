package a402.FaST.Controller;

import a402.FaST.model.dto.TokenDto;
import a402.FaST.model.dto.UserResponseDto;
import a402.FaST.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("login/oauth2")
@RequiredArgsConstructor
public class OauthController {

    private final UserServiceImpl userService;
    private static final Logger logger = LoggerFactory.getLogger(OauthController.class);

    @GetMapping("/code/kaakao")
    private ResponseEntity<Map<String, Object>> getUser(@RequestParam("code") String code ) {

        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = HttpStatus.OK;
        TokenDto TokenResponseDto = null;
        UserResponseDto userResponseDto = null;

        logger.info("code {}",code);


        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

}
