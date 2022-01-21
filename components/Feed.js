/* eslint-disable */
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import DATA from '../data'
import { TYPES } from '../data';
import SpiffyCompany from '../assets/spiffy_proper.png'
import { retContentType, retFlag } from '../helpers/utils'

const Wrapper = styled.View`
  min-height: 240px;
  padding: 4px;
  width: 100%;
  padding-bottom: 10px;
`;

const CenterContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const NoContentText = styled.Text`
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
`;

const CardView = styled.View`
  min-height: 220px;
  width: 220px;
  margin-right: 8px;
  padding: 0;
  background-color: #EEEEEE34;
  position: relative;
`;

const CardImage = styled.Image`
  height: 220px;
  width: 220px;
  padding: 0;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`

const CompanyView = styled.View`
  width: 100%;
  padding: 0px 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const CardBottom = styled.View`
  padding: 6px;
  background-color: lightgray;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 80px;
`

const CompanyImage = styled.Image`
  height: 40px;
  width: 60px;
`

const TitleText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  font-style: italic;
  color: black;
  margin-bottom: 4px;
`

const InfoText = styled.Text`
  color: rgba(0, 0, 0, .7);
  font-weight: 400;
  font-size: 12px;
`

const InfoContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const CardTypeHint = styled.View`
  border-radius: 2px;
  background-color: #FFFFFF99;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
`

const ModuleCard = ({item}) => {
  return (
    <CardView>
      <TouchableOpacity
        activeOpacity={0.76}
      >
        <CardImage source={item.image} style={{resizeMode: 'contain'}}/>
        <CardBottom>
          <TitleText>{item.title}</TitleText>
          <InfoContainer>
            <InfoText>
              Questions:
            </InfoText>
            <InfoText>{item.questions}</InfoText>
          </InfoContainer>
          <InfoContainer>
            <InfoText>Time:</InfoText>
            <InfoText>{item.time} mins</InfoText>
          </InfoContainer>
          <InfoContainer>
            <InfoText>Content Type:</InfoText>
            <InfoText>{retContentType(item.contentType)}</InfoText>
          </InfoContainer>
        </CardBottom>
        <CardTypeHint>
          {retFlag(item.type)}
        </CardTypeHint>
      </TouchableOpacity>
    </CardView>
  )
}

const getFeedFiltered = (feedType, data) => {
  if( feedType === TYPES.ALL) return data;

  return data.filter(item => item.type === feedType);

} 

const Feed = ({feedType}) => {
  const showData = getFeedFiltered(feedType, DATA);
  return (
    <Wrapper>
      {
        showData.length > 0 ? (
          <>
            <CompanyView>
              <CompanyImage source={SpiffyCompany} style={{resizeMode: 'contain'}} />
            </CompanyView>
            <FlatList
              data={showData}
              renderItem={ModuleCard}
              keyExtractor={item => item.id}
              horizontal
            />
          </>
        ) : (
          <CenterContent>
            <NoContentText>No Modules Available</NoContentText>
          </CenterContent>
        )
      }

    </Wrapper>
  )
}

export default Feed
