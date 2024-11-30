import React from 'react'
import PdfViewer from '../../../components/pdf-viewer/pdf-viewer.component'

const VerifyOrderPdf = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      {/* <iframe
        src={`${process.env.PUBLIC_URL}/LoadConfirmation.pdf`}
        width="100%"
        height="100%"
        title="PDF Viewer"
        style={{
          border: 'none',
        }}
      /> */}
      <PdfViewer />
    </div>
  )
}

export default VerifyOrderPdf
