import React from "react";

const CheckBox = ({ checked, label, handleChange }: { checked?: Boolean; label: string; handleChange: (value: string) => void; }) => {
    return <div onClick={() => handleChange(label)} className={`${checked ? 'bg-purple-300' : 'bg-gray-200'} py-2 px-4 rounded-full flex items-center gap-2 border ${checked ? 'border-pink-600' : 'border'}`}>
        <input type="radio" name="" className="accent-pink-600" checked={checked ? true : false} readOnly />
        <span>{label}</span>
    </div>
}

export default CheckBox;