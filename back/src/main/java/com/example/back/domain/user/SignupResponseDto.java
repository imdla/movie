package com.example.back.domain.user;

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
