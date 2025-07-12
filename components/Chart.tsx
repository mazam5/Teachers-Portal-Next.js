"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useTeacherStore } from "./providers/teacher-store-provider";

export function ChartComponent() {
  const { teachers } = useTeacherStore((state) => state);

  // ✅ Count how many teachers belong to each specialization
  const specializationCounts = teachers.reduce<Record<string, number>>(
    (acc, teacher) => {
      const spec = teacher.teacherDetails.specialization;
      acc[spec] = (acc[spec] || 0) + 1;
      return acc;
    },
    {},
  );

  // ✅ Convert to array for chart rendering
  const chartData = Object.entries(specializationCounts).map(
    ([specialization, count]) => ({
      specialization,
      count,
    }),
  );
  return (
    <ChartContainer
      config={{
        count: { label: "Teachers", color: "#60a5fa" },
      }}
      className="min-h-[200px] w-full"
    >
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="specialization"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="count" fill="var(--color-count)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
