// 리스트 컴포넌트
import React from 'react';

interface ListProps {
  title: string;
  description: string;
}

const List: React.FC<ListProps> = ({ title, description }) => {
  return (
    <div className="list">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default List;