import { JSX } from "react";
import { FaRegCircleQuestion , FaChevronRight } from "react-icons/fa6";
interface info {
    title : string,
    amount : string,
    order? : string 
}
const PaymentInfo = ({ title , amount , order } : info): JSX.Element =>{
    return <div className="rounded-[8px] flex flex-col min-w-[300px] shadow-sm gap-4 p-5 h-fit">
        <div className="flex gap-2 items-center">{title}<FaRegCircleQuestion/></div>
        <div className="flex justify-between">
            <h2 className="text-3xl font-semibold">{amount}</h2>
            {order && (
                <p className="flex gap-1 underline items-center text-blue-700">
                    {order} <FaChevronRight />
                </p>
            )}
        </div>
    </div>
}

export default PaymentInfo;