import React from 'react'
import { NavLink } from 'react-router-dom'
// import useFetch from '../hooks/useFetch'
// import Spinner from '../utils/Spinner'


export default function Navlocker(isOpen,setOpen) {
  return (
     <div className='position-fixed top-0 h-100 w-100 h-screen left-0 nav-locker'>
        <div className='my-5 mx-2 uppercase text-lg'>
        <NavLink to='/search'onClick={()=>setOpen(!isOpen)}>
           <p className='mb-4 fw-bold' style={{color:'#a1a1a1'}}>SEARCH</p>
       </NavLink>
      <NavLink to='/tvshows' onClick={()=>setOpen(!isOpen)}>
          <p className='mb-4 fw-bold'style={{color:'#a1a1a1'}}>TV SHOWS</p>
      </NavLink>
          <a href="www.tvmaze.com" target='_blank' className="uppercase text-white text-xl fw-bold">
              FIND OUT MORE 
            </a>
        </div>
    </div>
  )
}
