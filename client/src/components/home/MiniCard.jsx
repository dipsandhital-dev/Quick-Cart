import React from 'react'

const MiniCard = ({title, icon, number, footerNum, trend = "up"}) => {
  return (
    <div className='bg-gradient-to-br from-[#1f1f1f] to-[#1a1a1a] py-6 px-6 rounded-xl w-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2a2a2a] hover:border-[#3a3a3a]'>
      <div className='flex items-start justify-between mb-4'>
        <h1 className='text-gray-300 text-sm font-medium tracking-wide uppercase'>
          {title}
        </h1>
        <button 
          className={`${
            title === "Total Earning" 
              ? "bg-gradient-to-br from-green-500 to-green-600" 
              : "bg-gradient-to-br from-yellow-500 to-yellow-600"
          } p-3 rounded-lg text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105`}
        > 
          {icon} 
        </button>
      </div>

      <div>
        <h1 className='text-white text-4xl font-bold mb-3 tracking-tight'>
          {number}
        </h1>
        <div className='flex items-center gap-2'>
          <span className={`${
            trend === "up" ? "text-green-400" : "text-red-400"
          } text-sm font-semibold`}>
            {trend === "up" ? "↑" : "↓"} {footerNum}
          </span>
          <p className='text-gray-400 text-sm'>than yesterday</p>
        </div>
      </div>
    </div>
  )
}

export default MiniCard