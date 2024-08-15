import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {

  small:{
    '--border-width': 1 + 'px' ,
    '--font-size': 14 + 'px',
  },
  large:{
    '--border-width': 2 + 'px' ,
    '--font-size': 18 + 'px',

  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const styles = SIZES[size];


  return <Wrapper style={styles} width={width + 'px'}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <IconWrapper>
     <Icon id={icon} size={size=='small'? 14 + 'px' : 18 + 'px'}></Icon>
    </IconWrapper>
    <Input placeholder={placeholder}></Input>
  </Wrapper>;
};


const Wrapper = styled.label`
  width: ${p=> p.width};
  position: relative;
  display: flex;
  align-item: center;
  justify-items: center;
  border-bottom-width: var(--border-width);
  border-bottom-color: ${COLORS.black};
  border-bottom-style: solid;
  font-size: var(--font-size);
  color: ${COLORS.gray700};

  &:hover{
    color: ${COLORS.black};
  }
`;


const Input = styled.input`
  width: 100%;
  padding: 8px 8px 8px 24px;
  border: none;
  font-size: inherit;
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder{
    color: ${COLORS.gray500};
    font-weight: 400;
  }

`;

const IconWrapper = styled.div`
  position: absolute;
  left: 2px;
  bottom: 8px;
  text-align: center;

`

export default IconInput;