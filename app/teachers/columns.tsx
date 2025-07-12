import { Teacher } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Teacher>[] = [
  {
    header: "Photo",
    cell: ({ row }) => {
      const first = row.original.firstName?.[0] || "";
      const last = row.original.lastName?.[0] || "";
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-sm font-medium text-white">
          {first}
          {last}
        </div>
      );
    },
  },
  {
    header: "Name",
    accessorFn: (row) => `${row.firstName} ${row.lastName}`,
    cell: ({ getValue }) => <span>{getValue() as React.ReactNode}</span>,
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },

  {
    accessorKey: "teacherDetails.specialization",
    header: "Specialization",
  },
  {
    accessorKey: "qualifications",
    header: "Qualifications",
  },
  {
    accessorKey: "salary",
    header: "Salary",
  },
  {
    accessorKey: "teacherDetails.city",
    header: "City",
  },
  {
    accessorKey: "teacherDetails.contact",
    header: "Contact",
  },
];
