import React from "react";

function Header({ searchQuery, setSearchQuery }) {
    const handleChange = (e) => {
        console.log('set the search query ', e.target.value)
        setSearchQuery(e.target.value)
    }
    return (
        <div className="flex flex-row justify-between p-4 bg-green-400">
            <p className=" text-blue-500  font-bold text-xl ml-10">
                e-<span className="text-white text-2xl italic">Shopping</span>
            </p>
            <search>

                <input type="text"
                    id="default-search"
                    className="block w-full h-10 p-2 w-96 text-sm text-gray-900 border text-center border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Items"
                    value={searchQuery}
                    onChange={handleChange} />{/*update the search query  */}

            </search>
            <div className="flex flex-row  mr-10">
                <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-1">Register</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-1">
                    Login
                </button>
            </div>
        </div>
    )
}

export default Header