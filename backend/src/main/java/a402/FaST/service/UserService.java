package a402.FaST.service;

import a402.FaST.model.dto.TokenDto;
import a402.FaST.model.dto.UserRequestDto;
import a402.FaST.model.dto.UserResponseDto;
import a402.FaST.model.entity.User;

import java.util.Map;

public interface UserService {
    UserResponseDto signup(UserRequestDto requestDto);
    TokenDto getToken(UserRequestDto requestDto) throws Exception;
    UserResponseDto getUser(UserRequestDto requestDto);
    Boolean checkMail(UserRequestDto requestDto) ;
    Boolean checkNickname(UserRequestDto requestDto) ;
    Boolean deleteUser(int id) ;
    UserResponseDto modifyNickname (int id, UserRequestDto requestDto);
    void tempPassword (UserRequestDto requestDto) throws Exception;

    UserResponseDto findUser(int id);

    String findSalt(UserRequestDto requestDto);

    Map<String, Object> findByJwtUser(TokenDto token);

    UserResponseDto findJwtUser(String email, String provider);
}
