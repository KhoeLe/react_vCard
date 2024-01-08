// import { SetStateAction, useState } from 'react';
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
// import { Input } from './ui/input'
// import { getImageData } from 'lib/utils';

// function UploadImage() {
//   // const [preview, setPreview] = useState("");
//   // const [base64, setBase64] = useState<SetStateAction<string>>("");
  
//   const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(e.target.files)
//     // const file = e.target.files?.[0];
//     // if (file) {
//     //   const { displayUrl, base64 } = await getImageData(e.target.files?.[0]);
//     //   setPreview(displayUrl);
//     //   setBase64(base64 as string);
//     // }
//   }

//   // console.log(base64)

//   return (
//     <div className="flex items-center">
//       <Input type="file"

//         onChange={handleUpload}
//         // onChange={async (e) => {
//         //   const file = e.target.files?.[0];
//         //   if (file) {
//         //     const { displayUrl, base64 } = await getImageData(e.target.files?.[0]);
//         //     setPreview(displayUrl);
//         //     setBase64(base64 as string);
//         //   }
//         // }}

//       />
//       <Avatar className="w-32 h-32 mt-10 mb-10 ">
//         {/* <AvatarImage src={preview} /> */}
//         <AvatarFallback>Image</AvatarFallback>
//       </Avatar>
//     </div>
//   )
// }

// export default UploadImage