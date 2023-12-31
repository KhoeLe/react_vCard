import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Button } from "./ui/button"
import { SetStateAction, useState } from "react"
import { Textarea } from "./ui/textarea"
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE, getImageData, getVCardData, phoneRegex, uploadedToAzure } from "lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ContainerClient } from "@azure/storage-blob"
import ShowQr from "./ShowQr"
import BeatLoader from 'react-spinners/BeatLoader'
import { toast } from "./ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

type Props = {
  inputFields: {
    id: string;
    type?: string;
    label: string;
    defaultValue?: string;
  }[];
}



const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  image: z
    .any()
    .refine((file) => file[0]?.size <= MAX_FILE_SIZE, `Max image size is 10MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file[0]?.type),
      "Only .jpg, .jpeg, .png and formats are supported."
    ),
  businessTitle: z.string().min(2).max(50),
  email: z.string().email(),
  mobilePhone: z.string().regex(phoneRegex, 'Invalid Number!'),
  // mobilePhone:z.string().regex(phoneRegex, 'Invalid Number!').optional()
  // .or(z.literal('')),
  workPhone: z.string().regex(phoneRegex, 'Invalid Number!'),
  companyName: z.string().min(2).max(50),
  companyWebsite: z.string().url(),
  sizeQr: z.string().min(2).max(50),
  sizeColor: z.string().min(2).max(50),
});

type FormValues = z.infer<typeof formSchema>;
type InputFieldId = "fullName" | "image" | "businessTitle" | "email" | "mobilePhone" | "workPhone" | "companyName" | "companyWebsite" | "sizeQr" | "sizeColor";



function FormCard({ inputFields }: Props) {

  const [isLoading, setIsLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [preview, setPreview] = useState("");
  const [base64, setBase64] = useState<SetStateAction<string>>("");
  const [state, setState] = useState({
    sizeQr: "100",
    sizeColor: "#e8072a",
    email_: "",
    qrCodeValue: ""
  })


  // 1. Define your form.
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      image: "",
      businessTitle: "",
      email: "",
      mobilePhone: "",
      workPhone: "",
      companyName: "",
      companyWebsite: "",
      sizeQr: "100",
      sizeColor: "#e8072a"

    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (values: FormValues) => {
    try {
      setSaving(true)
      setIsLoading(true)
      // Do something with the form values.
      const base64Image = base64.toString().split(',')[1];
      // build the vCard and get url
      if (base64Image) {
        const vCard = getVCardData(
          values.fullName,
          values.mobilePhone,
          values.email,
          values.businessTitle,
          base64Image,
          values.workPhone,
          values.companyWebsite,
          values.companyName
        );


        const { fileUrl } = await uploadedToAzure(vCard, `${values.email}.vcf`) as { containerClient: ContainerClient; fileUrl: string };
        setState((prevState) => ({
          ...prevState, email_: values.email, qrCodeValue: fileUrl,
          sizeQr: values.sizeQr,
          sizeColor: values.sizeColor
        }));
        toast({
          variant: "success",
          title: "Generate Success",
          description: "We've created your qr code",
        })

        setIsLoading(false)
        setSaving(false)

      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Generate Failed",
        description: "We've failed to create your qr code",
      })
    }

  }


  return (
    <div className='flex flex-col-reverse align-center justify-center m-auto md:max-w-4xl md:flex-row mb-10'>
      <div className='w-full md:w-2/3 mr-24 mb-25 px-4'>
        <p>
          Please fill in the information below to generate a QR Code and download the image.
        </p>
        <div>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <fieldset disabled={saving}>
                  <>
                    <Avatar className="w-32 h-32 mt-10 mb-10 ">
                      <AvatarImage src={preview} />
                      <AvatarFallback>Image</AvatarFallback>
                    </Avatar>
                  </>
                  {inputFields.map((input) => (
                    <div key={input.id} className={`${input.type === "hidden" ? 'hidden' : ''}`}>
                      <FormField
                        control={form.control}
                        name={input.id as InputFieldId}
                        render={({ field: { onChange, value, ...rest } }) => (
                          <FormItem>
                            <FormLabel>{input.label}</FormLabel>
                            <FormControl>
                              {
                                input.type === "textarea"
                                  ? <Textarea placeholder="Please enter your business title" onChange={
                                    (event) => {
                                      onChange(event.target.value)
                                    }
                                  } {...rest}
                                  />
                                  : input.type === "file"
                                    ? <Input type="file"
                                      {...rest}
                                      onChange={async (event) => {
                                        const { files, displayUrl, base64 } = await getImageData(event)
                                        setPreview(displayUrl);
                                        setBase64(base64 as string);
                                        onChange(files, base64);

                                      }}
                                    />
                                    : input.type === "selectSize"
                                      ? <Select onValueChange={onChange} defaultValue={value}>
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select a size to display" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          <SelectItem value="100">100</SelectItem>
                                          <SelectItem value="200">200</SelectItem>
                                          <SelectItem value="300">300</SelectItem>
                                        </SelectContent>
                                      </Select>
                                      : input.type === "selectColor"
                                        ? <Select onValueChange={onChange} defaultValue={value} >
                                          <FormControl>
                                            <SelectTrigger>
                                              <SelectValue placeholder="Select a size to display" />
                                            </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                            <SelectItem value="#e8072a">Red</SelectItem>
                                            <SelectItem value="#000000">Black</SelectItem>
                                            <SelectItem value="#a0d0d0">Green</SelectItem>
                                          </SelectContent>
                                        </Select>

                                        : <Input type={`${input.type === "password" ? 'password' : ''}`} placeholder={`Please enter your ${input.label}`} onChange={
                                          (event) => {
                                            onChange(event.target.value)
                                          }
                                        } {...rest}
                                        />
                              }
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                  <Button className="my-5 w-full" type="submit">Generate QR Code</Button>
                </fieldset>
              </form>
            </Form>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <BeatLoader color='#10B981' loading={isLoading} size={24} />
          <ShowQr
            sizeQr={state.sizeQr}
            sizeColor={state.sizeColor}
            email_={state.email_}
            qrCodeValue={state.qrCodeValue} />
        </div>
      </div>
    </div>
  )
}

export default FormCard