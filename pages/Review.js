/* eslint-disable */
import React from 'react';
import styled from 'styled-components/native'

const Wrapper = styled.View`
  flex: 1;
  background-color: #FFF;
`

const ReviewText = styled.Text`
  padding: 20px;
  font-size: 18px;
`

const Review = () => {
  return (
    <Wrapper>
      <ReviewText>
        You have 10 modules available for review. 
      </ReviewText>
    </Wrapper>
  )
}

export default Review
