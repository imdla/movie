package com.example.back.domain.user.controller;

import com.example.back.domain.user.request.LoginRequestDto;
import com.example.back.domain.user.request.SignupRequestDto;
import com.example.back.domain.user.response.TokenResponseDto;
import com.example.back.domain.user.service.AuthService;
import com.example.back.global.Response.ApiResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<SignupRequestDto>> signup(@Valid @RequestBody SignupRequestDto requestDto) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(ApiResponse.ok(authService.signup(requestDto)));
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<TokenResponseDto>> login(@Valid @RequestBody LoginRequestDto requestDto) {
        return ResponseEntity.ok(ApiResponse.ok(
                authService.login(requestDto)
        ));
    }
}
