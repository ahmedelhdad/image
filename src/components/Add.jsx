import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Add = () => {
  const [product,setProduct] = useState()
  const [img,setImage] = useState({
    file:[],
    filepreview:null
  })
  const handlerImage = (event) => 
  {
    setImage({
      ...img,
      file:event.target.files[0]
    })
  }
  const handler = (title) => async(event) => 
  {
    setProduct({
      ...product,
    [title] :event.target.value
    })
  }
  const habdlerAdd = async() =>
  {
    
  
    try
    {
      const formdata = new FormData();
      formdata.append("avatar", img.file);
      const { data } = await axios.post('http://localhost:5050/api/addProduct',{...formdata})

      console.log('Succsed')

    }catch(err)
    {
      console.log('err')
    }
  }
  return (
    <div className='mt-10 w-[50%] mx-auto space-y-5'>
        <h1>Add Product</h1>
        <input type="text" onChange={handler('name')} className=' w-full border-2 p-2 border-gray-400' placeholder='name' />
        <input type="text" onChange={handler('slug')}  className=' w-full border-2 p-2 border-gray-400' placeholder='slug' />
        <input type="text" onChange={handler('category')}  className=' w-full border-2 p-2 border-gray-400' placeholder='category' />
        <input type="file" onChange={handlerImage}  className=' w-full border-2 p-2 border-gray-400' placeholder='img' />
        <input type="text" onChange={handler('price')}  className=' w-full border-2 p-2 border-gray-400' placeholder='price' />
        <input type="text" onChange={handler('numReviews')}  className=' w-full border-2 p-2 border-gray-400' placeholder='numReviews' />
        <input type="text" onChange={handler('countInStock')}  className=' w-full border-2 p-2 border-gray-400' placeholder='countInStock' />
        <input type="text" onChange={handler('description')}  className=' w-full border-2 p-2 border-gray-400' placeholder='description' />
        <button onClick={habdlerAdd} className='bg-blue-400 w-full p-2 text-white cursor-pointer'>Add</button>
    </div>
  )
}

export default Add