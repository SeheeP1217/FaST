package a402.FaST.model.dto;

import a402.FaST.model.entity.Follow;
import a402.FaST.model.entity.User;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FollowingResponseDto {
    private UserResponseDto toUser;

    public FollowingResponseDto(Follow to) {
        this.toUser = UserResponseDto.from(to.getToId());
    }
}