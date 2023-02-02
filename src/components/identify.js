import * as mobilenet from "@tensorflow-models/mobilenet";
import { useState, useEffect, useRef } from "react";
import "@tensorflow/tfjs";
import styled from "styled-components";
import RedSpinner from "./hooks/spinner";
import useTitle from "./hooks/title";

export default function Identify() {
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState([]);

  const titleUpdater = useTitle("불러오는 중...")
  setTimeout(() => titleUpdater("이미지 분류"))

  const imageRef = useRef();

  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
      setIsModelLoading(false);
    } catch (err) {
      console.log(err);
      setIsModelLoading(false);
    }
  };

  const uploadImage = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
    } else {
      setImageURL(null);
    }
  };

  const identify = async () => {
    const results = await model.classify(imageRef.current);
    setResults(results);
  };

  useEffect(() => {
    loadModel();
  }, []);

  if (isModelLoading) {
    return (
      <div>
        <LoadText>모델을 불러오는 중...</LoadText>
        <RedSpinner loading={isModelLoading} size={50} />
      </div>
    );
  }

  console.log(results);

  return (
    <div>
      <MainTitle>이미지 식별기</MainTitle>
      <InputContainer>
        <Input
          type="file"
          accept="image/*"
          capture="camera"
          onChange={uploadImage}
        />
      </InputContainer>
      <div>
        {imageURL && (
          <img
            src={imageURL}
            alt="미리보기"
            ref={imageRef}
            crossOrigin="origin"
          />
        )}
      </div>
      <div>
        {results.map((result, index) => {
          return (
            <Container key={result.className}>
              <span>{result.className}</span>
              <br />
              <span>
                신뢰도: {(result.probability * 100).toFixed(2)}%{" "}
                {index === 0 && <Best>최고 확률</Best>}
              </span>
            </Container>
          );
        })}
      </div>
      <div>{imageURL && <button onClick={identify}>판별하기</button>}</div>
    </div>
  );
}

const LoadText = styled.h2`
  text-align: center;
`;

const Input = styled.input`
  width: 200px;
  height: 40px;
`;

const InputContainer = styled.div`
  width: 200px;
  height: 40px;
  background-color: black;
`;

const MainTitle = styled.h1`
  text-align: center;
  width: 100%;
  height: 40px;
  background-color: #3498db;
  color: white;
  margin-top: 0px;
`;

const Best = styled.span`
  background-color: black;
  color: white;
  font-weight: 700;
`;

const Container = styled.div`
  margin-top: 30px;
`;
