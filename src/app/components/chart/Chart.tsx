// 차트 컴포넌트
import React from 'react';

interface ChartProps {
  data: number[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <div>
      <h3>Chart</h3>
      <div>
        {/* 차트 라이브러리와 함께 데이터를 시각화 */}
      </div>
    </div>
  );
};

export default Chart;