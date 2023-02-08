export const ProfileUSer = () => {
  return (
    <>
      <div className="font-sans text-[#33333] ">
        <div className="p-6 pb-0 sm:my-6 sm:mx-4 flex-wrap flex lg:flex-row w-auto rounded-md border border-[#ededed]  bg-[#fff] h-auto gap-5">
        
          <div className="w-[50%]">
          <div className="  sm:text-left lg:m-0 justify-start flex-1  flex flex-col  sm:flex-row  gap-8">
            <div class=" m-0 flex justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-WucszX-59HOKnbL0qsat2TUCeZ95FZ5uyg29SB08w&s"
                className="rounded-full w-40"
                alt="Avatar"
              />
            </div>

            <div className="">
              <div className="font-hairline py-1 text-xl bold">
                Lasender Maverel
              </div>
              <div className="font-hairline pb-1 text-md italic">
                LoginName@lava
              </div>
              <div className="font-hairline py-1 text-md bold">
                Client Code: DX9128312GGY
              </div>
              <div className="font-hairline py-2 text-md italic text-gray-600">
                Join in: 22-3-323
              </div>
           
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-gray-400 border-dashed flex flex-row  justify-between px-12"> 
            <div className="flex flex-col">
                <span className="font-semibold   text-sm">
                  Spending this month
                </span>
                <span className="font-seminbold text-lg text-gray-600">
                   {
                    ' > 10.000.000 vnd'
                   }
                </span>
            </div>
             <div className="flex flex-col">
                 <span className="font-semibold text-sm">
                Diamon
                </span>
              <span className="font-seminbold text-2xl text-gray-600">
                <span class="material-symbols-outlined text-4xl text-sky-300">
                                        Diamond
                </span>
              </span>
            </div>
          </div>

           
          </div>
         


          <div className="flex-1  ">
            <div className="flex gap-8 py-2">
              <div className="bold text-xl min-w-[100px]">Phone:</div>
              <div>9876543210</div>
            </div>
            <div className="flex gap-8 py-2">
              <div className="bold text-xl min-w-[100px]">adress:</div>
              <div>1861 Bayonne Ave, Manchester Township, NJ, 08759</div>
            </div>
            <div className="flex gap-8 py-2">
              <div className="bold text-xl min-w-[100px]">gender:</div>
              <div>Male</div>
            </div>
            <div className="flex gap-8 py-2">
              <div className="bold text-xl min-w-[100px]">Gmail:</div>
              <div>johndoe@example.com</div>
            </div>
            <div className="flex gap-8 py-2">
              <div className="bold text-xl min-w-[100px]">Bird day:</div>
              <div> 3 August</div>
            </div>
          </div>
        </div>

        <div className=" sm:my-6 sm:mx-4 flex-wrap flex lg:flex-row w-auto rounded-md  bg-[#f7f7f7] h-auto pb-8 gap-4">
          <div className="bg-white sm:text-left text-center flex-1 rounded-md border border-[#ededed] p-6">
            <h1 class="bold text-2xl text-center w-full mb-4">
              Shipping Information
            </h1>
            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Name: </div>
              <div>Lasender Maverel supper cute</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Address:</div>
              <div>1861 Bayonne Ave, Manchester Township, NJ, 08759</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Phone:</div>
              <div>9876543210</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Shipping Method:</div>
              <div>COD</div>
            </div>
          </div>
          <div className="bg-white sm:text-left text-center flex-1 rounded-md border border-[#ededed] p-6">
            <h1 class="bold text-2xl text-center w-full mb-4">
              Bank Information
            </h1>
            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Bank name: </div>
              <div>ICICI Bank</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">Bank account No.:</div>
              <div>159843014641</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">IFSC Code:</div>
              <div>ICI24504</div>
            </div>

            <div className="flex gap-6 pb-4">
              <div class="min-w-[65px] bold">PAN No:</div>
              <div>TC000Y56</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
