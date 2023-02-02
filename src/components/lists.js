import React from "react";
import styled from "styled-components";
import logo from "../assets/imgs/tensor_logo.png";
import { useNavigate } from "react-router-dom";

export default function Lists() {
  const navigate = useNavigate();

  return (
    <div>
      <TopSpace />
      <Title>Tensorflow.js 모델 기반 딥러닝 기능</Title>
      <MidSpace>
        Explore pre-trained models to add computer vision, natural language
        processing (NLP), and other common ML tasks to your web and
        browser-based applications.
      </MidSpace>
      <div>
        <ModelLists>
          <Models>
            <ModelContainer onClick={() => navigate("/image-identify")}>
              <LogoContainer>
                <InnerSpace />
                <LogoStyle src={logo} alt="이미지" />
              </LogoContainer>
              <Label>이미지 판별</Label>
              <Description>
                ImageNet 데이터베이스의 라벨로 이미지를 분류합니다. (MobileNet)
              </Description>
            </ModelContainer>
          </Models>
          <Models>
            <ModelContainer onClick={() => navigate("/image-identify")}>
              <LogoContainer>
                <InnerSpace />
                <LogoStyle src={logo} alt="이미지" />
              </LogoContainer>
              <Label>배경 이미지 인식 및 제거</Label>
              <Description>
                브라우저에서 이미지를 세분화하여 배경을 제거합니다. (BodyPix.js)
              </Description>
            </ModelContainer>
          </Models>
          <Models>
            <ModelContainer onClick={() => navigate("/image-identify")}>
              <LogoContainer>
                <InnerSpace />
                <LogoStyle src={logo} alt="이미지" />
              </LogoContainer>
              <Label>이미지 판별</Label>
              <Description>
                ImageNet 데이터베이스의 라벨로 이미지를 분류합니다. (MobileNet)
              </Description>
            </ModelContainer>
          </Models>
        </ModelLists>
      </div>
    </div>
  );
}

const Description = styled.p`
  font-size: 14px;
  color: #425066;
  margin-left: 18px;
  margin-top: -100px;
  width: 208.73px;
  height: 44px;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 220px;
  margin-left: 18px;
`;

const InnerSpace = styled.div`
  height: 70px;
`;

const LogoContainer = styled.div`
  width: 120px;
  height: 110px;
  margin: 0 auto;
`;

const LogoStyle = styled.img`
  width: 120px;
  height: 110px;
`;

const MidSpace = styled.div`
  width: 597.5px;
  height: 90px;
  margin: 0 auto;
  color: #425066;
`;

const ModelContainer = styled.div`
  width: 268.73px;
  height: 318.11px;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  cursor: pointer;
  transition: width 0.5s ease-in-out;
  &:hover {
    width: 300px;
    height: 320px;
  }
`;

const Models = styled.li`
  list-style: none;
  margin-left: 40px;
`;

const ModelLists = styled.ul`
  display: flex;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 33px;
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
`;

const TopSpace = styled.div`
  height: 85px;
`;
