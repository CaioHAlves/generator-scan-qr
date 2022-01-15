import React, { useState } from 'react'
import { Appbar } from './Appbar'
import { Container, Content, StyledTextField, StyledTypography, StyledButton, StyledIconDownload } from './styles.module'
import QRcode from 'qrcode.react'

export function QRGenerator() {

  const [qr, setQr] = useState('')

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setQr(event.target.value);
  }

  const downloadQR = () => {
    
    const canvas: any = document.getElementById("qrcode");
    
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    
    let downloadLink = document.createElement("a");
    
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

  return (
    <Container>
      <Appbar />
      <Content>
        <StyledTextField onChange={handleChange}
          value={qr} label="Conteudo QR" size="medium" variant="outlined" color="primary"
        />
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          {qr ?
            <>
              <QRcode
                id="qrcode"
                value={qr}
                size={320}
                includeMargin={true}
              />
              <StyledButton
                width="220px"
                startIcon={<StyledIconDownload/>}
                onClick={downloadQR}
              >Download QR Code</StyledButton>
            </>
            :
            <StyledTypography>Digite algo no campo acima para gerar QR code</StyledTypography>
          }
        </div>
      </Content>
    </Container>
  )
}

export default QRGenerator