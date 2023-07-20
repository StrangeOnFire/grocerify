import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink, Outlet } from 'react-router-dom';


export default function Header() {
 

  return (
    <>
      <div className=' fixed z-50 left-0 top-0 w-full h-fit'>
        <div className=' flex justify-between items-center ps-8  w-full bg-lime-500 h-11 text-white'>
          <h1 className='font-bold text-xl'>Grocerify</h1>
          <div className='pe-8 flex justify-around gap-4'>
            <Link to={''} >
              <SearchIcon />
            </Link>
            <Link to={''} >
              <ShoppingCartIcon />
            </Link>
            <Link to={''} >
              <h5> LOGIN</h5>
            </Link>
          </div>
        </div>
      </div>
        <div className='flex header font-bold justify-around pt-2 pb-2 text-sm pb-1'>
          <NavLink to={'/'}  >Home</NavLink>
          <NavLink to={'/Categories'}  >Categories</NavLink>
          <NavLink to={'/GroupBuy'}  >Group Buy</NavLink>
          <NavLink to={'/TopOffers'}  >Top Offers</NavLink>
        </div>
      <Outlet />
    </>
  )
}
