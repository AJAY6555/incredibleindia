import React, { Component } from 'react'
import { FaBus, FaCar, FaUsers, FaHotel, FaTrain, FaCaretDown, FaCalculator, FaCalendar } from 'react-icons/fa'
import { FaLeftRight, FaPlane, FaRightLeft } from 'react-icons/fa6'


export default class Inspired extends Component {
  render() {
    return (
      <div className='bg-blue-300 h-[150vh] pt-24 bg-cover bg-center '
      style={{
        backgroundImage:
        'url("https://pikwizard.com/pw/medium/c58d80278a435dc1f3f285c757a26293.jpg")'
      }}>
        <div className='text-center text-6xl text-white font-extralight'>Inspired?</div>
        <p className='text-center pt-3 text-8xl font-extrabold text-white'>GET STARTED</p>
        <div className='flex flex-wrap gap-x-4 justify-center items-center w-11/12 m-auto mt-10'>
          <div className=' w-1/5 bg-red-500 h-16 flex items-center justify-center gap-3 text-lg font-bold text-white border-2 rounded-lg'><FaPlane className='text-3xl'/> Flights </div>
          <div className='w-1/5 h-16 flex items-center justify-center gap-3 text-lg font-bold text-white border-2 rounded-lg'><FaTrain className='text-3xl'/>Trains</div>
          <div className=' w-1/6 h-16 flex items-center justify-center gap-3 text-lg font-bold text-white border-2 rounded-lg'><FaBus className='text-3xl'/> Buses</div>
          <div className=' w-1/6 h-16 flex items-center justify-center gap-3 text-lg font-bold text-white border-2 rounded-lg'><FaCar className='text-3xl'/> Cabs</div>

          <div className=' w-1/5  h-16 flex items-center justify-center gap-3 text-lg font-bold text-white border-2 rounded-lg'><FaHotel className='text-3xl'/> Accommodation </div>
          <div className=' w-1/5 mt-4 h-16 flex items-center justify-center gap-3 text-lg font-bold text-white border-2 rounded-lg'><FaUsers className='text-3xl'/> Travel Partners</div>
        </div>

        <div className='flex justify-center gap-11 font-bold text-lg text-white mt-12 '>
          <div className='hover:underline hover:text-yellow-200 hover:cursor-pointer'>One Way</div>
          <div className='hover:underline hover:text-yellow-200 hover:cursor-pointer'>Round Trip</div>
        </div>

        <div className='w-11/12 m-auto  mt-7 flex  justify-center gap-4 relative'>
          <div className='w-[360px] h-14 flex gap-2'>
            <div className='border-2 w-1/2 rounded-lg bg-white'>
              <div className='text-gray-400 text-sm font-medium pl-4'>From</div>
              <div className='text-gray-400 text-sm font-medium pl-4'>Origin</div>
            </div>
            <div className='border-2 w-1/2 rounded-lg bg-white'>
              <div className='text-gray-400 text-sm font-medium pl-4'>To</div>
              <div className='text-gray-400 text-sm font-medium pl-4'>Origin</div>
            </div>

            <div className='absolute bg-white p-2 rounded-full border-2 mt-2 ml-40'>
               <FaRightLeft/>
            </div>

          </div>
          <div className='border-2 rounded-lg bg-white w-[450px] h-12 flex'>
            <div className='w-1/2 border relative'>
              <div className='text-gray-400 font-medium text-sm'>Deaprt</div>
              <div className='font-medium text-sm'>Sun, 01 Feb, 26</div>
              <FaCalendar className='absolute ml-48 -mt-7 text-2xl'/>
            </div>
            <div className='w-1/2 border text-lg text-gray-200 pt-2 pl-3 font-semibold'>Return</div>
          </div>
          <div className=' w-[330px] h-12 flex gap-3'>
            <div className='border-2 rounded-lg bg-white w-40  pl-2 font-medium text-sm pt-3 flex'>
              1 Traveler<FaCaretDown className='ml-14 text-lg'/>
            </div>
            <div className='border-2 rounded-lg bg-white w-40 font-medium text-sm pt-3 pl-2 flex'>Econnomy<FaCaretDown className='ml-14 text-lg'/> </div>
            
          </div>
        </div>


        <div className='m-auto w-3/5  h-14 flex mt-10'>
          <div className=' pt-2 w-24 text-sm text-white font-medium '>Select A <br/> Fare Type:</div>
          <div className=' ml-3 bg-white w-full border-2 rounded-lg flex'>
            <div className='w-1/5 border-2 flex items-center justify-center gap-3'>
            <input type='radio' />
            <div className='font-medium text-sm '>Regular <br/> Fares</div>
            </div>
            <div className='w-1/5 border-2 flex items-center justify-center gap-3'>
              <input type='radio' />
              <div className='font-medium text-sm '>Armed <br/> Forces Fares</div>
            </div>
            <div className='w-1/5 border-2 flex items-center justify-center gap-3'>
              <input type='radio' />
              <div className='font-medium text-sm '>Student <br/> Fares</div>
            </div>
            <div className='w-1/5 border-2 flex items-center justify-center gap-3'>
              <input type='radio' />
              <div className='font-medium text-sm '>Senior <br/> Citizen Fares</div>
            </div>
            <div className='w-1/5 border-2 flex items-center justify-center gap-3'>
              <input type='radio'/>
              <div className='font-medium text-sm '>Doctors & <br/> Nurses Fares</div>
            </div>

          </div>

        </div>

        <div className='flex text-center justify-center mt-9 gap-2 '>
          <input type='checkbox' className='text-3xl'/>
          <div className='text-white font-medium text-sm'>Direct flight only</div>
        </div>

        <div className='m-auto text-center w-36 bg-gray-300 mt-10 p-2 rounded-full text-white font-semibold '>Search</div>

        <p className='text-center text-white mt-10 font-medium'>The information related to booking is provided through API integration from various Online Travel Aggregators (OTA). Other OTAs interested in integration with <br/> Incredible India Digital Portal may contact the Ministry of Tourism.</p>
      </div>
    )
  }
}
