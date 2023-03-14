package a402.FaST.Controller;

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
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/oauth")
@RequiredArgsConstructor
public class OauthController {

    private final UserServiceImpl userService;
    private static final Logger logger = LoggerFactory.getLogger(OauthController.class);

    @GetMapping("/user")
    private ResponseEntity<Map<String, Object>> getUser(@AuthenticationPrincipal User user) {

        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = HttpStatus.OK;
        UserResponseDto responseDto = null;
//        String refreshToken = null;
//        String userId = user.get;
        logger.info("user {}", user);
            resultMap.put("refreshToken", "asd");

//        try {
//            userLoginResponseDto = userService.getLoginUser(userId);
//            refreshToken = userService.getRefreshToken(userId);
//            resultMap.put("user", userLoginResponseDto);
//            resultMap.put("refreshToken", refreshToken);
//        } catch (Exception e) {
//            resultMap.put("error", e.getMessage());
//            status = HttpStatus.INTERNAL_SERVER_ERROR;
//        }
        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

}
