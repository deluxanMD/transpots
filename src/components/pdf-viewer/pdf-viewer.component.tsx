import { Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { Document, Page } from 'react-pdf'
import ArrowLeft from '../../assets/icons/ArrowLeft.png'
import ArrowRight from '../../assets/icons/ArrowRight.png'

const PdfViewer = () => {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  const navigatePage = (pageNumber: number) => {
    setPageNumber(pageNumber)
  }

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: '100%', mb: 4 }}
      >
        <img
          src={ArrowLeft}
          alt="previous page"
          width={50}
          height={40}
          onClick={() => navigatePage(pageNumber - 1)}
          style={{
            cursor: 'pointer',
            visibility: pageNumber <= 1 ? 'hidden' : 'visible',
          }}
        />
        <Typography>
          Page {pageNumber} of {numPages}
        </Typography>
        <img
          src={ArrowRight}
          alt="previous page"
          width={50}
          height={40}
          onClick={() => navigatePage(pageNumber + 1)}
          style={{
            cursor: 'pointer',
            visibility: pageNumber >= numPages ? 'hidden' : 'visible',
          }}
        />
      </Stack>
      <Document
        file={`${process.env.PUBLIC_URL}/LoadConfirmation.pdf`}
        // file={'https://pdfobject.com/pdf/sample.pdf'}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          //   scale={1.25}
        />
      </Document>
    </>
  )
}

export default PdfViewer
