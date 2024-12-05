import React from 'react'
import { invoiceLists } from '../../invoice.constants'
import { List, ListItemText } from '@mui/material'
import { StyledListItemButton } from './invoice-list.styles'

const InvoiceList = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index)
  }

  return (
    <List>
      {invoiceLists.map((invoice, index) => (
        <StyledListItemButton
          key={invoice.id}
          selected={selectedIndex === index}
          onClick={(event) => handleListItemClick(event, index)}
        >
          <ListItemText>{invoice.label}</ListItemText>
        </StyledListItemButton>
      ))}
    </List>
  )
}

export default InvoiceList
