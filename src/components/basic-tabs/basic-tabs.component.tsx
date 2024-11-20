import { Box, Tab as MuiTab, Tabs } from '@mui/material'
import React from 'react'
import { Tab } from '../../pages/order/order-selection/order-selection.constant'

type BasicTabsProps = {
  tabs: Tab[]
  value: number
  handleChange: (_event: React.SyntheticEvent, newValue: number) => void
  children: React.ReactNode
}

const BasicTabs = ({ tabs, value, handleChange, children }: BasicTabsProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((tab) => (
            <MuiTab key={tab.label} label={tab.label} />
          ))}
        </Tabs>
      </Box>
      {children}
    </Box>
  )
}

export default BasicTabs
