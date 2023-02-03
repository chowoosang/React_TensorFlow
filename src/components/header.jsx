import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <>
          <HeaderContainer>
            <LogoContainer>
                <LogoTitle>Deep. Projects</LogoTitle>
            </LogoContainer>
          </HeaderContainer>
        </>
    )
}

export default Header;

const LogoTitle = styled.p`
    font-size: 22px;
    font-weight: 600;
`

const LogoContainer = styled.div`
    margin-left: 30px;
`

const HeaderContainer = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 80px;
`