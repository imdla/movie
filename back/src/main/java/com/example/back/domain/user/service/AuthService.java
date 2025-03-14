package com.example.back.domain.user.service;

import com.example.back.domain.user.request.LoginRequestDto;
import com.example.back.domain.user.request.SignupRequestDto;
import com.example.back.domain.user.response.SignupResponseDto;
import com.example.back.domain.user.User;
import com.example.back.domain.user.repository.UserRepository;
import com.example.back.domain.user.response.TokenResponseDto;
import com.example.back.global.security.JwtTokenProvider;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    @Transactional
    public SignupRequestDto signup(SignupRequestDto requestDto) {
        if (userRepository.existsByUsername(requestDto.getUsername())) {
            throw new IllegalArgumentException("이미 사용중인 아이디입니다.");
        }

        if (userRepository.existsByEmail(requestDto.getEmail())) {
            throw new IllegalArgumentException("이미 사용중인 이메일입니다.");
        }

        String encodePassword = passwordEncoder.encode(requestDto.getPassword());

        User user = requestDto.toEntity(encodePassword);
        return SignupResponseDto.from(userRepository.save(user));

    }

    @Transactional
    public TokenResponseDto login(LoginRequestDto requestDto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        requestDto.getUsername(),
                        requestDto.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtTokenProvider.createToken(authentication);

        return new TokenResponseDto(jwt);
    }
}
