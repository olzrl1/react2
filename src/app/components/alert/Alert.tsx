// 경고 및 알림 컴포넌트
import React from 'react';

interface AlertProps {
  message: string;
  type: 'error' | 'success';
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  return <div className={`alert ${type}`}>{message}</div>;
};

export default Alert;