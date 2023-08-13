import { Circle, CircleOutlined } from '@mui/icons-material'
import React from 'react'

export default function Navdots({id,cur_id}) {
  return (
    <div className='h-10 flex items-center'> {id===cur_id ? <div className='h-2 w-2 bg-slate-800 rounded-md'></div>:<div className='h-2 w-2 bg-slate-400 rounded-md'></div>}</div>
  )
}
