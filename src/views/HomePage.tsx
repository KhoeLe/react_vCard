import FormCard from "@components/FormCard"
import FormCardWithOutPhoto from "@components/FormCardWithOutPhoto"
import { Button } from "@components/ui/button"
import { NavLink } from "react-router-dom"


function HomePage() {
  const inputFields = [
    {
      label: "Full Name",
      id: "fullName",
      defaultValue: '',
    },
    {
      label: "Upload Employee Photo",
      id: "image",
      defaultValue: '',
      type: "file"

    },
    {

      label: "Business Title",
      id: "businessTitle",
      defaultValue: '',
      type: "textarea"
    },
    {
      label: "Email",
      id: "email",
      defaultValue: '',
    },
    {
      label: "Mobile Phone",
      id: "mobilePhone",
      defaultValue: '',
    },
    {
      label: "Work Phone",
      id: "workPhone",
      defaultValue: '',
    },
    {
      label: "Company Name",
      id: "companyName",
      defaultValue: '',
    },
    {
      label: "Company Website",
      id: "companyWebsite",
      defaultValue: '',
    }, {
      label: "QR Code Size",
      id: "sizeQr",
      defaultValue: '',
      type: "selectSize"
    }, {
      label: "Qr Color",
      id: "sizeColor",
      defaultValue: '',
      type: "selectColor"
    }
  ]
  const inputFieldsWithOutPhoto = [
    {
      label: "Full Name",
      id: "fullName",
      defaultValue: '',
    },
    {

      label: "Business Title",
      id: "businessTitle",
      defaultValue: '',
      type: "textarea"
    },
    {
      label: "Email",
      id: "email",
      defaultValue: '',
    },
    {
      label: "Mobile Phone",
      id: "mobilePhone",
      defaultValue: '',
    },
    {
      label: "Work Phone",
      id: "workPhone",
      defaultValue: '',
    },
    {
      label: "Company Name",
      id: "companyName",
      defaultValue: '',
    },
    {
      label: "Company Website",
      id: "companyWebsite",
      defaultValue: '',
    }, {
      label: "QR Code Size",
      id: "sizeQr",
      defaultValue: '',
      type: "selectSize"
    }, {
      label: "Qr Color",
      id: "sizeColor",
      defaultValue: '',
      type: "selectColor"
    }
  ]

  return (
    <div className="container  mx-auto">

        <div className="flex flex-row-reverse mt-2 mb-2">
          <NavLink to='/generate-list'>
            <Button>
              Generate List
            </Button>
          </NavLink>
        </div>

        <div className=" flex flex-col md:flex-row">
          <FormCard inputFields={inputFields} />
          <FormCardWithOutPhoto inputFields={inputFieldsWithOutPhoto} />
        </div>

    </div>

  )
}

export default HomePage