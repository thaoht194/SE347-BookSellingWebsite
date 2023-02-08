import React, { useEffect, useState } from "react";
import './productscontent.css'
import { books } from "../../StaticData/book";
export const ProductsContent = () => {
    const [bookl,setBookl] = useState([])
    useEffect(()=>{
        setBookl(books)
    })
    return (<>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-2 w-full mt-4">         
        {
        bookl.map(item=>{
            return(<div>
                <div className="bg-white ">
                
                <div className="max-h-[160px] overflow-hidden">
                     <img className="mx-auto " src={`${item.img}`}></img>
                </div>
               
                <div className="p-2">
                    <p className="text-sm font-bold h-[32px] leading-[16px] twoline ">
                        {item.name}
                    </p>

                    <div className="flex justify-between font-bold mt-2">
                        <span className="text-[#4B49AC]">{item.price}₫ </span>
                        <span className="text-gray-500">{item.sale}đ</span>
                    </div>
                </div>
            </div>
            </div>)
        })
    }
        </div>
    </>)
}