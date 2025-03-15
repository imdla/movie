package com.example.back.domain.user.response;

import com.example.back.domain.user.request.SignupRequestDto;
import com.example.back.domain.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SignupResponseDto {
    private String username;
    private String email;

    public static SignupRequestDto from(User entity) {
        return SignupRequestDto.builder()
                .username(entity.getUsername())
                .email(entity.getEmail())
                .build();
    }
}
