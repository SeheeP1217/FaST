import { CardType } from './CardType';
import { CommentType } from './CommentType';
import { ReplyType } from './ReplyType';
import { TagType } from './TagType';

// 검색 상자 Props
export interface SearchBoxProps {
  // 입력한 태그 배열
  tags: Array<TagType>;
  // 검색 키워드
  keyword: string;
  // 검색 키워드 변경 함수
  handleKeywordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // 검색 함수
  handleSearch: (event: React.FormEvent<HTMLFormElement>) => void;
  // 태그 배열에서 태그 삭제 함수
  handleTagDelete: (value: string) => void;
}

// 태그 props
export interface TagProps {
  // 태그 내용
  children: string;
  // 태그 클래스 이름
  className: string;
  // 태그 배열에서 태그 삭제 함수, null은 임의로 삭제하지 못하는 태그
  handleTagDelete: ((value: string) => void) | null;
}

// 사진 입력 Props
export interface InputPhotoProps {
  // 미리보기 이미지 url 배열
  imageUrls: Array<string>;
  // 이미지 입력 함수
  handleImageChange: React.ChangeEventHandler<HTMLInputElement>;
  // 입력한 이미지 삭제 함수
  handleImageDelete: () => void;
}

// 이미지 슬라이더 컨테이너 props
export interface ImageSliderContainerProps {
  // 이미지 경로 배열
  imageUrls: Array<string>;
}

// 이미지 슬라이더 Props
export interface ImageSliderProps extends ImageSliderContainerProps {
  // 이미지 가로 길이를 얻기 위한 ref
  imageRef: React.RefObject<HTMLDivElement>;
  // 이미지 가로 길이
  width: number;
  // 드래그한 거리
  transX: number;
  // 현재 보이는 이미지 인덱스
  imageIndex: number;
  // 이미지 왼쪽으로 넘기는 함수
  handleImageLeft: () => void;
  // 이미지 오른쪽으로 넘기는 함수
  handleImageRight: () => void;
  // 터치 시작시 실행되는 함수
  onTouchDown: (event: React.TouchEvent<HTMLElement>) => void;
  // 드래그 후 터치가 끝났을 때 실행되는 함수
  onTouchUp: () => void;
  // 드래그 중에 실행되는 함수
  handleTouchMove: (event: React.TouchEvent<HTMLElement>) => void;
}

// 카드 상세 props
export interface CardDetailProps {
  // 카드 정보
  card: CardType;
  // 좋아요 클릭 함수
  handleLikeClick: () => void;
  // 메뉴 상태
  isMenuOpen: boolean;
  // 메뉴 클릭 함수
  handleMenuClick: () => void;
  // 댓글 클릭 함수
  handleCommentClick: () => void;
}

// 댓글 Props
export interface CommentProps {
  // 댓글
  comment: CommentType;
  // 작성 중인 답글
  reply: string;
  // 답글 작성 함수
  handleReplyChange: React.ChangeEventHandler;
  // 답글 배열
  replies: Array<ReplyType>;
  // 답글 제출 함수
  handleReplySubmit: React.FormEventHandler;
  // 답글 작성칸이 열려있는지
  isWriteReplyOpen: boolean;
  // 답글 작성칸 열거나 닫는 함수
  handleWriteOpenClick: React.MouseEventHandler;
  // 답글을 보려고 하는지
  isVisibleReplies: boolean;
  // 답글란 열거나 닫는 함수
  handleVisibleRepliesClick: React.MouseEventHandler;
  // 현재 사용자가 이 댓글에 좋아요 누른 상태인지
  isLike: boolean;
  // 좋아요 클릭 함수
  handleLikeClick: React.MouseEventHandler;
}

// 댓글 목록 Props
export interface CommentsProps {
  comments: Array<CommentType>;
  handleCommentClick: React.MouseEventHandler;
}

// 댓글 컨테이너 Props
export interface CommentContinaerProps {
  // 댓글
  comment: CommentType;
}

// 카드 목록의 카드 Props
export interface PhotoCardProps {
  // 카드
  card: CardType;
}

// 카드 목록의 Props
export interface CardListProps {
  // 왼쪽 컬럼
  cardsLeft: Array<CardType>;
  // 오른쪽 컬럼
  cardsRight: Array<CardType>;
}

// 프로필 사진 입력 Props
export interface InputProfileProps {
  // 미리보기 이미지 url 배열
  imageUrl: string;
  // 이미지 입력 함수
  handleImageChange: React.ChangeEventHandler<HTMLInputElement>;
  // 입력한 이미지 삭제 함수
  handleImageDelete: () => void;
}
