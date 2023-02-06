import "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";
import { useEffect, useState } from "react";
import { useRef } from "react";
import RedSpinner from "./hooks/spinner";
import styled from "styled-components";
import useTitle from "./hooks/title";
import Header from "./header";

const Remove = () => {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("배경 제거"))

  const loadImage = () => {
    const img = new Image();
    img.src = process.env.PUBLIC_URL + "/girl.jpeg";

    const ctx = canvasRef.current.getContext("2d");

    img.addEventListener("load", () => {
      canvasRef.current.width = img.width;
      canvasRef.current.height = img.height;
      ctx.drawImage(img, 0, 0);
    });
  };

  const backgroundRemoval = async () => {
    setLoading(true);

    const canvas = canvasRef.current;
    const net = await bodyPix.load({
      architecture: "ResNet50",
      outputStride: 32,
      quantBytes: 4,
    });
    const segmentation = await net.segmentPerson(canvas, {
      internalResolution: "medium",
      segmentationThreshold: 0.7,
      scoreThreshold: 0.7,
    });
    const ctx = canvas.getContext("2d");
    const { data: imgData } = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    );

    const newImg = ctx.createImageData(canvas.width, canvas.height);
    const newImgData = newImg.data;

    segmentation.data.forEach((segment, i) => {
      if (segment === 1) {
        newImgData[i * 4] = imgData[i * 4];
        newImgData[i * 4 + 1] = imgData[i * 4 + 1];
        newImgData[i * 4 + 2] = imgData[i * 4 + 2];
        newImgData[i * 4 + 3] = imgData[i * 4 + 3];
      }
    });

    ctx.putImageData(newImg, 0, 0);
    setLoading(false);
  };

  useEffect(() => {
    loadImage();
  }, []);

  return (
    <div>
      <Header />
      <canvas ref={canvasRef} style={{ width: '1000px', height: '700px', marginTop: '100px' }}/>
      <div>
        {loading ? (
          <div>
            <LoadingText>제거중...</LoadingText>
            <RedSpinner loading={loading} size={30} />
          </div>
        ) : null}
      </div>
      <ButtonContainer>
        <Button onClick={backgroundRemoval}>제거</Button>
      </ButtonContainer>
    </div>
  );
};

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const ButtonContainer = styled.div`
  width: 150px;
  height: 50px;
  margin: 0 auto;
  margin-top: 50px;
`;

const LoadingText = styled.h2`
  text-align: center;
`;

export default Remove;
