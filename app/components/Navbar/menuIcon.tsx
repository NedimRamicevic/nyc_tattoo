import React from 'react'

const MenuIcon = () => {
  return (
    <>
      <button className="relative group">
        <div className="relative flex items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-transparent ring-0 ring-white hover:ring-2 group-focus:ring-4 ring-opacity-70 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
            <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
            <div className="bg-white h-[1px] rounded"></div>
            <div className="bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
          </div>
        </div>
      </button>
    </>
  )
}

export default MenuIcon