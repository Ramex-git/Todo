import { FaRegCalendarPlus } from "react-icons/fa6"

const page = () => {
  return (
    <div className='h-[500px] mt-20 mx-auto bg-white max-w-[350px] text-black'>
      <span className="flex gap-x-3">
        <FaRegCalendarPlus /> Todo list
      </span>
    </div>
  )
}

export default page