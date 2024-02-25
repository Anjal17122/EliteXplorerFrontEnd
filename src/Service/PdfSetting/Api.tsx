import { baseUrl } from "../../Utils/Request/Constants";
import { getValueBySettingType, savePdfSetting } from "./Requests";
import { SettingType } from "./SettingType";

export const saveSettingType = (body: SettingType) => {
  const url = baseUrl + "/pdf/setting";
  return savePdfSetting(url, body);
};

export const getSettingTypeValue = (settingType: string) => {
  const url = `${baseUrl}/pdf/setting?settingType=${settingType}`;
  return getValueBySettingType(url);
};
