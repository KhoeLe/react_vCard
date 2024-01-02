import { vCard } from './columns'
import { Button } from './ui/button'
import { URLtoBase64, getVCardData, uploadedToAzure } from 'lib/utils'
import { ContainerClient } from '@azure/storage-blob'
import { toast } from './ui/use-toast'
import { useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
import ShowQr from './ShowQr'


type Props = {
  data: vCard

}
function GenQr({ data }: Props) {


  const [qrCodeValue, setQrCodeValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  //TODO: convert image to base64 and upload to azure
  const handleGenQr = async () => {
    try {
      setIsLoading(true)
      const base64 = await URLtoBase64(data.image as string)

      const base64Image = base64?.toString().split(',')[1];
      // build the vCard and get url
      if (base64Image) {
        const vCard = getVCardData(
          data.legalName,
          data.phone,
          data.email,
          data.businessTitle,
          base64Image,
          data.workPhone,
          data.companyWebsite,
          data.companyName
        );

        const { fileUrl } = await uploadedToAzure(vCard, `${data.email}.vcf`) as { containerClient: ContainerClient; fileUrl: string };
        setQrCodeValue(fileUrl)
        toast({
          variant: "success",
          title: "Generate Success",
          description: "We've created a QR code",
        })
        setIsLoading(false)
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Generate Failed",
        description: "We've failed to create a QR code",
      })
    }
  }


  return (
    <div className="flex items-center">
      <Button id={data.id} onClick={handleGenQr}  >
        Generate QR Code
      </Button>

      <div className="flex flex-col items-center justify-center">
        <BeatLoader color='#10B981' loading={isLoading} size={24} />

        <ShowQr
          style={qrCodeValue ? 'flex-col' : 'hidden'}
          sizeQr={'70'}
          sizeColor={"#e8072a"}
          email_={data.email as string}
          qrCodeValue={qrCodeValue} />

      </div>

    </div>
  )
}

export default GenQr