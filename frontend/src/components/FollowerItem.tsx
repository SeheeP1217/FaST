import React, { useState, useEffect, useCallback } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { TiDelete } from 'react-icons/ti';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../utils/firebase';
import Modal from './Modal';
import cardimg from '../assets/images/photocardimg.jpeg';
import sample1 from '../assets/images/sample-images/sample_1.jpg';
import {
  UserProps,
  UserItemProps,
  FollowProps,
} from '../types/ComponentPropsType';
import followApi from '../api/follow';

function FollowItem({ follower }: any) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal]);

  const [profileImg, setProfileImg] = useState<string>('');

  useEffect(() => {
    if (follower.fromUser.imgPath.substring(0, 4) === 'http') {
      setProfileImg(follower.fromUser.imgPath);
    } else {
      const getProfileImage = async () => {
        const imageRef = ref(storage, follower.fromUser.imgPath);
        const ret = await getDownloadURL(imageRef);
        setProfileImg(ret);
      };
      getProfileImage();
    }
  }, []);

  // 팔로워 삭제 api
  const [fromId, setFromId] = useState<number>(2);
  const onClickDelete = async (followerId: number) => {
    const followerDelete: any = await followApi.followDelete(
      fromId,
      followerId
    );
    setOpenModal(!openModal);
    window.location.reload();
    return followerDelete;
  };
  return (
    <div>
      <div key={follower.fromUser.id} className="follow_box card">
        <img className="follow_profile_img" src={profileImg} alt="profileImg" />
        <div className="follow_id">{follower.fromUser.nickname}</div>

        {openModal && (
          <Modal onClickToggleModal={onClickToggleModal}>
            <div className="follow_delete_modal">
              <h3 className="follow_delete_text">
                {follower.fromUser.nickname}님의 <br /> 팔로잉을 끊으시겠습니까?{' '}
              </h3>
              <div>
                <p>
                  팔로워를 끊으면 {follower.fromUser.nickname}님에게 <br />{' '}
                  회원님의 게시물이 보이지 않습니다.
                </p>
              </div>
              <button
                className="follow_delete_btn"
                type="button"
                onClick={() => onClickDelete(follower.fromUser.id)}
              >
                팔로워 끊기
              </button>
              <button
                className="follow_delete_btn"
                type="button"
                onClick={() => {
                  setOpenModal(!openModal);
                }}
              >
                취소
              </button>
            </div>
          </Modal>
        )}
        <button
          className="follow_btn"
          type="button"
          onClick={onClickToggleModal}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default FollowItem;