import React from 'react'
import S1 from '../../../../../public/Images/Selection_1.jpg';
import S2 from '../../../../../public/Images/Selection_2.jpg';
import S3 from '../../../../../public/Images/Selection_3.jpeg';

import './Initial.css';

const Initial = () => {
  return (
    <>
    <div className='Background h-screen'>
        <div className="bg-black bg-opacity-30 h-full flex items-center justify-center">
            <div className="w-3/4 mx-auto px-0 lg:px-4 h-screen flex flex-col md:flex-row justify-center items-center text-white text-center gap-20 lg:gap-32">
                <div className="relative h-screen">
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-green-500"></div>
                        <div className="flex items-center justify-center w-auto h-screen">
                            <div className="rounded-full w-60 h-60 flex items-center justify-center relative z-10">
                                <img className="rounded-full w-60 h-60" src={S1} alt="select 1" />
                            </div>
                        </div>
                </div>
                <div className="flex items-center justify-center w-auto h-screen ">
                    <div className="rounded-full w-60 h-60 flex items-center justify-center">
                        <img className="rounded-full w-60 h-60" src={S2} alt="select 2" />
                    </div>
                </div>
                <div className="flex items-center justify-center w-auto h-screen ">
                    <div className="rounded-full w-60 h-60 flex items-center justify-center">
                        <img className="rounded-full w-60 h-60" src={S3} alt="select 3" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>

  )
}

export default Initial
