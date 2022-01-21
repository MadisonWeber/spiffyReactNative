/* eslint-disable */
import React from 'react';
import styled from 'styled-components/native'
import Logo from '../assets/primary.png';
import { Menu } from 'react-native-feather';
import { TouchableOpacity } from 'react-native';

const HeaderContainer = styled.View`
  width: 108%;
  height: 40px;
  margin-bottom: 10px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-left: -15px;
`

const Hamburger = styled(Menu)`
  color: black;
`;

const HeaderImage = styled.Image`
  height: 60px;
  width: 94px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImage source={Logo} style={{resizeMode: 'contain'}} />
      <TouchableOpacity>
        <Hamburger height={28} width={28} />
      </TouchableOpacity>
    </HeaderContainer>
  )
}

export default Header
