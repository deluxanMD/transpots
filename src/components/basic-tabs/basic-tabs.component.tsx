import { Box, Divider, Tab as MuiTab, Tabs } from '@mui/material'
import React from 'react'
import { Tab } from '../../types'

type BasicTabsProps = {
  tabs: Tab[]
  value: number
  handleChange: (_event: React.SyntheticEvent, newValue: number) => void
  children: React.ReactNode
}

const BasicTabs = ({ tabs, value, handleChange, children }: BasicTabsProps) => {
  return (
    <Box>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          sx={{
            '& .MuiTabs-scrollButtons': {
              display: 'none',
            },
            '& .Mui-selected': {
              fontWeight: 700,
            },
          }}
        >
          {tabs.map((tab) => (
            <MuiTab
              key={tab.label}
              label={tab.label}
              sx={{
                textTransform: 'capitalize',
                // width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            />
          ))}
        </Tabs>
      </Box>
      <Divider sx={{ border: 0.6, color: 'secondary.main' }} />
      {children}
    </Box>
  )
}

export default BasicTabs
