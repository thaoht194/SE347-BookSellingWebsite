import React from "react"
import { Addinventory } from "../../components/admin/addInventory"
export const Addproduct = () => {
    return (<>
        <div style={{ fontFamily: '"Nunito Sans", sans-serif' }} className=" rounded-xl  lg:p-6">
            <div className="flex lg:flex-row flex-col justify-between ">
                <div className="flex flex-col py-0 lg:py-4 px-4 ">
                    <span className="text-3xl font-bold ">
                        Add a product
                    </span>
                    <span className="text-sm text-gray-600 font-semi">
                        Add your and modify your products here
                    </span>
                </div>

                <div className="p-4 flex justify-end gap-2 lg:block">
                    <button className=" mr-2 font-bold border border-gray-300 rounded-lg px-4 py-2">
                        Discard
                    </button>
                    <button className=" mr-2 text-[#3874FF] font-semibold border border-gray-300 px-4 py-2 rounded-lg">
                        Save draft
                    </button>
                    <button className=" mr-2 bg-[#3874FF] text-white px-4 py-2 font-semibold rounded-lg ">
                        publish product
                    </button>

                </div>
            </div>
            <div className="flex flex-col min-w-full lg:flex-row gap-6">
                <div className="lg:w-[64%] w-full flex flex-col gap-6   rounded-xl ">
                    <div className="bg-white p-6 flex flex-col gap-6 rounded-xl w-full">
                        <div>
                            <div className="font-bold text-xl mb-2">
                                Product title
                            </div>
                            <input placeholder="Write title here..." type="text" className="bg-gray-25 p-2 border border-gray-300 w-full rounded-md" />
                        </div>
                        <div>
                            <div className="font-bold text-xl mb-1">
                                product description
                            </div>
                            <div className="flex mb-1 flex-row gap-4 text-gray-500 overflow-hidden">
                                <div className='flex flex-row gap-2'>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        undo
                                    </span>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        redo
                                    </span>
                                </div>
                                <div className='flex flex-row gap-2'>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        format_bold
                                    </span>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        format_italic
                                    </span>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        strikethrough_s
                                    </span>
                                </div>

                                <div className='flex flex-row gap-2'>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        format_align_left
                                    </span>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        format_align_center
                                    </span>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        format_align_right
                                    </span>

                                </div>

                                <div className='flex flex-row gap-2'>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        format_list_numbered_rtl
                                    </span>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md">
                                        format_list_bulleted
                                    </span>
                                </div>

                                <div className='flex flex-row gap-2 '>
                                    <span class="material-symbols-outlined hover:bg-blue-200 hover:text-black rounded-md ">
                                        attach_file
                                    </span>
                                </div>

                            </div>
                            <textarea className=" rounded-lg bg-gray-25 h-[200px] border border-gray-300 w-full p-2" rows={4} cols={50} placeholder="Describe yourself here..." defaultValue={""} />
                        </div>
                        <div>
                            <div className="font-bold text-xl mb-2">
                                Display images
                            </div>
                            <div className="w-full h-[200px] border border-dashed border-gray-300 rounded-lg text-center ">
                                <div className="h-full items-center inline-block align-text-middle align-center align-middle  h-full  ">
                                    <div className="my-[70px]">
                                        <span className=" text-sm font-semi text-gray-400">Drag your photo here or</span>
                                        <span className="text-sm text-[#3874FF] font-bold">Browse from device</span>
                                        <br></br>
                                        <span class="text-5xl text-gray-400 material-symbols-outlined">
                                            photo
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Addinventory></Addinventory>
                </div>
                <div className="flex-1 flex  flex-col gap-6 rounded-xl ">
                    <div className="flex flex-col gap-4 p-4 rounded-lg bg-white p-6">
                        <div className="text-2xl font-bold">
                            Organize
                        </div>
                        <div >
                            <div>
                                <span className=" font-bold text-lg">Fiction Categories</span>
                            </div>

                            <div className="h-[120px] w-full rounded-lg border border-gray-300 mb-2 flex flex-row flex-wrap p-2 ">
                                <div className=" bg-slate-100 mr-[4px] rounded-xl h-fit p-2 min-w-[25%] items-center align-middle font-bold flex flex-row justify-between">
                                    <span className="text-[#1B74E4]">
                                        Adventure stories.
                                    </span>
                                    <span class="material-symbols-outlined ">
                                        close
                                    </span>

                                </div>
                                <div className=" bg-slate-100 mr-[4px] rounded-xl h-fit p-2 min-w-[25%] items-center align-middle font-bold flex flex-row justify-between">
                                    <span className="text-[#1B74E4]">
                                        Novel
                                    </span>
                                    <span class="material-symbols-outlined ">
                                        close
                                    </span>

                                </div>
                                <div className=" bg-slate-100 mr-[4px] rounded-xl h-fit p-2 min-w-[25%] items-center align-middle font-bold flex flex-row justify-between">
                                    <span className="text-[#1B74E4]">
                                        Novel
                                    </span>
                                    <span class="material-symbols-outlined ">
                                        close
                                    </span>

                                </div>

                            </div>

                            <select className="w-full border  border-gray-300 rounded-lg p-2" title={2} name id>
                                <option value>Adventure stories.</option>
                            </select>
                        </div>
                        <div >
                            <div>
                                <span className=" font-bold text-lg">Nonfiction Categories</span>
                            </div>

                            <div className="h-[120px] w-full rounded-lg border border-gray-300 mb-2 flex flex-row flex-wrap p-2 ">
                                <div className=" bg-slate-100 mr-[4px] rounded-xl h-fit p-2 min-w-[25%] items-center align-middle font-bold flex flex-row justify-between">
                                    <span className="text-[#1B74E4]">
                                        Adventure stories.
                                    </span>
                                    <span class="material-symbols-outlined ">
                                        close
                                    </span>

                                </div>
                                <div className=" bg-slate-100 mr-[4px] rounded-xl h-fit p-2 min-w-[25%] items-center align-middle font-bold flex flex-row justify-between">
                                    <span className="text-[#1B74E4]">
                                        Novel
                                    </span>
                                    <span class="material-symbols-outlined ">
                                        close
                                    </span>

                                </div>
                                <div className=" bg-slate-100 mr-[4px] rounded-xl h-fit p-2 min-w-[25%] items-center align-middle font-bold flex flex-row justify-between">
                                    <span className="text-[#1B74E4]">
                                        Novel
                                    </span>
                                    <span class="material-symbols-outlined ">
                                        close
                                    </span>

                                </div>

                            </div>

                            <select className="w-full border  border-gray-300 rounded-lg p-2" title={2} name id>
                                <option value>Adventure stories.</option>
                            </select>
                        </div>
                        <div>
                            <div className>
                                <span className=" font-bold text-lg">Vendor</span>
                            </div>
                            <select className="w-full border  border-gray-300 rounded-lg p-2" title={2} name id>
                                <option value>Adventure stories.</option>
                            </select>
                        </div>
                        <div>
                            <div className>
                                <span className=" font-bold text-lg">Collection</span>
                            </div>
                            <select className="w-full border  border-gray-300 rounded-lg p-2" title={2} name id>
                                <option value>Adventure stories.</option>
                            </select>
                        </div>

                    </div>
                    <div className="flex flex-col gap-4  p-4 rounded-lg bg-white">
                        <div className="text-2xl font-bold">
                            Variants
                        </div>
                        <div>
                            <div className>
                                <span className=" font-bold text-lg">Option 1</span>
                            </div>
                            <select className="w-full border  border-gray-300 rounded-lg p-1" title={2} name id>
                                <option value>Adventure stories.</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}