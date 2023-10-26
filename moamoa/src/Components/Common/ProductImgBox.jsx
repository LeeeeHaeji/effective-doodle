import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; // npm install prop-types 설치 필요

const ImgBox = styled.img.attrs({ alt: '축제포스터' })`
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  width: 172px;
  height: 110px;
`;
// 'src' 프로퍼티를 검증
ProductImgBox.propTypes = {
  src: PropTypes.string.isRequired, // 'src'는 문자열이고 필수 프로퍼티
};

export default function ProductImgBox(props) {
  return (
    <div>
      <ImgBox src={props.src} />
    </div>
  );
}
