import * as mobilenet from "@tensorflow-models/mobilenet";
import { useState, useEffect, useRef } from "react";
import '@tensorflow/tfjs';
import styled from 'styled-components'

export default function App() {
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState([]);

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
    return <h2>모델을 불러오는 중...</h2>;
  }

  console.log(results);

  return (
    <div>
      <h1>이미지 식별기</h1>
      <div>
        <input
          type="file"
          accept="image/*"
          capture="camera"
          onChange={uploadImage}
        />
      </div>
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
            <Container>
              <span>{result.className}</span>
              <br />
              <span>
                신뢰도: {(result.probability * 100).toFixed(2)}%{" "}
                {index === 0 && <Best>최고 확률</Best>}
              </span>
            </Container>
          )
        })}
      </div>
      <div>{imageURL && <button onClick={identify}>판별하기</button>}</div>
    </div>
  );
}

const Best = styled.span`
  background-color: black;
  color: white;
  font-weight: 700;
`

const Container = styled.div`
  margin-top: 30px;
`
