import { ChevronDown, ChevronUp, Funnel } from "lucide-react";
import { useState } from "react";

const DropDownFilter = ({ products, selected, setSelected }) => {
  const [open, setOpen] = useState(false);

  // بناء قائمة الفئات من المنتجات
  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category.name))),
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-[#a7b3a252] hover:bg-gray-200 px-10 py-4 rounded-full shadow"
      >
        <Funnel className="text-gray-700" />
        <span className="font-medium">{selected}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-gray-700" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-700" />
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-[#a7b3a2] rounded-xl shadow-lg z-50">
          <ul className="py-2">
            {categories.map((option) => (
              <li
                key={option}
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownFilter;
