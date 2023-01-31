import '@tensorflow/tfjs';
import * as bodyPix from '@tensorflow-models/body-pix'
import * as fs from 'fs';
import * as jimp from 'jimp';
import React, { useState, useEffect, useRef } from 'react';

const BodyPix = () => {
    const [model, setModel] = useState(false);
    const [isModelLoading, setIsModelLoading] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [results, setResults] = useState(null);

    const imageRef = useRef();

    const loadModle = async () => {
        setIsModelLoading(true);
        try {
            if (!bodyModel) {
                const resNet = {
                    architecture: 'ResNet50',
                    outputStride: 16,
                    qunatBytes: 4
                };
                const bodyModel = await bodyPix.load(resNet);
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export default BodyPix;