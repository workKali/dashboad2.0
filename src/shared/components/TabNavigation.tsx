'use client'

import React from 'react'

type Tab = {
  label: string
  value: string
}

type TabsProps = {
  tabs: Tab[]
  value: string
  onChange: (value: string) => void
}

const TabNavigation = ({ tabs, value, onChange }: TabsProps) => {
  return (
    <div className="flex items-stretch overflow-x-auto flex-1 min-w-0 scrollbar-none">
      {tabs.map((tab) => {
        const active = tab.value === value

        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={`
              px-4 border-b-2 whitespace-nowrap shrink-0
              text-[11px] font-poppins transition-colors
              ${active
                ? 'border-green-600 text-green-600 font-semibold'
                : 'border-transparent text-[#7a9e8e] font-normal hover:text-green-600'
              }
            `}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}

export default TabNavigation