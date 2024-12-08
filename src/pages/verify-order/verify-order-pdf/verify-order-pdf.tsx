import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
// import PdfViewer from '../../../components/pdf-viewer/pdf-viewer.component'

const VerifyOrderPdf = () => {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div style={{ width: 'auto', height: isSm ? '550px' : '100%' }}>
      <iframe
        src={`${process.env.PUBLIC_URL}/LoadConfirmation.pdf`}
        width="100%"
        height="100%"
        title="PDF Viewer"
        style={{
          border: 'none',
        }}
      />
      {/* <PdfViewer /> */}
    </div>
  )
}

export default VerifyOrderPdf
