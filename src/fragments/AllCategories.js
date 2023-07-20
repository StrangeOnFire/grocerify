import React from 'react'
import all from '../images/grocery.png'
import { Link } from 'react-router-dom'



export default function AllCategories({}) {

    let categoriesArray = [
            {
                img:all,
                description:'All Categories',
                path:'/Categories'
            },
            {
                img:all,
                description:'All Categories',
                path:'/Categories'
            },
            {
                img:all,
                description:'All Categories',
                path:'/Categories'
            },
            {
                img:all,
                description:'All Categories',
                path:'/Categories'
            },
            {
                img:all,
                description:'All Categories',
                path:'/Categories'
            },
            {
                img:all,
                description:'All Categories',
                path:'/Categories'
            },
            {
                img:all,
                description:'All Categories',
                path:'/Categories'
            },
            {
                img:all,
                description:'All Categories',
                path:'/Categories'
            },
            {
                img:all,
                description:'All Categories',
                path:'/Categories'
            },
            {
                img:all,
                description:'All Categories',
                path:'/Categories'
            },
            {
                img:all,
                description:'All Categories',
                path:'/Categories'
            },
            {
                img:all,
                description:'All Categories',
                path:'/Categories'
            },
    ]
  return (
    
categoriesArray.map((element)=>(
   <Link to={element.path}>
     <div className='' key={element.description}>
        <img className=' w-16' src={element.img} alt='img'/>
        <p className='text-xs'>{element.description}</p>
    </div>
   </Link>
))
    
  )
}
