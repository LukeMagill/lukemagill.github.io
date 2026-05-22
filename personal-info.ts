export interface PersonalInfo {
  phoneNumber: string;
  emailAddress: string;
  address: string;
}

export function getCleanPhoneNumber(info: PersonalInfo): string {
  return info.phoneNumber.replace(/\D/g, "");
}