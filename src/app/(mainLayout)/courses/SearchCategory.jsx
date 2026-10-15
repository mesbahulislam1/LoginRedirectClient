"use client"

import { baseUrl } from '@/lib/api/baseUrl';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SearchCategory = () => {

  const [categoryList, setCategoryList] = useState([])

  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  const router = useRouter();


  useEffect(() => {
    const getFetch = async () => {
      const fetchData = await fetch(`${baseUrl}/courses`)
      const courses = await fetchData.json();
      setCategoryList(courses)
    }
    getFetch()
  }, [])

  
  const handelSearchClick =()=>{
    const params = new URLSearchParams();
    if (search) {
      params.set('search', search)
    }

    router.push(`/courses?${params.toString()}`)
  }


  const handelCategory = (e) => {
    const value = e.target.value;
    setCategory(value)
    const params = new URLSearchParams();

    if (value) {
      params.set('category', value)
    }
    router.push(`/courses?${params.toString()}`)
  }

  const handelReset =()=>{
    setSearch('')
    setCategory('')
    router.push('/courses')
  }
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">

        {/* Search Form */}
        <div className="flex w-full items-center gap-2 sm:max-w-xl">
          <div className="relative flex-1">
            <input
              onChange={(e)=> setSearch(e.target.value)}
              type="text"
              placeholder="Search products..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-4 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
            />
          </div>

          <button onClick={handelSearchClick}

            className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 active:scale-95"
          >
            Search
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-3">
          <div className="w-full sm:w-52">
            <select
              value={category}
              onChange={handelCategory}
              className="w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
            >
              <option value="">All Categories</option>
              {
                [...new Set(categoryList.map(item => item.category))].map((categorys) => (<option key={categorys} >{categorys}</option>))
              }
            </select>
          </div>
          <button onClick={handelReset} className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 active:scale-95">Reset</button>
        </div>
      </div>

    </div>
  )
}

export default SearchCategory
