"use client";
import { ChartComponent } from "@/components/Chart";
import { useTeacherStore } from "@/components/providers/teacher-store-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const { teachers } = useTeacherStore((state) => state);
  const dashboardData = [
    {
      title: "Total Teachers",
      description: teachers.length,
    },
    {
      title: "Available",
      description: teachers.filter((teacher) => teacher.onDutyToday === false)
        .length,
    },
    {
      title: "On Leave",
      description: teachers.filter((teacher) => teacher.onDutyToday === true)
        .length,
    },
  ];

  return (
    <div className="h-full w-full">
      <div className="mb-5">
        <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl xl:text-4xl">
          Dashboard
        </h1>
      </div>

      <div className="flex w-full justify-between gap-1 md:gap-2 lg:gap-3 xl:gap-4">
        {dashboardData.map((data, index) => (
          <Card className="h-40 w-1/3 shadow-2xl xl:h-full" key={index}>
            <CardContent className="flex flex-col gap-4 px-4">
              <CardTitle className="h-1/2 text-lg md:text-xl lg:text-2xl xl:text-3xl">
                {data.title}
              </CardTitle>
              <CardDescription className="font-roboto h-1/2 text-lg font-medium text-[#3498db] lg:text-xl xl:text-2xl">
                {data.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <Table className="mt-2 border md:mt-4 lg:mt-6 xl:mt-10">
        <TableHeader>
          <TableRow>
            <TableHead>Photo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Contact</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachers.slice(0, 6).map((data) => (
            <TableRow
              key={data.id}
              className="cursor-pointer text-xs md:text-lg xl:text-xl"
              onClick={() => router.push(`/teachers/${data.id}`)} // ← handle click
            >
              <TableCell>
                <Avatar>
                  <AvatarImage src={data.photo} />
                  <AvatarFallback>
                    {data.firstName.slice(0, 1).toUpperCase() +
                      data.lastName.slice(0, 1).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>
                {data.firstName} {data.lastName}
              </TableCell>
              <TableCell>{data.gender}</TableCell>
              <TableCell>{data.teacherDetails.contact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Separator />
      <div className="my-4 flex justify-center">
        <Link href="/teachers">
          <Button>Show All</Button>
        </Link>
      </div>
      <div className="h-1/5">
        <ChartComponent />
      </div>
    </div>
  );
}
