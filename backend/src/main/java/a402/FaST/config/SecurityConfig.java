package a402.FaST.config;


import a402.FaST.Oauth.CustomUserOAuth2Service;
import a402.FaST.handler.OAuth2AuthenticationSuccessHandler;
import a402.FaST.jwt.JwtAccessDeniedHandler;
import a402.FaST.jwt.JwtAuthenticationEntryPoint;
import a402.FaST.jwt.JwtSecurityConfig;
import a402.FaST.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsUtils;
import org.springframework.web.filter.CorsFilter;

@EnableWebSecurity
@EnableMethodSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfig {
    private final TokenProvider tokenProvider;
    private final CorsFilter corsFilter;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;
    private final OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;
    private final CustomUserOAuth2Service CustomUserOAuth2Service;


    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return web -> {
            web.ignoring()
                    .antMatchers("/api-document/**", "/swagger-ui/**")
                    .antMatchers("/swagger/**","/v3/**","/swagger-resources/**");
        };
    }


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                // token을 사용하는 방식이기 때문에 csrf를 disable합니다.
                .csrf().disable()

                // 설정된 로그인 URL로 오는 요청을 감시하며, 유저인증을 처리합니다. 인증 실패 시, AuthenticationFailureHandler를 실행합니다.
                .addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)

                // exception handling 할 때 우리가 만든 클래스를 추가
                .exceptionHandling()
                .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .accessDeniedHandler(jwtAccessDeniedHandler)

                // 세션을 사용하지 않기 때문에 STATELESS로 설정
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                .and()
//                // HtppServletRequest을 사용하는 요청들에 대해 접근 제한 설정
                .authorizeHttpRequests()
//                // Preflight 요청은 허용한다는 의미
                .requestMatchers(CorsUtils::isPreFlightRequest).permitAll()

//                // 접근 제한 X
//                .antMatchers("/api/**").permitAll()
                .antMatchers("/api/login").permitAll()
                .antMatchers("/api/user/**").permitAll()
                .antMatchers("/tag/**").permitAll()
                .antMatchers("/oauth2/**").permitAll()
                .antMatchers("/login**").permitAll()
//                // 나머지는 필요
//                .anyRequest().authenticated()

                .and()
                .apply(new JwtSecurityConfig(tokenProvider))

//                .and()
//                .logout()
//                .logoutRequestMatcher(new AntPathRequestMatcher("/user/logout"))
//                .logoutSuccessUrl("/")
//                .invalidateHttpSession(true)

                // oauth2 를 이용한 소셜 로그인 설정 적용
                .and()
                .oauth2Login()
                .userInfoEndpoint()
                .userService(CustomUserOAuth2Service)

                .and()
                .successHandler(oAuth2AuthenticationSuccessHandler);

//                .defaultSuccessUrl("/login-success");
//                .successHandler(oAuth2AuthenticationSuccessHandler)
//                .userInfoEndpoint()
//                .userService(userOAuth2Service);

        return http.build();
    }
}


