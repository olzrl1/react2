// 툴팁 컴포넌트
import React from 'react';

interface TooltipProps {
  message: string;
}

const Tooltip: React.FC<TooltipProps> = ({ message }) => {
  return <span className="tooltip">{message}</span>;
};

export default Tooltip;