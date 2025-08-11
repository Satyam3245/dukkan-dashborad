import { FaCaretDown, FaRegCircleQuestion } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegCommentDots } from 'react-icons/fa';
const Header = ()=>{
    return <header
        className="
            flex
            justify-between
            items-center
            border-b
            py-3
            px-3
            sm:px-8
            border-[#D9D9D9]
            sticky top-0
            bg-[#FFFFFF]
        ">
            {/* {first} */}
            <div className="flex gap-4 items-center">
                <h5 className="text-xl font-medium text-[#1A181E]">Payouts</h5>
                <div className="flex items-center gap-1">
                    <FaRegCircleQuestion className="text-md text-[#4D4D4D]"/>
                    <div className="text-xs">How it works</div>
                </div>
            </div>
            {/* {second} */}
            <div className="flex rounded items-center p-2 w-[150px]  gap-2 sm:flex-grow sm:max-w-[350px] bg-[#F2F2F2] text-[#808080]">
                <IoSearch/>
                <input
                  type="text" 
                  className="outline-none w-full" 
                  placeholder="Search feature, tutorials etc"
                />
            </div>
            {/* {third} */}
            <div className="flex items-center gap-2 ">
                <button className="rounded-full  p-2 text-[#4D4D4D] bg-[#E6E6E6]">
                    <FaRegCommentDots className="text-2xl"/>
                </button>
                <button className="rounded-full p-2 text-[#4D4D4D] bg-[#E6E6E6]">
                    <FaCaretDown className="text-2xl"/>
                </button>
            </div>
    </header>
}


export default Header;