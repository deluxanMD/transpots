import { Tab } from '../../../../types'

type Timeline = {
  id: string
  label: string
  date: string
  time: string
  company?: string
}

export type TimelineInfo = {
  id: string
  date: string
  time: string
  description: string
}

export const invoiceTimelineTabs: Tab[] = [
  { id: 'tracking', label: 'Tracking' },
  { id: 'invoice', label: 'Invoice' },
]

export const invoiceTimeLines: Timeline[] = [
  { id: '1', label: 'Order Created', date: 'Nov 4, 2024', time: '09:00' },
  { id: '2', label: 'Assigned', date: 'Nov 4, 2024', time: '10:00' },
  {
    id: '3',
    label: 'Picked up',
    company: 'Microsoft',
    date: 'Nov 4, 2024',
    time: '11:00',
  },
  {
    id: '4',
    label: 'Delivered',
    company: 'Microsoft',
    date: 'Nov 4, 2024',
    time: '12:00',
  },
]

export const invoiceInfos: TimelineInfo[] = [
  {
    id: '1',
    date: 'Nov 17, 2024',
    time: '11:00 PM',
    description: 'Invoice sent to abcd@gmail.com',
  },
  {
    id: '2',
    date: 'Nov 17, 2024',
    time: '11:30 PM',
    description: 'Spoke to A/P, Need to resend the invoice',
  },
]
