import Header from "@/components/header";
import PaymentInfo from "@/components/paymentinfo";
import Sidebar from "@/components/sidebar";
import { FaRegCircleQuestion , FaChevronRight ,FaChevronDown } from "react-icons/fa6";
export default function Home() {
  return <main className="sm:p-8 w-full gap-8 flex flex-col">
    <div className="flex justify-between ">
      <h5 className="text-2xl font-semibold">Overview</h5>
      <button className="flex items-center gap-3 border rounded px-[14px] py-[6px] bg-white text-[#4D4D4D]">
            This Month <FaChevronDown />
        </button>
    </div>
    <div className="flex ">
      <div className="hover:bg-[#0E4F82] bg-[#146EB4] text-white min-w-[300px] rounded-[8px]">
        <h5 className="p-3 flex gap-2 items-center text-lg">Next Payout <FaRegCircleQuestion/> </h5>
        
        <div className="flex p-3 justify-between">
          <h2 className="text-3xl font-semibold">₹2,312.23</h2>
          <h2 className="flex gap-1 items-center underline font-medium">23 Orders <FaChevronRight/></h2>
        </div>

        <div className="flex bg-[#0E4F82] rounded-[8px] px-6 py-2 flex justify-between">
          <h4 className="text-lg">Next Payment Date:</h4>
          <h4 className="text-lg">Today, 4:00PM</h4>
        </div>

      </div>
      <PaymentInfo title="Amount Pending" amount="₹92,312.20" order="13 orders"/>
    </div>
  </main>
}
