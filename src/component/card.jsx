import React from "react";

// props use to pass value from one component to another, standard format is Cards(props)
// instead of props we can directly take destructured format like Cards({userData})
// btnText="Visit" is default value

function Card({ userData, btnText="Visit"}) {
    return (
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 shadow-md">
            <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={userData?.img} alt="" />
            <div className="space-y-2 text-center sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg font-semibold text-black">{userData?.name}</p>
                    <p className="font-medium text-gray-500">{userData?.designation}</p>
                </div>
                <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
                    {btnText}
                </button>
            </div>
        </div>
    )
}

export default Card