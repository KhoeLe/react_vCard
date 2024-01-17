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
import { useState } from "react"
import { Textarea } from "./ui/textarea"
import { getVCardData, phoneRegex,  } from "lib/utils"
import ShowQr from "./ShowQr"
import BeatLoader from 'react-spinners/BeatLoader'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { toast } from "./ui/use-toast"

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
  businessTitle: z.string().min(2).max(100),
  email: z.string().email(),
  mobilePhone: z.string().regex(phoneRegex, 'Invalid Number!'),
  // mobilePhone:z.string().regex(phoneRegex, 'Invalid Number!').optional()
  // .or(z.literal('')),
  workPhone: z.string().regex(phoneRegex, 'Invalid Number!').optional()
  .or(z.literal('')),
  companyName: z.string().min(2).max(50),
  companyWebsite: z.string().url(
    "Please enter a valid URL. For example: https://www.google.com"
  ),
  sizeQr: z.string().min(2).max(50),
  sizeColor: z.string().min(2).max(50),
});

type FormValues = z.infer<typeof formSchema>;
type InputFieldId = "fullName" | "businessTitle" | "email" | "mobilePhone" | "workPhone" | "companyName" | "companyWebsite" | "sizeQr" | "sizeColor";



function FormCardWithOutPhoto({ inputFields }: Props) {

  const [isLoading, setIsLoading] = useState(false)
  const [saving, setSaving] = useState(false)
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
      businessTitle: "",
      email: "",
      mobilePhone: "",
      workPhone: "",
      companyName: "",
      companyWebsite: "",
      sizeQr: "200",
      sizeColor: "#e8072a"

    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (values: FormValues) => {
    try {
      setSaving(true)
      setIsLoading(true)
      // Do something with the form values.

      const noWrapbusinessTitle = values.businessTitle.replace(/\n/g, "\\n");
      // build the vCard and get url

      const vCard = getVCardData(
        values.fullName,
        values.mobilePhone,
        values.email,
        noWrapbusinessTitle,
        "",
        values.workPhone?.toString() || "",
        values.companyWebsite,
        values.companyName
      );


      // const { fileUrl } = await uploadedToAzure(vCard, `${values.email}.vcf`) as { containerClient: ContainerClient; fileUrl: string };
      setState((prevState) => ({
        ...prevState, email_: values.email, qrCodeValue: vCard,
        sizeQr: values.sizeQr,
        sizeColor: values.sizeColor
      }));
      toast({
        variant: "success",
        title: "Generate Success",
        description: "We've created a QR code",
      })


      setIsLoading(false)
      setSaving(false)
      window.scrollTo(0, 0)


    } catch (error) {
      toast({
        variant: "destructive",
        title: "Generate Failed",
        description: "We've failed to create your qr code",
      })
    }

  }


  return (
    <div className='flex flex-col-reverse align-center justify-center  md:max-w-4xl md:flex-row '>
      <div className='w-full md:w-2/3 mr-24  px-4'>
        <p>
          Please fill in the information below to generate a QR Code without Photo and download the image.
        </p>
        <div>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <fieldset disabled={saving}>

                  {inputFields.map((input) => (
                    <div key={input.id} className={`${input.type === "hidden" ? 'hidden' : ''} mt-5 mb-5`}>
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
                                    : input.type === "selectSize"
                                      ? <Select onValueChange={onChange} defaultValue={value}>
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select a size to display" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          <SelectItem value="100">100x100</SelectItem>
                                          <SelectItem value="200">200x200</SelectItem>
                                          <SelectItem value="300">300x300</SelectItem>
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
      </div>
      <div className="flex">
        <BeatLoader color='#10B981' loading={isLoading} size={24} />
        <ShowQr
          sizeQr={state.sizeQr}
          sizeColor={state.sizeColor}
          email_={state.email_}
          qrCodeValue={state.qrCodeValue} style={"mt-72"} />
      </div>
    </div>
  )
}

export default FormCardWithOutPhoto