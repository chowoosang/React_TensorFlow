import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Main() {
    return (
        <div>
            <Link to="/image-identify">이미지 식별기</Link>
            <Link to="/delete-background">배경 인식 및 제거기</Link>
        </div>
    )
}