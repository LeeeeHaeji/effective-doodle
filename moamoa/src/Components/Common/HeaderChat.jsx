import React from 'react';
import Gobackbtn from '../../Components/Common/GoBackbtn';
import MoreBtn from '../../Components/Common/MoreBtn';
import styled from 'styled-components';
import PropTypes from 'prop-types';

HeaderChat.propTypes = {
  headerText: PropTypes.string,
};

export default function HeaderChat(props) {
  const { headerText } = props;

  return (
    <HeaderChatRoom>
      <Gobackbtn />
      <h2>{headerText}</h2>
      <MoreBtn />
    </HeaderChatRoom>
  );
}
const HeaderChatRoom = styled.div`
  display: flex;
  height: 55px;
  width: 390px;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;
  background-color: #fff;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
`;
