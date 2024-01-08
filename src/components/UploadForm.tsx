import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

type UploadFormProps = {
  onFileImported: (data: React.ChangeEvent<HTMLInputElement>) => void

}
function UploadForm({ onFileImported }: UploadFormProps) {

  return (
    <div>
      <div>
      <Label className="text-base font-sans" >Upload File</Label>
      <Input type="file" name="file" className="w-4/12" id="inputGroupFile" required onChange={onFileImported}
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
      </div>

      <div className=" mt-2 mb-2">
        {/* Able users download file excel example */}
        <Button>
        <a href="/Vcard_template.xlsx" download>
          <Label className="text-base font-sans" >Download Example Excel File</Label>
        </a>
        </Button>
      </div>
    </div>
  )
}

export default UploadForm