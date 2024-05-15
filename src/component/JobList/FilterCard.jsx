export default function FilterCard({ tag, onRemoveFilter }) {
  const handleButtonClick = (tag) => {
    onRemoveFilter(tag);
  };

  return (
    <div className="flex px-2">
      <span className="bg-[#eef6f6] text-[#5ba4a4] font-bold text-lg px-2 py-1 rounded-l">
        {tag}
      </span>
      <button
        onClick={() => handleButtonClick(tag)}
        className="font-bold rounded-r px-2 bg-[#5ba4a4] text-lg text-white hover:bg-gray-700"
      >
        X
      </button>
    </div>
  );
}
