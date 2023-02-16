import { useState, useEffect, useRef } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import Header from "./header";
import styled from "styled-components";
import RedSpinner from "./hooks/spinner";

function Identify() {
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);

  const imageRef = useRef();
  const textInputRef = useRef();
  const fileInputRef = useRef();

  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
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
    textInputRef.current.value = "";
    const results = await model.classify(imageRef.current);
    setResults(results);
  };

  const handleOnChange = (e) => {
    setImageURL(e.target.value);
    setResults([]);
  };

  const triggerUpload = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    loadModel();
  }, []);

  useEffect(() => {
    if (imageURL) {
      setHistory([imageURL, ...history]);
      // eslint-disable-next-line react-hooks/exhaustive-deps

    }
  }, [imageURL, history, setHistory]);

  if (isModelLoading) {
    return (
      <>
        <LoadTitle>모델 로딩 중...</LoadTitle>
        <RedSpinner loading={isModelLoading} size={40} />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="App">
        <h1 className="header">이미지 분류기</h1>
        <div className="inputHolder">
          <input
            type="file"
            accept="image/*"
            className="uploadInput"
            onChange={uploadImage}
            ref={fileInputRef}
          />
          <button className="uploadImage" onClick={triggerUpload}>
            이미지 업로드
          </button>
          <span className="or">또는</span>
          <input
            type="text"
            placeholder="이미지 URL 붙여넣기"
            ref={textInputRef}
            onChange={handleOnChange}
          />
        </div>
        <div className="mainWrapper">
          <div className="mainContent">
            <div className="imageHolder">
              {imageURL && (
                <img
                  src={imageURL}
                  alt="Upload Preview"
                  crossOrigin="anonymous"
                  ref={imageRef}
                />
              )}
            </div>
            {results.length > 0 && (
              <div className="resultsHolder">
                {results.map((result, index) => {
                  return (
                    <div className="result" key={result.className}>
                      <span className="name">{result.className}</span>
                      <span className="confidence">
                        신뢰 확률:{" "}
                        {(result.probability * 100).toFixed(2)}%{" "}
                        {index === 0 && (
                          <span className="bestGuess">최적</span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {imageURL && (
            <button className="button" onClick={identify}>
              판별하기
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Identify;

const LoadTitle = styled.h2`
  text-align: center;
`
