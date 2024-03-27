"use client";

import React from "react";

export default function CommonTextArea({
  id,
  rows,
  placeholder,
  required,
  onChange,
  value,
  className,
}: {
  id: string;
  rows: number;
  placeholder?: string;
  required?: boolean;
  onChange?: any;
  value?: string;
  className?: string
}) {
  return (
    <textarea
      id={id}
      rows={rows}
      required={required}
      value={value}
      className={`${className} block p-2.5 w-full text-sm text-black rounded-lg border border-gray-300`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
