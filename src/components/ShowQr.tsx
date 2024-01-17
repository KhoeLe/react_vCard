import { useRef } from 'react'
import QRCode from "react-qr-code";
import { Button } from '@components/ui/button';
import * as htmlToImage from "html-to-image";

type Props = {
  sizeQr: string,
  sizeColor: string,
  email_: string,
  qrCodeValue: string,
  style: string
}

function ShowQr({ email_, sizeColor, sizeQr, qrCodeValue, style }: Props) {

  const qrCodeRef = useRef(null);

  const handleDownloadImage = async () => {
    htmlToImage
      .toPng(qrCodeRef.current!)
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${email_}_qr-code.png`;
        link.click();
      })
      .catch(function (error) {
        console.error("Error generating QR code:", error);
      });
  }

  const valueSupportUTF8  = unescape(encodeURIComponent(qrCodeValue))

  return (
    <div className={`flex ${style} justify-center`}>
      {qrCodeValue ? (
        <>
          <div className='flex flex-col '>
            <QRCode
              id="QRCodeScaled"
              size={Number(sizeQr)}
              value={valueSupportUTF8}
              fgColor={sizeColor}
              ref={qrCodeRef}
            />
            <p className='text-sm mt-2 mb-2'>
              {email_}
            </p>
            <Button className='mt-2 mb-2' onClick={handleDownloadImage}>Download QR Code</Button>
          </div>
        </>
      ) : (
        <div></div>
      )} 
    </div>
  )
}

export default ShowQr