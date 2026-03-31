'use client';

import { useState } from 'react';
import { clsx } from 'clsx';

export interface ToggleOption {
    value: string;
    label: string;
}

export interface ToggleGroupProps {
    options: ToggleOption[];
    defaultValue?: string;
    onChange?: (value: string) => void;
    className?: string;
}

const ToggleGroup = ({
    options,
    defaultValue,
    onChange,
    className
}: ToggleGroupProps) => {
    const [activeTab, setActiveTab] = useState(defaultValue || options[0]?.value || '');

    const handleTabClick = (value: string) => {
        setActiveTab(value);
        onChange?.(value);
    };

    const baseButtonClasses = "border-none rounded-md px-2.5 py-1 cursor-pointer text-xs font-poppins font-semibold transition-all duration-150 whitespace-nowrap";
    const activeClasses = "bg-green-600 text-white";
    const inactiveClasses = "bg-transparent text-secondary";

    return (
        <div className={clsx("flex items-center bg-gray-50 border border-gray-200 rounded-lg p-0.5 gap-px", className)}>
            {options.map((option) => (
                <button
                    key={option.value}
                    onClick={() => handleTabClick(option.value)}
                    className={clsx(
                        baseButtonClasses,
                        activeTab === option.value ? activeClasses : inactiveClasses
                    )}
                >
                    {option.label}
                </button>
            ))}
        </div>
    )
}

export default ToggleGroup;
