import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <TopSpace />
      <Title>DeepLearning Projects</Title>
      <Link to="/lists">딥러닝 기능 보러가기</Link>
    </div>
  )
}


const easeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
  }
`

const Title = styled.p`
  font-size: 40px;
  font-weight: 620;
  text-align: center;
  animation: ${easeIn} 1s ease-in;
`

const TopSpace = styled.div`
  height: 380px;
`