const PREV_TEXT = "<";
const NEXT_TEXT = ">";

export default function Pagination({
  countPages,
  currentPage,
  onPrev,
  onNext,
}) {
  const nextPrevStyles = "mx-2 text-2xl cursor-pointer hover:text-gray-400";

  const handlePrev = () => {
    if (currentPage !== 1) {
      onPrev();
    }
  };

  const handleNext = () => {
    if (currentPage !== countPages) {
      onNext();
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={nextPrevStyles}
        onClick={handlePrev}
      >
        {PREV_TEXT}
      </div>
      <div className="rounded-md bg-gray-200 px-4 text-center">
        {currentPage} de {countPages}
      </div>
      <div
        className={nextPrevStyles}
        onClick={handleNext}
      >
        {NEXT_TEXT}
      </div>
    </div>
  );
}
