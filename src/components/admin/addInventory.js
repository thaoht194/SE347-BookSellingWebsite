import React, { useState } from "react";


export const Addinventory = () => {

    const [select, setSelect] = useState('Pricing')
    return (
        <div className="bg-white p-6 rounded-xl">
            <h1 className="m-0 pb-4 border-b border-gray-400">
                Inventory
            </h1>
            <div className="flex flex-col lg:flex-row ">
                <div className="flex flex-row lg:flex-col w-full lg:w-[30%] ">
                    <a className={`cursor-pointer ${select === 'Pricing' ? 'text-black font-bold bg-slate-300' : 'text-gray-600 font-semi'} min-w-1/6 text-center  flex-1 border-b border-r border-gray-300  min-w-1/6 text-center  lg:min-w-[200px] text-sm items-center flex flex-row gap-4   px-2 py-3`}>
                        <span class="text-cetner material-symbols-outlined">
                            sell
                        </span>
                        <span className="hidden lg:block">Pricing</span>
                    </a>
                    <a className="flex-1 cursor-pointer border-b border-r border-gray-300 text-gray-600 min-w-1/6 text-center  lg:min-w-[200px] text-sm items-center flex flex-row gap-4  font-semi px-2 py-3">
                        <span class="text-cetner material-symbols-outlined">
                            inventory_2
                        </span>
                        <span className="hidden lg:block">Restock</span>
                    </a>
                    <a className="flex-1 cursor-pointer border-b border-r border-gray-300 text-gray-600 min-w-1/6 text-center  lg:min-w-[200px] text-sm items-center flex flex-row gap-4  font-semi px-2 py-3">
                        <span class="text-cetner material-symbols-outlined">
                            local_shipping
                        </span>
                        <span className="hidden lg:block">Shipping</span>
                    </a>
                    <a className="flex-1 cursor-pointer border-b border-r border-gray-300 text-gray-600 min-w-1/6 text-center  lg:min-w-[200px] text-sm items-center flex flex-row gap-4  font-semi px-2 py-3">
                        <span class="text-cetner material-symbols-outlined">
                            public
                        </span>
                        <span className="hidden lg:block">Global Delivery</span>
                    </a>
                    <a className="flex-1 cursor-pointer border-b border-r border-gray-300 text-gray-600 min-w-1/6 text-center  lg:min-w-[200px] text-sm items-center flex flex-row gap-4  font-semi px-2 py-3">
                        <span class="text-cetner material-symbols-outlined">
                            edit_attributes
                        </span>
                        <span className="hidden lg:block"> Atrbutes</span>
                    </a>
                    <a className="flex-1 cursor-pointer border-b border-r border-gray-300 text-gray-600 min-w-1/6 text-center  lg:min-w-[200px] text-sm items-center flex flex-row gap-4  font-semi px-2 py-3">
                        <span class="text-cetner material-symbols-outlined">
                            lock
                        </span>
                        <span className="hidden lg:block">Advance</span>
                    </a>
                </div>

                <div className="flex-1 p-6">
                    <div className="flex flex-col sm:flex-row w-full gap-4">
                        <div className="sm:flex-1">
                            <label className="font-bold">
                                Regular price
                            </label>
                            <input placeholder="$$$" className="py-1 px-2 w-full border border-gray-300 rounded-lg " type={'text'}></input>
                        </div>
                        <div className="sm:flex-1">
                            <label className="font-bold">
                                Sale price
                            </label>
                            <input placeholder="$$$" className="py-1 px-2 w-full border border-gray-300 rounded-lg " type={'text'}></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}