import * as mobilenet from '@tensorflow-models/mobilenet'
import { useState, useEffect, useRef } from 'react';

export default function App() {
  const [model, setModel] = useState(null);
  const [isModelLoading, setIsModelLoading] = useState(false);
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
  }

  useEffect(() => {
    loadModel()
  }, [])

  if (isModelLoading) {
    return <h1>모델을 불러오는 중...</h1>
  }

  return (
    <div>
      <h1>이미지 식별기</h1>
    </div>
  )
}