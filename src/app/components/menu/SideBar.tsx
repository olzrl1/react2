// 사이드바
import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/"></Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;