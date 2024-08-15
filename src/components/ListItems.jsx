import React from "react";

function ListItems() {
  const categories = [
    "All",
    "Music",
    "Cricket",
    "Football",
    "Computer programming",
    "DSA",
    "Movie",
    "Virat Kohli",
    "Ashad",
    "Coding",
    "Java",
    "Comedy",
    "Songs",
    "Lovebabbar",
    "CodewithHarry",
    "Java Quiz",
  ];
  return (
    <>
      <div className="flex overflow-x-scroll scrollbar-hide px-4">
        <div className="flex space-x-4 flex-nowrap">
          {categories.map((category) => {
            return (
              <div
                key={category}
                className="mb-4 flex-none bg-gray-200 duration-300 hover:bg-gray-400 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer"
              >
                {category}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ListItems;
