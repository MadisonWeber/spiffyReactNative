/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { FlagAssigned, FlagOptional, FlagSurvey, FlagTest} from '../styles';


const Container = styled.View`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  z-index: 1000;
`

const StyledPicker = styled(DropDownPicker)`
  border: 1px solid #EEEEEE;
  font-size: 18px;
`;

const FilterFeed = ({
  feedType, 
  setFeedType,
  TYPES,
}) => {

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'All Modules', value: TYPES.ALL },
    {label: 'Assigned Modules', value: TYPES.ASSIGNED, icon: () => <FlagAssigned height={14} width={14} />},
    {label: 'Optional Modules', value: TYPES.OPTIONAL, icon: () => <FlagOptional height={14} width={14} />},
    {label: 'Surveys', value: TYPES.SURVEY, icon: () => <FlagSurvey height={14} width={14} />},
    {label: 'Tests', value: TYPES.TEST, icon: () => <FlagTest height={14} width={14} /> }
  ])

  return (
    <Container>
      <StyledPicker
        open={open}
        value={feedType}
        items={items}
        setOpen={setOpen}
        setValue={setFeedType}
        setItems={setItems}
        showBadgeDot={true}
        mode="BADGE"
        textStyle={{
          fontSize: 18,
          fontWeight: '400',
        }}
      />
    </Container>
  )
}

export default FilterFeed;
