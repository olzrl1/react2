// 아이콘 컴포넌트
import React from 'react';

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  return <i className={`icon-${name}`} />;
};

export default Icon;