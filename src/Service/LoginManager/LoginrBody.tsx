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

enum UserStatus {
  approved,
  unapproved,
  disabled,
}
