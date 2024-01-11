import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Input } from './ui/input'
import { getImageData } from 'lib/utils'
import { Label } from './ui/label'
import { vCard } from './CellColumns'
import { useBase64ImageStore } from 'lib/useStore'

type Props = {
  data: vCard
}
function UploadImage({ data }: Props) {
  const [previews, setPreviews] = useState<string[]>([])
  const [base64s, setBase64s] = useState<{ [key: number]: string }>({});
  const { setBase64Image } = useBase64ImageStore()


  useEffect(() => {
    setBase64Image(Number(data.id), base64s[Number(data.id)])
  }, [base64s, data.id, setBase64Image]);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>, index: string) => {
    const { displayUrl, base64 } = await getImageData(event);

    // Update the corresponding preview and base64 arrays
    setPreviews((prevPreviews) => {
      const updatedPreviews = prevPreviews ? [...prevPreviews] : [];
      updatedPreviews[Number(index)] = displayUrl;
      return updatedPreviews;
    });

    setBase64s((prevBase64s) => {
      const updatedBase64s = { ...prevBase64s };
      updatedBase64s[Number(index)] = base64 as string;
      return updatedBase64s;
    });
  };

  const handleAvatarClick = (index: string) => {
    document.getElementById(`fileInput${index}`)?.click();
  };


  return (
    <div key={data.id} className='flex items-center'>
      <Input
        type='file'
        id={`fileInput${data.id}`}
        onChange={(event) => handleUpload(event, data.id)}
        style={{ display: 'none' }}
      />
      {previews[Number(data.id)] ? (
        <Avatar
          className='w-20 h-20 flex items-center justify-center cursor-pointer'
          onClick={() => handleAvatarClick(data.id)}
        >
          <AvatarImage src={previews[Number(data.id)]} />
          <AvatarFallback>Image</AvatarFallback>
        </Avatar>
      ) : (
        <Label
          htmlFor={`fileInput${data.id}`}
          className='cursor-pointer border rounded-full text-center flex items-center w-28 h-12 mr-2'
        >
          Upload Image
        </Label>
      )}
    </div>
  )
}

export default UploadImage

