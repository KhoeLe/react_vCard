import { DataTable } from "@components/data-table"
import { NavLink } from "react-router-dom"
import { vCard, columns } from "@components/CellColumns"
import UploadForm from "@components/UploadForm";
import { Button } from "@components/ui/button";
import { useState } from "react";
import { read, utils } from 'xlsx';

function GenerateList() {

  const [fileValue, setFileValue] = useState<vCard[]>('' as unknown as vCard[])

  //TODO: handle file upload with xls or xlsx
  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {

    const files = event.target.files
    if (files && files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target?.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          setFileValue(rows as vCard[]);
        }
      }
      reader.readAsArrayBuffer(file);

    }
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-row-reverse mt-2 mb-2">
        <NavLink to='/'>
          <Button>
            Home
          </Button>
        </NavLink>
      </div>

      <UploadForm onFileImported={handleImport} />

      <div >
        <div className="information">
          <h1 className="mt-2 mb-2 px-2 py-2 text-3xl font-sans text-indigo-500 ">vCard List</h1>
          <p className="mt-2 mb-2 px-2 py-2 font-sans text-sm">The table displays a list of v-Cards. You can generate individual profiles as needed. For instance, you can download an Excel file, upload it to the system, and then generate QR codes. </p>
        </div>

        <DataTable columns={columns} data={fileValue} />
      </div>


    </div>


  )
}

export default GenerateList