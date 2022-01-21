/* eslint-disable */
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import Me from '../assets/me.jpg';
import Feed from '../components/Feed';
import FilterFeed from '../components/FilterFeed';
import { TYPES } from '../data';

const Wrapper = styled.View`
  flex: 1;
  background-color: #FFF;
`

const UpperContainer = styled.View`
  width: 100%;
  min-height: 60px;
  background-color: aliceblue;
  padding: 12px 10px 10px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

const UpperRight = styled.View`
  align-items: center;
  justify-content: center;
`

const UpperLeft = styled.View`
  display: flex;
  align-items: center;
`

const EditText = styled.Text`
  color: slategrey;
  font-weight: 400;
  font-size: 12px;
  margin-top: 4px;
`


const NameText = styled.Text`
  font-size: 16px; 
  font-weight: 600;
  font-style: italic;
`

const StatsText = styled.Text`
  font-size: 12px;
  color: slategrey;
  font-weight: 400;
`

const Avatar = styled.Image`
  border-radius: 46px;
  height: 46px;
  width: 46px;
  margin-top: -2px;
`;

const Home = ({navigation}) => {

  const [feedType, setFeedType] = useState(TYPES.ALL);

  return (
    <Wrapper>
      <UpperContainer>
        <UpperLeft>
          <NameText>
            Madison Weber
          </NameText>
          <StatsText>
            Completions: 10
          </StatsText>
          <StatsText>
            Outstanding: 4
          </StatsText>
          <StatsText>
            Pass Rate: 42%
          </StatsText>
        </UpperLeft>
        <UpperRight>
          <Avatar source={Me} />
          <TouchableOpacity>
            <EditText onPress={()=> navigation.navigate('Profile')}>
              Edit
            </EditText>
          </TouchableOpacity>
        </UpperRight>
      </UpperContainer>
      <FilterFeed 
        feedType={feedType}
        setFeedType={setFeedType}
        TYPES={TYPES}
      />
      <Feed 
        feedType={feedType}
      />
    </Wrapper>
  )
}

export default Home
