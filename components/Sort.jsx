export default function Sort({ onSort }) {
  return (
    <div className="flex justify-end my-3 mr-4">
      <span className="text-md">Ordenar de: </span>
      <div
        onClick={() => onSort("a-z")}
        className="rounded-md bg-gray-200 px-4 text-center cursor-pointer mx-1"
      >
        A-Z
      </div>
      <div
        onClick={() => onSort("z-a")}
        className="rounded-md bg-gray-200 px-4 text-center cursor-pointer mx-1"
      >
        Z-A
      </div>
    </div>
  );
}
