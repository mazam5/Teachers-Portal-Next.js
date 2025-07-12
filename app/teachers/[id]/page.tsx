"use client";

import { useTeacherStore } from "@/components/providers/teacher-store-provider";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Teacher } from "@/lib/types";
import { CheckIcon, PencilIcon, SlashIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Editable field types
type TeacherField = keyof Pick<Teacher, "department">;
type TeacherDetailsField = keyof Pick<
  Teacher["teacherDetails"],
  | "pinCode"
  | "specialization"
  | "city"
  | "state"
  | "streetAddress"
  | "contact"
  | "email"
>;

type FieldConfig =
  | {
      label: string;
      key: TeacherField;
      nested?: false;
    }
  | {
      label: string;
      key: TeacherDetailsField;
      nested: true;
    };

const editableFields: FieldConfig[] = [
  { label: "Department", key: "department" },
  { label: "Pin Code", key: "pinCode", nested: true },
  { label: "Specialization", key: "specialization", nested: true },
  { label: "City", key: "city", nested: true },
  { label: "State", key: "state", nested: true },
  { label: "Address", key: "streetAddress", nested: true },
  { label: "Contact", key: "contact", nested: true },
  { label: "Email", key: "email", nested: true },
];

const Id = () => {
  const { id } = useParams();
  const { teachers, updateTeacher } = useTeacherStore((state) => state);
  const [teacher, setTeacher] = useState<Teacher>();
  const [editedTeacher, setEditedTeacher] = useState<Teacher>();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id && teachers.length) {
      const found = teachers.find((t) => t.id.toString() === id);
      if (found) {
        setTeacher(found);
        setEditedTeacher(found);
      }
    }
  }, [id, teachers]);

  const handleEditToggle = () => setIsEditing((prev) => !prev);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: TeacherField | TeacherDetailsField,
    nested: boolean = false,
  ) => {
    if (!editedTeacher) return;
    const value = e.target.value;

    if (nested) {
      setEditedTeacher({
        ...editedTeacher,
        teacherDetails: {
          ...editedTeacher.teacherDetails,
          [key]: key === "contact" || key === "pinCode" ? Number(value) : value,
        },
      });
    } else {
      setEditedTeacher({
        ...editedTeacher,
        [key]: value,
      });
    }
  };

  const handleSave = () => {
    if (!editedTeacher || !teacher) return;
    setTeacher(editedTeacher);
    updateTeacher(teacher.id, editedTeacher);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTeacher(teacher);
    setIsEditing(false);
  };

  return (
    <div className="h-full w-full space-y-6 p-6">
      <Breadcrumb>
        <BreadcrumbList className="text-xs md:text-lg">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/teachers">Teachers</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          {teacher && (
            <BreadcrumbItem>
              <BreadcrumbPage>
                {teacher.firstName} {teacher.lastName}
              </BreadcrumbPage>
            </BreadcrumbItem>
          )}
        </BreadcrumbList>
      </Breadcrumb>

      {editedTeacher ? (
        <div className="space-y-4 rounded-2xl border p-6 shadow-md">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              {editedTeacher.firstName} {editedTeacher.lastName}
            </h1>
            {!isEditing ? (
              <Button variant="ghost" onClick={handleEditToggle}>
                <PencilIcon className="h-5 w-5" />
              </Button>
            ) : (
              <div className="flex space-x-2">
                <Button size="sm" onClick={handleSave}>
                  <CheckIcon className="mr-1 h-4 w-4" /> Save
                </Button>
                <Button size="sm" variant="outline" onClick={handleCancel}>
                  <XIcon className="mr-1 h-4 w-4" /> Cancel
                </Button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 text-sm md:grid-cols-2 md:text-base">
            {editableFields.map(({ label, key, nested }) => {
              const value = nested
                ? editedTeacher.teacherDetails[key]
                : editedTeacher[key as TeacherField];

              return (
                <div key={key}>
                  <label className="mb-1 block">{label}</label>
                  {isEditing ? (
                    <Input
                      value={value?.toString() ?? ""}
                      onChange={(e) => handleChange(e, key, nested)}
                    />
                  ) : (
                    <p>{value}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p className="text-lg">Loading...</p>
      )}
    </div>
  );
};

export default Id;
