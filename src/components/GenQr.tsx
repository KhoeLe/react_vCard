import { vCard } from './CellColumns'
import { Button } from './ui/button'
import { getVCardData, uploadedToAzure } from 'lib/utils'
import { ContainerClient } from '@azure/storage-blob'
import { toast } from './ui/use-toast'
import { useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
import ShowQr from './ShowQr'
import { useBase64ImageStore } from 'lib/useStore'


type Props = {
  data: vCard

}

type UploadedData = {
  containerClient: ContainerClient;
  fileUrl: string;
};

function GenQr({ data }: Props) {


  const [qrCodeValue, setQrCodeValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const base64Image = useBase64ImageStore(state => state.base64Images);


  //TODO: convert image to base64 and upload to azure
  const handleGenQr = async (index: string) => {
    setIsLoading(true)
    try {
      const base64 = base64Image[Number(index)]
      const base64ImageValue = base64?.toString().split(',')[1]
      const vCard = getVCardData(
        data.legalName,
        data.phone,
        data.email,
        data.businessTitle,
        base64ImageValue || '',
        data.workPhone,
        data.companyWebsite,
        data.companyName
      )

      const { fileUrl } = await uploadedToAzure(vCard, `${data.email}.vcf`) as UploadedData;
      setQrCodeValue(fileUrl)
      toast({
        variant: "success",
        title: "Generate Success",
        description: `We've created a QR code ${base64ImageValue ? 'with' : 'without'} Photo`,
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Generate Failed",
        description: `Failed to create a QR code`,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center">
      <Button id={data.id} onClick={() => handleGenQr(data.id)}  >
        Generate QR Code
      </Button>

      <div className="flex flex-col items-center justify-center">
        <BeatLoader color='#10B981' loading={isLoading} size={24} />
        <ShowQr
          style={qrCodeValue ? 'flex-col items-center justify-center ml-6' : 'hidden'}
          sizeQr={'70'}
          sizeColor={"#e8072a"}
          email_={data.email as string}
          qrCodeValue={qrCodeValue} />
      </div>

    </div>
  )
}

export default GenQr