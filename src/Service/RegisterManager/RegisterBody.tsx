export type UserType = {
  id: number;
  fullName: string;
  email: string;
  phoneNo: string;
  specialization: string;
  username: string;
  password: string;
  userStatus: UserStatus;
  personRoleId: number;
  personRole: string;
  registerDate: string;
  filename: string;
};

export enum UserStatus {
  approved,
  unapproved,
  disabled,
}
