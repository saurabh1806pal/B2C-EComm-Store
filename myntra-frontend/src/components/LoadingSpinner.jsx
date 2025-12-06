import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        {/* Spinner */}
        <div className="inline-block">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <h2 className="mt-6 text-xl font-semibold text-gray-800">Loading...</h2>
        <p className="mt-2 text-sm text-gray-500">
          Please wait while we fetch your items
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
