import FormCard from "@components/FormCard"
// import { Button } from "@components/ui/button"
// import { NavLink } from "react-router-dom"

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

  return (
    <div className="container mx-auto">
      {/* <div className="flex flex-row-reverse mt-2 mb-2">
        <NavLink to='/admin-page.htm'>
          <Button>
            Admin Page
          </Button>
        </NavLink>
      </div> */}

      <FormCard inputFields={inputFields} />
    </div>
  )
}

export default HomePage