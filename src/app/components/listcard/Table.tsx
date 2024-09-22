// 테이블 컴포넌트
import React from 'react';

interface TableProps {
  title: string;
  description: string;
}

const Table: React.FC<TableProps> = ({ title, description }) => {
  return (
    <div className="Table">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Table;