export default function Filters({ onFilter }) {
  return (
    <div className="flex justify-end my-3 mr-8">
      <span className="text-md">Filtros: </span>
      <div
        onClick={() => onFilter("a-z")}
        className="rounded-md bg-gray-200 px-4 text-center cursor-pointer mx-2"
      >
        Ordenar A-Z
      </div>
      <div
        onClick={() => onFilter("z-a")}
        className="rounded-md bg-gray-200 px-4 text-center cursor-pointer mx-2"
      >
        Ordenar Z-A
      </div>
    </div>
  );
}
