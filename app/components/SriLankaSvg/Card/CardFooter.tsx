import React from 'react';
import { ArrowRight } from 'lucide-react';

const CardFooter: React.FC = () => {
  return (
    <button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
      More Info
      <ArrowRight className="w-4 h-4" />
    </button>
  );
};

export default CardFooter;