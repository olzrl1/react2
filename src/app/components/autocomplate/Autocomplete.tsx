// 자동 완성 컴포넌트
import React, { useState } from 'react';

interface AutocompleteProps {
  suggestions: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState('');
  const filteredSuggestions = suggestions.filter((s) => s.includes(inputValue));

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <ul>
        {filteredSuggestions.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;