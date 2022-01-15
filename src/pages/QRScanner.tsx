import { TextareaAutosize } from '@material-ui/core'
import React, { useState } from 'react'
import QrScan from 'react-qr-reader'
import { Appbar } from './Appbar'
import { Container, Content, StyledTypography } from './styles.module'

export function QRScanner() {

  const [qrscan, setQrscan] = useState('Nenhum QR Code encontrado')

  const handleScan = (data: any) => {
    if (data) {
      setQrscan(data)
    }
  }

  const handleError = (err: any) => {
    console.error(err)
  }

  return (
    <Container>
      <Appbar />
      <Content>
        <StyledTypography variant="h4" margin="40px 0px 40px 0px">QR Scanner</StyledTypography>
        <div>
          <div style={{ marginTop: 30 }}>
            <QrScan
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ height: 240, width: 320 }}
            />
          </div>
        </div>

        <TextareaAutosize
          style={{ fontSize: 18, width: 320, height: 100, marginTop: 100 }}
          rowsMax={4}
          value={qrscan}
        />
      </Content>
    </Container>
  )
}

export default QRScanner