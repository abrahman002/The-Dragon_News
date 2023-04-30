import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftCard from './LeftCard';

const LeftNav = () => {

    const [categories,setCategories]=useState([]);
    console.log(categories)
    useEffect(()=>{
        fetch('https://the-news-dragon-server-abdurrahmanislamhossainx223-gmailcom.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
       
    },[])
    return (
        <div>
            <h3>All Category</h3>
            <h4 className='bg-light p-3 text-center rounded mt-3'>National News</h4>
            <div className='ms-5 mt-3 '>
                {
                    categories.map(category=><p
                      key={category.id}
                    >
                     <Link to={`/category/${category.id}`} className='text-black text-decoration-none' >{category.name}</Link>
                    </p>)
                }
            </div>
            <LeftCard></LeftCard>
        </div>
    );
};

export default LeftNav;