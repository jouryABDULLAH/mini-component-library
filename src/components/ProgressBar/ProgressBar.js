/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {

  small: {
    '--height': 8 + 'px',
    '--padding': 0 + 'px'
  },
  medium: {
    '--height': 16 +'px',
    '--padding': 0 + 'px'
  },
  large: {
    '--height': 24 + 'px',
    '--padding': 4 + 'px',
  }

};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error('unknown size !');
  }

  return  <Progress max="100" style={styles} value={value} aria-valuenow={value}>{value}</Progress>
  ;

};

const Progress = styled.progress`
  
  -webkit-appearance: none;
  appearance: none;
  border: none;
  border-radius: 8px;

  &[value]{
    height: var(--height);
    width: 370px;
    border-radius: 8px;
    padding: var(--padding);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }

  &[value]::-webkit-progress-bar {
    border-top-left-radius: 4px;
    border-top-right-radius: ${p=> (p.value==98 || p.value>98)? 4 + 'px' : 0 + 'px'};
    border-bottom-right-radius: ${p=> (p.value==98 || p.value>98)? 4 + 'px' : 0 + 'px'};
    border-bottom-left-radius: 4px;
  }
  &[value]::-webkit-progress-value {
    border-top-left-radius: 4px;
    border-top-right-radius: ${p=> (p.value==98 || p.value>98)? 4 + 'px' : 0 + 'px'};
    border-bottom-right-radius: ${p=> (p.value==98 || p.value>98)? 4 + 'px' : 0 + 'px'};
    border-bottom-left-radius: 4px;
  }
  &[value]::-moz-progress-bar {
    border-top-left-radius: 4px;
    border-top-right-radius: ${p=> (p.value==98 || p.value>98)? 4 + 'px' : 0 + 'px'};
    border-bottom-right-radius: ${p=> (p.value==98 || p.value>98)? 4 + 'px' : 0 + 'px'};
    border-bottom-left-radius: 4px;
  }
`;

export default ProgressBar;
