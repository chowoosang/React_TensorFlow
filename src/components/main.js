import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Main() {
  return (
    <Container>
      <ContainerList>
        <Link to="/image-identify">이미지 식별기</Link>
      </ContainerList>
      <ContainerList>
        <Link to="/delete-background">배경 인식 및 제거기</Link>
      </ContainerList>
      <ContainerList>
        <Link to="/webcam-detection">웹캠으로 사물 인식하기</Link>
      </ContainerList>
    </Container>
  );
}

const Container = styled.ul`
  list-style: none;
  display: flex;
`;

const ContainerList = styled.li`
  padding: 30px;
`;
