import './App.css'


import Header from '@components/Header'
import FormCard from '@components/FormCard'

import Footer from '@components/Footer';


function App() {


  const inputFields = [
    {
      label: "Full Name",
      id: "fullName",
      defaultValue: '',
    },
    {
      label: "Upload Image",
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
      label: "Qr Size",
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
    <div className=''>
      <Header />
      <FormCard inputFields={inputFields} />
      <Footer />
    </div>
  )
}

export default App
