'use client'

import { Tab, Tabs } from '@mui/material'
import { TabBrand } from './navigation/TabBrand'
import { TabsBrand } from './navigation/TabsBrand'

type Tab = {
  label: string
  value: string | number
}

type TabsProps = {
  tabs: Tab[]
  value: string | number
  onChange: (value: string | number) => void
}

const TabNavigation = ({ tabs, value, onChange }: TabsProps) => {
  return (
    <TabsBrand
      value={value}
      variant="scrollable"
      allowScrollButtonsMobile
      onChange={(_event, newValue) => onChange(newValue)}
    >
      {tabs.map((tab, index) =>
        <TabBrand
          value={tab.value}
          label={tab.label}
          key={`${tab.label}-${index}`}
        />
      )}
    </TabsBrand>
  )
}

export default TabNavigation