export type LoginType = {
  username: string;
  password: string;
};

export type LoginTypeSuccess = {
  success: boolean;
  username: string;
  token: string;
  roles: string;
};
