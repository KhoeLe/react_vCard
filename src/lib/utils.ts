import { type ClassValue, clsx } from 'clsx'
import { ChangeEvent } from 'react'
import { twMerge } from 'tailwind-merge'
import { BlobServiceClient } from '@azure/storage-blob'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)

export const MAX_FILE_SIZE = 10000000

export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png']

export const toBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file as Blob)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

export async function getImageData(event: ChangeEvent<HTMLInputElement>) {
  // FileList is immutable, so we need to create a new one
  const dataTransfer = new DataTransfer()

  // Add newly uploaded images
  Array.from(event.target.files!).forEach((image) => dataTransfer.items.add(image))

  const files = dataTransfer.files
  const displayUrl = URL.createObjectURL(event.target.files![0])

  // convert to base64
  const base64 = await toBase64(event.target.files![0])

  return { files, displayUrl, base64 }
}

export function getVCardData(
  fullName: string,
  mobilePhone: string,
  email: string,
  noWrapbusinessTitle: string,
  base64: string,
  workPhone: string,
  companyWebsite: string,
  companyName: string,
) {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:' + fullName + ';',
    'ORG:' + companyName,
    'TEL;TYPE=mobile;VALUE=uri:' + mobilePhone,
    'TEL;TYPE=telephone;VALUE=uri:' + workPhone,
    'EMAIL;TYPE=work:' + email,
    'URL;TYPE=website:' + companyWebsite,
    'TITLE: ' + noWrapbusinessTitle,
    'PHOTO;TYPE=JPG;ENCODING=b:' + base64,
    'END:VCARD',
  ].join('\n')
}

export async function uploadedToAzure(vCardData: string, blobName: string) {
  try {
    const blob = new Blob([vCardData], { type: 'text/vcard' })
    const file = new File([blob], blobName, { type: 'text/vcard' })

    const blobServiceClient = new BlobServiceClient(`https://${import.meta.env.VITE_AZURE_ACCOUNT}.blob.core.windows.net/vcard?${import.meta.env.VITE_AZURE_SAS}`)

    console.log(blobServiceClient)
    // Create a unique name for the container
    const containerName = ''

    // Get a reference to a container
    const containerClient = blobServiceClient.getContainerClient(containerName)

    // Get a block blob client
    const blockBlobClient = containerClient.getBlockBlobClient(blobName)

    // Upload data to the blob
    const uploadBlobResponse = await blockBlobClient.uploadData(blob)

    console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId)

    const fileUrl = `https://${import.meta.env.VITE_AZURE_ACCOUNT}.blob.core.windows.net/vcard/${file.name}`

    return { containerClient, fileUrl } // Return containerClient
  } catch (error) {
    console.error(`Failed to upload blob: ${error}`)
  }
}


// export function displayQRCode (fileUrl: string) {
//   const qrCode = new QRCodeStyling({
//     width: 300,
//     height: 300,
//     data: fileUrl,
//     image: 'https://www.vcard.link/assets/images/vcard-logo.png',
//     dotsOptions: {
//       color: '#000000',
//       type: 'square',
//     },
//     backgroundOptions: {
//       color: '#ffffff',
//     },
//     imageOptions: {
//       crossOrigin: 'anonymous',
//       margin: 20,
//     },
//   })

//   qrCode.append(document.getElementById('qrcode'))
// }
