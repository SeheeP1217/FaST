package a402.FaST.model.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "article")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String imgPath;
    private String content;
    private LocalDateTime createTime;  ;
    @ColumnDefault("0")
    private int likeCount;
    @ColumnDefault("0")
    private int commentCount;
    private String let;
    private String lng;

    @OneToMany(mappedBy = "article", cascade = {CascadeType.REMOVE}, orphanRemoval = true)
    private List<ArticleHasTag> tags = new ArrayList<>();

    @OneToMany(mappedBy = "article", cascade = {CascadeType.REMOVE}, orphanRemoval = true)
    private List<Comment> comments = new ArrayList<>();

//    @OneToMany(mappedBy = "article", cascade = {CascadeType.REMOVE}, orphanRemoval = true)
//    private List<Like> likes = new ArrayList<>();

    @ManyToOne(targetEntity = User.class, fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;


}