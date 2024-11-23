export enum tagTypes { // It's a enum in typescript like an object
  Specialists = "specialists",
  Admin = "admin",
  Doctors = "doctors",
  Patient = "patients",
  Schedule = "schedule",
  Appointment = "appointment",
  DoctorSchedule = "doctorSchedule",
  User = "user",
  Prescription = "prescription",
  Review = "review",
  Payment = "payment",
}

export const tagsTypeList = [
  tagTypes.Specialists,
  tagTypes.Admin,
  tagTypes.Doctors,
  tagTypes.Patient,
  tagTypes.Schedule,
  tagTypes.Appointment,
  tagTypes.DoctorSchedule,
  tagTypes.User,
  tagTypes.Prescription,
  tagTypes.Review,
  tagTypes.Payment,
];
