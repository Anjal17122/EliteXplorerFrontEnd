export type UserType = {
  id: number;
  fullName?: string;
  email?: string;
  phoneNo?: string;
  specialization?: string;
  username?: string;
  password?: string;
  userStatus?: UserStatus;
  personRoleId?: number;
  personRole?: string;
  registerDate?: string;
  filename?: string;
};

export type PersonRoleType = {
  id: number;
  name: string;
};

export type UserTypeWithKey = {
  key: number;
  id: number;
  fullName?: string;
  email?: string;
  phoneNo?: string;
  specialization?: string;
  username?: string;
  password?: string;
  userStatus?: UserStatus;
  personRoleId?: number;
  personRole?: string;
  registerDate?: string;
  filename?: string;
};
export enum UserStatus {
  approved,
  unapproved,
  disabled,
}
export const defaultUser: UserType = {
  id: 0,
  fullName: "",
  email: "",
  phoneNo: "",
  specialization: "",
  username: "",
  password: "",
  userStatus: UserStatus.unapproved, // assuming UserStatus is an enum with default value ACTIVE
  personRoleId: 0,
  personRole: "",
  registerDate: "",
  filename: "",
};
