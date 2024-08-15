import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>

      <SelectElement value={value} onChange={onChange}>
          {children}
      </SelectElement>
      <SelectDiv>
        {displayedValue}
        <Icon id={'chevron-down'} size={16}></Icon>
      </SelectDiv>
     
    </Wrapper>
  );
};


const Wrapper = styled.div`
  isolate: isolate;
  position: relative;
  width: 191px;
`

const SelectElement = styled.select`
  opacity: 0;
  position: absolute;
  background-color: ${COLORS.transparentGray15};
  font-size: 8px;
  color: ${COLORS.gray700};
  border-radius: 6px;
  height: 100%;
  width: 100%;
  top:0;
  right:0;
  appearance: none;
`


const SelectDiv = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 6px;
  padding: 6px;
  font-size: 8px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
 
  ${SelectElement}:focus + &{
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
 
  ${SelectElement}:hover + &{
    color: ${COLORS.black};
  }
  `
export default Select;
