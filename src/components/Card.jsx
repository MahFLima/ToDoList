import { Trash } from "@phosphor-icons/react";

export function Card({ name, check }) {
  return (
    <div className="w-full flex gap-4 justify-between items-center bg-gray-500 p-4 rounded-lg">
      <div className="flex gap-2 items-center">
        <input type="checkbox" id={check} />
        <label htmlFor={check} className="text-gray-100">
          {name}
        </label>
      </div>

      <button>
        <Trash size={20} className="text-gray-300" />
      </button>
    </div>
  );
}
