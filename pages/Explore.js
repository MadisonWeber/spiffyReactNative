/* eslint-disable */
import React from 'react';
import styled from 'styled-components/native';
import SpiffyIcon from '../assets/app_icon.png';
import { FEATUREDMODULES, FEATURESBRANDS } from '../data';
import { retContentType, retFlag } from '../helpers/utils'
import { FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Emoji from 'react-native-emoji'
import { Plus } from 'react-native-feather'

const StyledPlus = styled(Plus)`
  color: white;
`

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const SubtitleText = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: 500;
  margin-left: 8px;
`;

const ListContainer = styled.View`
  padding: 10px;
  margin-bottom: 10px;
  margin-top: -2px;
`

const ExploreText = styled.Text`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
`

const ExploreHeader = styled.View`
  margin-top: 12px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px 8px;
  background-color: aliceblue;
  margin-bottom: 16px;
`

const AppImage = styled.Image`
  height: 26px;
  width: 26px;
  border-radius: 6px;
  margin-right: 6px;
`

const CardView = styled.View`
  min-height: 220px;
  width: 220px;
  margin-right: 8px;
  padding: 0;
  background-color: #EEEEEE34;
  position: relative;
  border-radius: 8px;
`;

const TitleText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  font-style: italic;
  color: black;
  margin-bottom: 4px;
`


const CompanyText = styled.Text`
  font-size: 14px;
  font-weight: 300;
`

const CardImage = styled.Image`
  height: 220px;
  width: 220px;
  padding: 0;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`
const CardBottom = styled.View`
  padding: 6px;
  background-color: lightgray;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 80px;
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

const AddButton = styled.TouchableOpacity`
  width: 100%;
  padding: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: darkgrey;
  border-radius: 4px;
  margin-top: auto;
`
const AddText = styled.Text`
  font-size: 14px;
  color: white;
`

const FeaturedBrand = ({item}) => {
  return(
    <CardView>
      <TouchableOpacity
        activeOpacity={0.76}
      >
        <CardImage source={item.image} style={{resizeMode: 'contain'}}/>
        <CardBottom>
          <TitleText>
            {item.company}
          </TitleText>
          <CompanyText>
            {item.modules} active modules
          </CompanyText>
          <AddButton>
            <StyledPlus height={14} width={14} />
          <AddText>Follow Brand</AddText>
          </AddButton>
        </CardBottom>
      </TouchableOpacity>
    </CardView>
  )
}

const FeaturedModule = ({item}) => {
  return (
    <CardView>
      <TouchableOpacity
        activeOpacity={0.76}
      >
        <CardImage source={item.image} style={{resizeMode: 'contain'}}/>
        <CardBottom>
          <TitleText>
            {item.title}
          </TitleText>
          <CompanyText>
            By: {item.company}
          </CompanyText>
          <AddButton>
            <StyledPlus height={14} width={14} />
          <AddText>Add Module</AddText>
          </AddButton>
        </CardBottom>
        <CardTypeHint>
          <Emoji name="fire" />
        </CardTypeHint>
      </TouchableOpacity>
    </CardView>
  )
}

const Explore = () => {
  return (
    <Container>
      <ExploreHeader>
        <AppImage source={SpiffyIcon}/>
        <ExploreText>
          Top Brands and Products
        </ExploreText>
      </ExploreHeader>
      <ScrollView>
        <SubtitleText>
          Featured Modules
        </SubtitleText>
        <ListContainer>
          <FlatList
            data={FEATUREDMODULES}
            renderItem={FeaturedModule}
            keyExtractor={item => item.id}
            horizontal
          />
        </ListContainer>
        <SubtitleText>
          Featured Brands
        </SubtitleText>
        <ListContainer>
          <FlatList
            data={FEATURESBRANDS}
            renderItem={FeaturedBrand}
            keyExtractor={item => item.id}
            horizontal
          />
        </ListContainer>
      </ScrollView>
    </Container>
  )
};

export default Explore
