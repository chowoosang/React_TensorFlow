import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import menu from "../assets/imgs/menu_bar.png";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const onClick = () => {
    setIsClick(!isClick);
    setIsToggle(!isToggle);
  }

  return (
    <>
      <HeaderContainer isClick={isClick}>
        <TopSpace />
        <LogoContainer>
          <LogoTitle onClick={() => navigate("/")}>Deep. Projects</LogoTitle>
        </LogoContainer>
        <ListContainer isToggle={isToggle}>
          <Lists>
            <LinkStyle to="/image-identify">이미지 분류</LinkStyle>
          </Lists>
          <Lists>
            <LinkStyle to="/delete-background">배경 제거</LinkStyle>
          </Lists>
          <Lists>
            <LinkStyle to="/webcam-detection">웹캠 사물 탐지</LinkStyle>
          </Lists>
        </ListContainer>
        <MenuBar
          src={menu}
          alt="메뉴 로고"
          onClick={onClick}
          isClick={isClick}
        />
      </HeaderContainer>
    </>
  );
};

export default Header;

const MenuBar = styled.img`
  width: 50px;
  height: 50px;
  float: right;
  margin-top: -35px;
  margin-right: 10px;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
  cursor: pointer;
`;

const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
`;

const TopSpace = styled.div`
  height: 25px;
`;

const Lists = styled.li`
  list-style: none;
  font-size: 18px;
  margin-left: 100px;
  transition: font-size 0.5s ease-in-out;
  &:nth-child(1):hover {
    font-size: 20px;
  }
  &:nth-child(2):hover {
    font-size: 20px;
  }
  &:nth-child(3):hover {
    font-size: 20px;
  }
`;

const easeIn = keyframes`
  0% {
    transform: translateY(20px)
  }
`

const ListContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: -20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    display: ${(props) => (props.isToggle ? 'block' : 'none')};
    animation: ${easeIn} 1s;
    text-align: center;
    margin-right: 90px;
    line-height: 70px;
    margin-top: 25px;
  }
`;

const LogoTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  cursor: pointer;
`;

const LogoContainer = styled.div`
  margin-left: 30px;
`;

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  border: 1px solid #dfdfdf;
  @media screen and (max-width: 768px) {
    height: ${(props) => (props.isClick ? "300px" : "80px")};
    transition: height 0.5s ${(props) => (props.isClick ? 'ease-in-out' : 'ease-in')}
  }
  background-color: white;
`;

