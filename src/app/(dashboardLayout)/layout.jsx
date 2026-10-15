import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex gap-3'>
      <div>
        <Sidebar></Sidebar>
      </div>
      {children}
      </div>
  )
}

export default layout