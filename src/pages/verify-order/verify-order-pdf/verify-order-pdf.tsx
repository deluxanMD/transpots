import React from 'react'

const VerifyOrderPdf = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={`${process.env.PUBLIC_URL}/LoadConfirmation.pdf`}
        width="100%"
        height="100%"
        title="PDF Viewer"
        style={{
          border: 'none',
        }}
      />
    </div>
  )
}

export default VerifyOrderPdf
