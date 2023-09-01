import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";

const Chip = ({ success, children }: { success: Boolean, children: React.ReactNode }) => {
    return <div
        className={`border ${success ? 'border-green-700 bg-green-200' : 'border-red-700 bg-red-200'} py-2 rounded-full flex items-center justify-center gap-4`}
    >
        {
            success ? (<BsCheck2 className="text-2xl" />) : (<AiOutlineClose className="text-lg" />)
        }
        {children}
    </div>
}

export default Chip;