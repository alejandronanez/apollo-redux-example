import React from 'react';
import NonMemoizedNames from './NonMemoized';
import MemoizedNames from './Memoized';

const LeftPanel = () => (
  <div>
    <NonMemoizedNames />
    <MemoizedNames />
  </div>
);

export default LeftPanel;
