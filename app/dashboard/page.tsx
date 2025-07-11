import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const page = () => {
  const dashboardData = [
    {
      id: 1,
      title: "Total Teachers",
      description: 12,
    },
    {
      id: 2,
      title: "On Leave",
      description: 4,
    },
    {
      id: 3,
      title: "On Duty",
      description: 11,
    },
    {
      id: 4,
      title: "Vacancies",
      description: 4,
    },
  ];
  return (
    <div className="h-full w-full border">
      <div className="mb-5">
        <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl xl:text-4xl">
          Dashboard
        </h1>
      </div>

      <div className="flex w-full justify-between gap-4">
        {dashboardData.map((data, index) => (
          <Card className="w-1/4" key={index}>
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
    </div>
  );
};
export default page;
