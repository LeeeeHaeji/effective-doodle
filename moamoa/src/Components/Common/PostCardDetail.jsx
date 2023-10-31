import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PostCardUser from './PostCardUser';
import MoreBtn from './MoreBtn';
import styled from 'styled-components';
import heartBg from '../../Assets/icons/heart.svg';
import heartBgFill from '../../Assets/icons/heart-fill.svg';
import commentBg from '../../Assets/icons/message-circle.svg';
import Datacalc from './datecalc'

export default function PostCardDetail(post) {
  // const [heartCount, setHeartCount] = useState("");
  const [toggleCount, setToggleCount] = useState(false);
  const [heartcolor, setHeartColor] = useState(heartBg);

  // const baseUrl = `https://api.mandarin.weniv.co.kr/`

  const postprop = post.post.post;
  console.log(postprop);
  console.log(postprop.image);
  const postImgUrl = `${postprop.image}`;
  const postDetailId = post.post.id;
  const postDetailUrl = `/post/${postDetailId}`;

  const handleHeartCount = () => {
    if (toggleCount === true) {
      setHeartColor(heartBgFill);
      // setHeartCount((prev)=> prev + 1);
    } else {
      setHeartColor(heartBg);
      // setHeartCount((prev)=> prev + 1-1);
    }
  };

  return (
    <>
      {post && (
        <PostList>
          <PostArticle>
            <Frofile>
              <PostCardUser
                url={postprop.author.image}
                username={postprop.author.username}
                accountname={postprop.author.accountname}
              />
              <MoreBtn />
            </Frofile>
            <Link to={postDetailUrl}>
              <PostDesc>{post.post.content}</PostDesc>
              {postImgUrl ? <PostImg src={postImgUrl} alt='게시글 사진' /> : null}
            </Link>
            <PostFooterContainer>
              <CreateDate>{Datacalc(postprop.createdAt)}</CreateDate>
              <div>
                <HeartBtn
                  onClick={() => {
                    setToggleCount((prev) => !prev);
                    handleHeartCount();
                  }}
                  heartcolor={heartcolor}
                >
                  {postprop.heartCount}
                </HeartBtn>
                <Link to={postDetailUrl}>
                  <CommentBtn>{postprop.commentCount}</CommentBtn>
                </Link>
              </div>
            </PostFooterContainer>
          </PostArticle>
        </PostList>
      )}
    </>
  );
}

const PostList = styled.li`
  &:first-child { 
      padding-top: 4rem; 
    }
`;

const PostArticle = styled.article`
  margin-top: 3rem;
`;
const Frofile = styled.div`
  margin: 0 auto;
  height: 4.2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PostImg = styled.img`
  width: 35.8rem;
  height: 22.8rem;
  margin: 0 auto;
  aspect-ratio: 358/228;
  object-fit: cover;
  border-radius: 1rem;
  &:hover {
    cursor: default;
  }
`;
const PostDesc = styled.p`
  font-size: 1.4rem;
  margin: 1.2rem 0 1.6rem;
  &:hover {
    cursor: default;
  }
`;
const PostFooterContainer = styled.div`
  margin: 1.5rem 0.8rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CreateDate = styled.p`
  font-size: 1rem;
  color: #767676;
`;

const HeartBtn = styled.button`
  padding-left: 2.6rem;
  height: 2rem;
  color: transparent;
  background: url(${(props) => props.heartcolor}) 0.2rem no-repeat;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background: url(${(props) => props.heartcolor}) 0.2rem no-repeat;
  }
`;

const CommentBtn = styled.button`
  height: 2rem;
  padding-left: 2.3rem;
  color: #767676;
  &:link {
    color: #767676;
  }
  &:hover {
    cursor: pointer;
  }
  background: url(${commentBg}) 0.2rem no-repeat;
  background-position-x: -0.1rem;
`;