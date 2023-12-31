import { useRef } from 'react'
import QRCode from "react-qr-code";
import { Button } from '@components/ui/button';
import * as htmlToImage from "html-to-image";

type Props = {
  sizeQr: string,
  sizeColor: string,
  email_: string,
  qrCodeValue: string
}

function ShowQr({ email_, sizeColor, sizeQr,qrCodeValue}: Props) {

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

  return (
    <div className='flex items-center justify-center mt-10 mb-10 '>
      {qrCodeValue ? (
        <>
          <div className='flex flex-col justify-center items-center mt-4 mb-4'>
          <QRCode
            id="QRCodeScaled"
            size={Number(sizeQr)}
            value={qrCodeValue}
            fgColor={sizeColor}
            ref={qrCodeRef}
          />
          <p className='text-sm mt-2 mb-2'>
            {email_}
          </p>
          </div>
          <Button onClick={handleDownloadImage} className='ml-10'>Download QR Code</Button>
        </>
      ) : (
        <div></div>
      )} 
    </div>
  )
}

export default ShowQr