"use client";
import { useTeacherStore } from "@/components/providers/teacher-store-provider";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const Teachers = () => {
  const { teachers } = useTeacherStore((state) => state);

  return (
    <div id="teachers" className="h-full w-full">
      <div className="flex justify-between">
        <Breadcrumb>
          <BreadcrumbList className="text-xs md:text-lg lg:text-xl xl:text-2xl">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/teachers" className="hover:underline">
                  Teachers
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>
        <DataTable columns={columns} data={teachers} />
      </div>
    </div>
  );
};
export default Teachers;
