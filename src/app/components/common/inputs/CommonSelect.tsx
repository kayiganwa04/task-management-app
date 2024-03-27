import React from "react";

export default function CommonSelect({
  id,
  name,
  data,
  onChange,
  value = "",
  placeholder = "Choose status",
  required,
  disabled,
}: {
  id: string;
  name?: string;
  data: Array<{ label: string; value: string } | string>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <select
      id={id}
      name={name}
      disabled={disabled}
      value={value}
      onChange={onChange}
      required={required}
      className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-[45px]"
    >
      {placeholder && <option value="">Task status</option>}
      {data.map((item: any, index) => {
        return (
          <option key={index} value={item?.value}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
}
