/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components/native'
import { StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import ME from '../assets/me.jpg'
import SegmentedControlTab from "react-native-segmented-control-tab";
import FakeChart from '../assets/fakechart.png';
import Spiffy from '../assets/spiffy_proper.png'
import PitaPit from '../assets/pitapit.png';
import { XCircle, Plus, Save } from 'react-native-feather';
import { SubtitleText } from '../styles';

const Container = styled.View`
  flex: 1;
  background-color: white;
`

const StyledPlus = styled(Plus)`
  color: black;
`

const SaveChangeIcon = styled(Save)`
  color: dodgerblue;
`

const XCircleStyled = styled(XCircle)`
  margin-left: 8px;
  margin-right: 0px;
  color: tomato;
  transform: translateY(2px);
`


const ProfileTop = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const AvatarBig = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 100px;
`

const UserNameTitle = styled.Text`
  font-size: 26px;
  font-weight: 300;
`

const HoldSelect = styled.View`
  width: 100%;
  padding: 10px;
`

const InfoContainer = styled.View`
  flex: 1;
  width: 100%; 
  padding: 10px;
`;

const StatContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2px 0px;
`;

const Spacer = styled.View`
  height: 16px;
`

const StatType = styled.Text`

`;

const StatResult = styled.Text`

`

const TeamText = styled.Text`
  font-size: 16px;
  font-weight: 200;
`

const ChartHolder = styled.Image`
  width: 100%;
  height: 200px;
`

const CompanyImage = styled.Image`
  height: 40px;
  width: 60px;
`

const TeamContainer = styled.View`
  margin: 2px 0px;
  background-color: #EEEEEE88;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
`

const AddTeamBtn = styled(TouchableOpacity)`
  margin-top: auto;
  border-radius: 8px;
  padding: 8px;
  width: 100%;
  background-color: aliceblue;
  border: 1px solid rgba(0, 0, 0, .5);
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const ButtonText = styled.Text`
  font-size: 18px; 
  color: black;
`;

const StyledTextInput = styled.TextInput`
  border-radius: 8px;
  border: 1px solid #EEEEEE;
  padding: 10px;
  margin-bottom: 14px;
`

const InputLabel = styled.Text`
  font-size: 13px;
  margin-bottom: 2px;
  margin-left: 6px;
  color: slategray;
`

const Profile = () => {

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Container>
      <ProfileTop>
        <AvatarBig source={ME} />
        <UserNameTitle>Madison Weber</UserNameTitle>
      </ProfileTop>
      <HoldSelect>
        <SegmentedControlTab
          values={['Stats', 'Teams', 'Edit']}
          selectedIndex={tabIndex}
          onTabPress={(index) => setTabIndex(index)}
          activeTabStyle={tabStyles.activeTabStyle}
          tabContainerStyle={tabStyles.tabContainerStyle}
          tabStyle={tabStyles.tabStyle}
          tabTextStyle={tabStyles.tabTextStyle}
          borderRadius={4}
        />
      </HoldSelect>
      <InfoContainer>
        {
          tabIndex === 0 && (
            <InfoContainer>
              <SubtitleText>
                Overview
              </SubtitleText>
              <StatContainer>
                <StatType>
                  Total Submissions:
                </StatType>
                <StatResult>
                  18
                </StatResult>
              </StatContainer>
              <StatContainer>
                <StatType>
                  Total Completions:
                </StatType>
                <StatResult>
                  10
                </StatResult>
              </StatContainer>
              <StatContainer>
                <StatType>
                  Total Failed Attempts:
                </StatType>
                <StatResult>
                  8
                </StatResult>
              </StatContainer>
              <StatContainer>
                <StatType>
                  # Outstanding Modules:
                </StatType>
                <StatResult>
                  4
                </StatResult>
              </StatContainer>
              <StatContainer>
                <StatType>
                  Average Score:
                </StatType>
                <StatResult>
                  82%
                </StatResult>
              </StatContainer>
              <StatContainer>
                <StatType>
                  Pass Rate:
                </StatType>
                <StatResult>
                  42%
                </StatResult>
              </StatContainer>
              <Spacer />
              <SubtitleText>
                Activity
              </SubtitleText>
              <ChartHolder source={FakeChart}/>
          </InfoContainer>
          )
        }
        {
          tabIndex === 1 && (
            <InfoContainer>
              <SubtitleText>Your Current Teams</SubtitleText>
              <TeamContainer>
                <CompanyImage source={Spiffy} style={{resizeMode: 'contain'}}/>
                <TeamText>
                  Z Spiffy Team
                  <TouchableOpacity>
                    <XCircleStyled height={18} width={18} />
                  </TouchableOpacity>
                </TeamText>
              </TeamContainer>
              <TeamContainer>
                <CompanyImage source={PitaPit} style={{resizeMode: 'contain'}}/>
                <TeamText>
                  Pita Pit
                  <TouchableOpacity>
                    <XCircleStyled height={18} width={18} />
                  </TouchableOpacity>
                </TeamText>
              </TeamContainer>
              <AddTeamBtn
                onPress={()=> console.log("pressed")}
              >
                <StyledPlus />
                <ButtonText>Add Team</ButtonText>
              </AddTeamBtn>
            </InfoContainer>
          )
        }
        {
          tabIndex === 2 && (
            <InfoContainer>
              <SubtitleText>
                Edit Your Information
              </SubtitleText>
              <Spacer />
              <InputLabel>Name</InputLabel>
              <StyledTextInput
                value="Madison Weber"
                onChangeText={() => console.log("cant cahnge yet")}
              />
              <InputLabel>Email</InputLabel>
              <StyledTextInput
                value="madison.weber.dev@gmail.com"
                onChangeText={() => console.log("cant cahnge yet")}
              />
              <InputLabel>Phone Number</InputLabel>
              <StyledTextInput
                value="289 879 1067"
                onChangeText={() => console.log("cant cahnge yet")}
              />
              <InputLabel>Occupation</InputLabel>
              <StyledTextInput
                value="Budtender"
                onChangeText={() => console.log("cant cahnge yet")}
              />
            </InfoContainer>
          )
        }
      </InfoContainer>
    </Container>
  )
}

export default Profile


const tabStyles = StyleSheet.create({
  activeTabStyle: {
    backgroundColor: '#f5d000',
  },
  tabContainerStyle: {
    borderColor: 'black',
  },
  tabStyle: {
    color: 'black',
    borderColor: 'black',
    backgroundColor: '#EEEEEE',
  },
  tabTextStyle: {
    color: 'black',
  }
})