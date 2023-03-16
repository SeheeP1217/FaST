package a402.FaST.service;


import a402.FaST.Oauth.KakaoUserInfo;

public interface KakaoService {
    KakaoUserInfo kakaoLogin(String code);
}
