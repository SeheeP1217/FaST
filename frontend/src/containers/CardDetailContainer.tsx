import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import CardDetailPage from '../pages/CardDetailPage';
import useViewModel from '../viewmodels/ArticleViewModel';

import { CommentType } from '../types/CommentType';
import { CardType } from '../types/CardType';
import { userInfo } from '../atoms/userInfo';

function CardDetailContainer() {
  const params = useParams();
  const { getArticle, downloadImages } = useViewModel();
  const user = useRecoilValue(userInfo);
  const [card, setCard] = useState<CardType>({
    content: '',
    id: 0,
    imageUrls: [],
    isLike: false,
    nickname: '',
    numComments: 0,
    numLikes: 0,
    regTime: '',
    tags: [],
  });
  // 메뉴가 열려있는지
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // 댓글창이 열려있는지
  const [isCommentOpen, setisCommentOpen] = useState<boolean>(false);
  // 댓글 배열
  const [comments, setComments] = useState<Array<CommentType>>([
    {
      id: 1,
      nickname: '샘플 닉네임',
      profile: '프로필이미지',
      content: '샘플 댓글 내용',
      regTime: '작성날짜',
      isLike: true, // 좋아요 눌렀는지
      numLikes: 123, // 좋아요 개수
      numReplies: 12, // 답글 개수
    },
    {
      id: 2,
      nickname: '샘플 닉네임 2',
      profile: '프로필 이미지2',
      content: '샘플 댓글 내용',
      regTime: '작성 날짜 2',
      isLike: false,
      numLikes: 11,
      numReplies: 13,
    },
  ]);

  // 메뉴 토글 버튼 클릭 함수
  const handleMenuClick = () => {
    setIsMenuOpen((prev: boolean) => !prev);
  };
  // 댓글 버튼 클릭 함수
  const handleCommentClick = () => {
    setisCommentOpen((prev: boolean) => !prev);
  };

  // 좋아요 클릭 함수
  const handleLikeClick = () => {
    if (card) {
      setCard({
        ...card,
        isLike: !card.isLike,
      });
    }
  };

  useEffect(() => {
    const getData = async () => {
      if (params.cardId) {
        const res = await getArticle(params.cardId, user.id);
        if (res.status === 200) {
          const imageUrls = await downloadImages(res.data.imgPath.split(','));
          const tags: any = [];
          res.data.tags.map((tag: any) =>
            tags.push({
              value: tag.tagName,
              className: 'tag-2',
            })
          );
          setCard({
            id: res.data.id,
            nickname: res.data.nickname,
            content: res.data.content,
            imageUrls,
            isLike: res.data.likeCheck,
            numLikes: res.data.likeCount,
            numComments: res.data.commentCount,
            regTime: new Date(res.data.createTime).toDateString(),
            tags,
          });
        }
      }
    };
    getData();
  }, []);

  return (
    <CardDetailPage
      card={card}
      comments={comments}
      handleLikeClick={handleLikeClick}
      isMenuOpen={isMenuOpen}
      handleMenuClick={handleMenuClick}
      isCommentOpen={isCommentOpen}
      handleCommentClick={handleCommentClick}
    />
  );
}

export default CardDetailContainer;
