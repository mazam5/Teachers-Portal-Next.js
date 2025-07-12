"use client";
import { useTeacherStore } from "@/components/providers/teacher-store-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const Home = () => {
  const { teachers } = useTeacherStore((state) => state);
  const dashboardData = [
    {
      title: "Total Teachers",
      description: teachers.length,
    },
    {
      title: "On Leave",
      description: teachers.filter((teacher) => teacher.onDutyToday === true)
        .length,
    },
    {
      title: "Available",
      description: teachers.filter((teacher) => teacher.onDutyToday === false)
        .length,
    },
    {
      title: "Pending Leave Requests",
      description: 5,
    },
  ];

  return (
    <div className="h-full w-full">
      <div className="mb-5">
        <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl xl:text-4xl">
          Dashboard
        </h1>
      </div>

      <div className="flex w-full justify-between gap-4">
        {dashboardData.map((data, index) => (
          <Card className="w-1/4 shadow-2xl" key={index}>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
                {data.title}
              </CardTitle>
              <CardDescription className="font-sans text-lg font-medium lg:text-xl xl:text-2xl">
                {data.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <Table className="xl:mt-10">
        <TableCaption>List of Teachers</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Photo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Working Since</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Contact</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachers.slice(0, 6).map((data, index) => (
            <TableRow key={index}>
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
              <TableCell>{data.workingSince}</TableCell>
              <TableCell>{data.gender}</TableCell>
              <TableCell>{data.teacherDetails.contact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default Home;
