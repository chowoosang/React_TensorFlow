import React from "react";
import styled from "styled-components";

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
  border: 1px solid #E6E6E6;
  border-radius: 6px;
`

const Models = styled.li`
  list-style: none;
  margin-left: 40px;
`

const ModelLists = styled.ul`
  display: flex;
  justify-content: center;
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