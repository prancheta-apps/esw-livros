export default function ViewMore({ onClick, hide }) {
  if (!hide) {
    return (
      <div onClick={onClick} className="flex justify-center items-center">
        <div className="rounded-md bg-gray-200 px-4 text-center cursor-pointer">
          Ver mais
        </div>
      </div>
    );
  }
}
