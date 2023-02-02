import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <TopSpace />
      <Title>DeepLearning Projects</Title>
      <LinkContainer>
        <LinkStyle to="/lists">딥러닝 기능 보러가기</LinkStyle>
      </LinkContainer>
    </div>
  );
}

const LinkContainer = styled.div`
  width: 132.94px;
  height: 18px;
  margin: 0 auto;
`;

const LinkStyle = styled(Link)`
  color: #2F96F0;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    opacity: 0.7
  }
`;

const easeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
  }
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 620;
  text-align: center;
  animation: ${easeIn} 1s ease-in;
`;

const TopSpace = styled.div`
  height: 380px;
`;
