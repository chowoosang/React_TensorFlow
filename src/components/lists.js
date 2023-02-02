import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Lists() {
    return (
        <div>
            <TopSpace />
            <Title>Tensorflow.js 모델 기반 딥러닝 기능</Title>
            <div>
                <ModelLists>
                    <Models>
                        <ModelContainer>
                            이미지 판별
                        </ModelContainer>
                    </Models>
                    <Models>
                        <ModelContainer>
                            배경 이미지 인식 및 제거
                        </ModelContainer>
                    </Models>
                    <Models>
                        <ModelContainer>
                            웹캠 사물 탐지
                        </ModelContainer>
                    </Models>
                </ModelLists>
            </div>
        </div>
    )
}

const ModelContainer = styled.div`
  width: 268.73px;
  height: 318.11px;
`

const Models = styled.li`
  
`

const ModelLists = styled.ul`
`

const Title = styled.p`
  font-size: 33px;
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
`

const TopSpace = styled.div`
  height: 85px;
`