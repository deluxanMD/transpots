import { Box, Tab as MuiTab, Tabs, TabsProps, TextField } from '@mui/material'
import React from 'react'
import { Tab } from '../../../types'

type BasicTabsWithSearchProps = {
  tabs: Tab[]
  value: number
  handleChange: (_event: React.SyntheticEvent, newValue: number) => void
  children: React.ReactNode
} & TabsProps

const BasicTabsWithSearch = ({
  tabs,
  value,
  handleChange,
  children,
}: BasicTabsWithSearchProps) => {
  return (
    <Box>
      <Box style={{ zIndex: 9 }}>
        <TextField
          type="text"
          placeholder="Search"
          variant="outlined"
          size="small"
          style={{
            width: '100%',
            position: 'sticky',
            top: 0,
            backgroundColor: 'white',
            paddingTop: '12px',
            paddingBottom: '6px',
          }}
        />
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          sx={{
            position: 'sticky',
            top: 60,
            backgroundColor: 'white',
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
                display: 'flex',
                justifyContent: 'space-between',
              }}
            />
          ))}
        </Tabs>
        {children}
      </Box>
    </Box>
  )
}

export default BasicTabsWithSearch
