import React from 'react'

function LoadingScreen() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Kiri: Detail Pesanan */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="h-6 w-40 bg-gray-300 rounded mb-5"></div>

            <div className="grid grid-cols-12 gap-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="col-span-12 md:col-span-6">
                  <div className="h-4 w-1/3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-10 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>

            <div className="h-4 bg-gray-200 rounded my-6 w-1/3"></div>
            <div className="grid grid-cols-12 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="col-span-12 md:col-span-4">
                  <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
                  <div className="h-10 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kanan: Rincian Biaya */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="h-6 w-40 bg-gray-300 rounded"></div>
              <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
            </div>

            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center text-sm"
                >
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  <div className="h-4 w-16 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>

            <hr className="border-t border-gray-200 my-4" />

            <div className="flex justify-between items-center text-xl font-bold">
              <div className="h-5 w-20 bg-gray-300 rounded"></div>
              <div className="h-5 w-24 bg-gray-300 rounded"></div>
            </div>

            <hr className="border-t border-gray-200 my-4" />

            <div>
              <div className="h-4 w-1/3 bg-gray-200 rounded mb-2"></div>
              <div className="flex shadow-sm">
                <div className="flex-1 h-10 bg-gray-300 rounded-l"></div>
                <div className="h-10 w-10 bg-gray-200 border-l border-gray-300"></div>
                <div className="h-10 w-10 bg-gray-200 border-l border-gray-300 rounded-r"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen
