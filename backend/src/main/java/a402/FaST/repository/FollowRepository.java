package a402.FaST.repository;


import a402.FaST.model.PK.FollowPK;
import a402.FaST.model.entity.Follow;
import a402.FaST.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface FollowRepository extends JpaRepository<Follow, FollowPK> {
    boolean existsByFromIdAndToId(User fromId, User toId);
    int countByToId(User toId);
    int countByFromId(User fromId);

    @Modifying
    @Query("delete from Follow f where f.fromId = :fromId and f.toId = :toId")
    void FollowDelete(@Param("fromId") User fromId, @Param("toId") User toId);

//    List<Follow> findByToIdNotContaining(User toId);


}
