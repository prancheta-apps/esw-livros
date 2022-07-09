import { useState } from "react";

export default function Sort({ onSort, onChange }) {
  const [sortOption, setSortOption] = useState("a-z");
  const sortOptionStyle = "rounded-md px-4 text-center cursor-pointer mx-1 ";

  const handleSortOption = (optionName) => {
    setSortOption(optionName);
    onSort(optionName);
  };

  return (
    <div className="lg:flex md:flex md:justify-between lg:justify-between items-center">
      <input
        onChange={(event) => {
          onChange(event.target.value);
        }}
        type={"text"}
        className="px-4 w-full lg:w-96 md:w-96 h-8 bg-yellow-100 text-yellow-700 border-yellow-900 border-2"
        placeholder={"Pesquisar livro..."}
      />
      <div className="flex lg:justify-end items-center my-3">
        <span className="text-md">Ordenar de: </span>
        <div
          onClick={() => handleSortOption("a-z")}
          className={
            sortOptionStyle +
            (sortOption === "a-z" ? "bg-yellow-400" : "bg-yellow-200")
          }
        >
          A-Z
        </div>
        <div
          onClick={() => handleSortOption("z-a")}
          className={
            sortOptionStyle +
            (sortOption === "z-a" ? "bg-yellow-400" : "bg-yellow-200")
          }
        >
          Z-A
        </div>
      </div>
    </div>
  );
}
