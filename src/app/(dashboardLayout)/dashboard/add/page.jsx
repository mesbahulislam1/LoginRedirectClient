"use client"
import { addCourse } from '@/lib/api/course/addCourse.js'
import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
  const onSubmit = async(e)=>{
   
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    const addCours = await addCourse(data)
    
    if (addCours.acknowledged) {
      redirect('/courses')
    }
  }
  return (
    <div>
      <div className='max-w-[500px] bg-linear-to-l to-green-200 from-blue-300  rounded-md mt-6 '>
        <form onSubmit={onSubmit} className='  p-7 space-y-2'>
          <input type="text" name="title" className='w-full rounded-sm bg-white p-2 focus:outline-none' placeholder="Product Title" />

          <input type="text" name="image" className='w-full rounded-sm bg-white p-2 focus:outline-none' placeholder="Image URL" />

          <input type="text" name="category" className='w-full rounded-sm bg-white p-2 focus:outline-none' placeholder="Category" />

          <input
            type='text'
            name="description" className='w-full rounded-sm bg-white p-2 focus:outline-none'
            placeholder="Product Description"
          />

          <input type="number" name="price" className='w-full rounded-sm bg-white p-2 focus:outline-none' placeholder="Price" />

          <input type="number" name="quantity" className='w-full rounded-sm bg-white p-2 focus:outline-none' placeholder="Quantity" />

          <button type="submit" className='w-full px-4 py-1.5 rounded-full text-white font-semibold  cursor-pointer bg-linear-to-l to-green-400 from-blue-600  '>Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default page