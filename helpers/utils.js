/* eslint-disable */
import React from 'react'
import {TYPES, CONTENT_TYPES} from '../data';
import { 
  FlagAssigned, 
  FlagOptional, 
  FlagSurvey, 
  FlagTest,
  StyledFileText, 
  StyledPlus, 
  StyledVideo, 
} from '../styles';
import styled from 'styled-components/native'

const HoldIcons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const retContentType = (type) => {
  if (type === CONTENT_TYPES.PDF) return <StyledFileText height={12} width={12} />;
  if (type === CONTENT_TYPES.VIDEO) return <StyledVideo height={12} width={12} />;

  return (
    <HoldIcons>
      <StyledFileText height={12} width={12} />
      <StyledPlus height={12} width={12} />
      <StyledVideo height={12} width={12} />
    </HoldIcons>
  )
}

export const retFlag = (type) => {
  if (type === TYPES.ASSIGNED) return <FlagAssigned height={16} width={16} />
  if (type === TYPES.OPTIONAL) return <FlagOptional height={16} width={16} />
  if (type === TYPES.SURVEY) return <FlagSurvey height={16} width={16} />
  if (type === TYPES.TEST) return <FlagTest height={16} width={16} />
}