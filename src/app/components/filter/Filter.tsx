// 필터 컴포넌트 
import React from 'react';

interface FilterProps {
  options: string[];
  onSelect: (option: string) => void;
}

const Filter: React.FC<FilterProps> = ({ options, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Filter;