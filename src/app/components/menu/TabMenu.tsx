// 상단 탭 메뉴
import React, { useState } from 'react';

const TabMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-menu">
      <ul>
        <li
          className={activeTab === 'Tab1' ? 'active' : ''}
          onClick={() => handleTabClick('Tab1')}
        >
          실시간공시
        </li>
        <li
          className={activeTab === 'Tab2' ? 'active' : ''}
          onClick={() => handleTabClick('Tab2')}
        >
          공시DATA
        </li>
        <li
          className={activeTab === 'Tab3' ? 'active' : ''}
          onClick={() => handleTabClick('Tab3')}
        >
          공시검색기
        </li>
        <li
          className={activeTab === 'Tab4' ? 'active' : ''}
          onClick={() => handleTabClick('Tab3')}
        >
          주가검증기
        </li>
        <li
          className={activeTab === 'Tab5' ? 'active' : ''}
          onClick={() => handleTabClick('Tab3')}
        >
          검증DATA
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === 'Tab1' && <div>실시간공시</div>}
        {activeTab === 'Tab2' && <div>공시DATA</div>}
        {activeTab === 'Tab3' && <div>공시검색기</div>}
        {activeTab === 'Tab4' && <div>주가검증기</div>}
        {activeTab === 'Tab5' && <div>검증DATA</div>}
      </div>
    </div>
  );
};

export default TabMenu;