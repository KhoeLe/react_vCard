"use client"

import { ColumnDef } from "@tanstack/react-table"
import GenQr from "./GenQr"
import UploadImage from "./UploadImage"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type vCard = {
  id: string
  legalName: string,
  businessTitle: string,
  email: string,
  phone: string,
  workPhone: string,
  companyName: string,
  companyWebsite: string,
  image: string | null,

}



export const columns: ColumnDef<vCard>[] = [

  {
    accessorKey: "legalName",
    header: "Legal Name",

  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "businessTitle",
    header: "Business Title",
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
  {
    accessorKey: "workPhone",
    header: "Work Number",
  },
  {
    accessorKey: "companyName",
    header: "Company Name",
  },
  {
    accessorKey: "companyWebsite",
    header: "Company Website",
  },
  {
    accessorKey: "image",
    header: "Employee Image",
    cell: ({row}) => {
      const data = row.original
      return (
        <>
          <UploadImage data={data} />
        </>
      )
    },
  },
  {
    header: "Action",
    id: "action",
    cell: ({ row }) => {
      const data = row.original
      return (
        <GenQr data={data} />
      )
    }
  },
]
