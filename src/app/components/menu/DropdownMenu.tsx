// 드롭다운 메뉴 컴포넌트
import React from 'react';

interface DropdownMenuProps {
  options: string[];
  onSelect: (option: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, onSelect }) => {
  return (
    <ul className="dropdown-menu">
      {options.map((option) => (
        <li key={option} onClick={() => onSelect(option)}>
          {option}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;