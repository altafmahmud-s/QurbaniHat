import { FaSpinner } from 'react-icons/fa';

const LoadingSpinner = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="relative">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-primary"></div>
        <div className="animate-ping absolute top-0 left-0 h-20 w-20 rounded-full bg-primary opacity-20"></div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
        <p className="text-sm text-gray-500 mt-2">Please wait while we fetch the data</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;