import { UserType, UserTypeWithKey } from "./RegisterBody";

export const mapUserTypeToUserTypeWithKey = (
  user: UserType
): UserTypeWithKey => {
  return {
    ...user,
    key: user.id,
  };
};

export const mapUserTypeWithKeyToUserType = (
  user: UserTypeWithKey
): UserType => {
  const { key, ...rest } = user;
  return rest;
};
