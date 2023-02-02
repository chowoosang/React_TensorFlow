import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Lists() {
    return (
        <div>
            <TopSpace />
            <Title>Tensorflow.js 모델 기반 딥러닝 기능</Title>
        </div>
    )
}

const Title = styled.p`
  font-size: 33px;
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
`

const TopSpace = styled.div`
  height: 85px;
`