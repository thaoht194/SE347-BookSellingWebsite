import logo from '../../dinobb.png'

export const Header = () => {

    return <>


        <div style={{ fontFamily: "nunito", zIndex: 100 }} class="z-100 h-[60px] shadow-md fixed bg-white w-full border-b border-gray-300 px-12 flex justify-between py-4 items-center">
            <span class="material-symbols-outlined lg:hidden">
                menu
            </span>
            <div className="flex flex-row items-center h-full gap-16">
                <img className="h-[100%] hidden lg:block" src={logo}></img>
                <div class="w-[350px] hidden lg:block">
                    <form class="flex items-center">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" id="simple-search"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search" required></input>
                        </div>
                    </form>
                </div>
            </div>

            <div className="flex flex-row items-center gap-8">
                <span class="material-symbols-outlined lg:hidden">
                    search
                </span>
                <span class="material-symbols-outlined">
                    notifications
                </span>
                <span class="material-symbols-outlined">
                    settings
                </span>
                <img class="w-10 h-10 rounded-full"
                    src="data:image/jpeg;base64,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"
                    alt="Rounded avatar"></img>

            </div>


        </div>
    </>
}