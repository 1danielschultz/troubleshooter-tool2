import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  background-color: var(--qbo-purple-primary);
  color: white;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: var(--qbo-purple-primary);
  font-weight: bold;
  font-size: 16px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <LogoImage>
          <span>QBO</span>
        </LogoImage>
        <Title>QuickBooks Online Troubleshooter</Title>
      </Logo>
    </HeaderContainer>
  );
};

export default Header;
