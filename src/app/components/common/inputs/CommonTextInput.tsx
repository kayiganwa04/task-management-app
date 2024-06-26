"use client";

import React from "react";

export default function CommonTextInput({
  type,
  id,
  name,
  placeholder,
  required,
  onChange,
  value,
  min,
  max,
  step,
  minlength
}: {
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  onChange?: any;
  value?: any;
  min?: number;
  max?: number;
  step?: number;
  minlength?: any
}) {
  return (
    <input
      required={required}
      onChange={onChange}
      value={value}
      type={type}
      name={name}
      id={id}
      className="w-full border md:text-sm text-xs border-gray-300 text-black text-start p-2.5 rounded-lg h-[45px]"
      placeholder={placeholder || name}
      min={min}
      max={max}
      step={step}
      minLength={minlength}
    />
  );
}
