"use client"
import { useEffect, useRef, useState } from "react"
import { FaRegCalendarPlus, FaTrashCan } from "react-icons/fa6"
import { nanoid } from 'nanoid'

const page = () => {
  const firstRender = useRef(false)

  const getList = () => {
    try{
      const List = window.localStorage.getItem('List')
      return List ? JSON.parse(List) : []
    }
    catch(error){
      return []
    }
  }
  const [list, setList] = useState(getList)

  const addToList = (FormData) => { 
    setList(prev => [...prev, {id: nanoid(), task: `${FormData.get("List")}`}])
  }

  const deleteFromList = (id) => {
    setList(prev => prev.filter(item => item.id !== id)) 
  }
  
  useEffect(() =>{
      if(!firstRender){
        firstRender.current = true
        return
      }
      window.localStorage.setItem('List', JSON.stringify(list))
  },[list])
  return (
    <div className='min-h-[200px] mt-20 mx-auto bg-zinc-900 max-w-[350px]'>
      <span className="flex gap-x-3 p-5">
        <FaRegCalendarPlus /> To-Do List
      </span>
      <form action={addToList} className="p-5 flex gap-x-3">
         <input
            className="border rounded-xl bg-zinc-800 flex-1 pl-2"
            name="List"
            type="text"
            required
          />
         <input
              className="border border-red-500 rounded-lg bg-red-500 py-1 px-2" 
              type="submit"
              value="Add"
          />
      </form>
      {list.map((item) => {
        return(
                <div key={item.id} className="p-5 flex justify-between gap-x-3">
                  <p className="text-xl">{item.task}</p>
                  <button onClick={() => deleteFromList(item.id)} className="text-xl text-red-700 cursor-pointer"><FaTrashCan /></button>
                </div>
        )
      })}
    </div>
  )
}

export default page