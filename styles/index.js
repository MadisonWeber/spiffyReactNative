import styled from 'styled-components/native';
import {Flag, FileText, Video, Plus} from 'react-native-feather';

export const FlagAssigned = styled(Flag)`
  color: darkgreen;
`;

export const FlagOptional = styled(Flag)`
  color: dodgerblue;
`;

export const FlagSurvey = styled(Flag)`
  color: orange;
`;

export const FlagTest = styled(Flag)`
  color: tomato;
`;

export const SubtitleText = styled.Text`
  font-size: 16px;
  color: darkgrey;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const StyledFileText = styled(FileText)`
  color: black;
  transform: translateY(4px);
`;

export const StyledPlus = styled(Plus)`
  color: black;
  transform: translateY(4px);
  margin: 0px 2px;
`;

export const StyledVideo = styled(Video)`
  color: black;
  transform: translateY(4px);
`;
