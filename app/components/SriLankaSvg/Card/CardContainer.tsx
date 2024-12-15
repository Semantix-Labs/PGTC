import React from 'react';

interface CardContainerProps {
  children: React.ReactNode;
  isVisible: boolean;
}

const CardContainer: React.FC<CardContainerProps> = ({ children, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full transform transition-all">
        {children}
      </div>
    </div>
  );
};

export default CardContainer;