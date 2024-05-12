import React from "react";

function SimpleSelect() {
  return (
    <div className="mt-20">
      <select className="block w-full rounded-lg bg-white px-2 py-1 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
        <option className="rounded-lg">Kediri</option>
        <option className="rounded-lg">Surabaya</option>
        <option className="rounded-lg">Sidoarjo</option>
        <option className="rounded-lg">Palembang</option>
      </select>
    </div>
  );
}
export default SimpleSelect;
