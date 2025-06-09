import React from "react";

interface Props {
    label: string,
    name: string,
    type?: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void 
}

export default function InputField({ label, name, type = "text", value, onChange }: Props) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                name = {name}
                type = {type}
                value = {value}
                onChange = {onChange}
                className="mt-1 block w-full border rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
             />
        </div>
    )
}