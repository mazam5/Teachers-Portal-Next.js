export interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  salary: number;
  gender: string;
  photo?: string;
  workingSince: number;
  performance: string;
  qualifications: string;
  active: boolean;
  onDutyToday: boolean;
  teacherDetails: TeacherDetails;
}
export interface TeacherDetails {
  id: number;
  email: string;
  secondaryEmail?: string;
  contact: number;
  secondaryContact?: number;
  streetAddress: string;
  city: string;
  state: string;
  country: string;
  experience: number;
  specialization: string;
  pinCode: number;
}
