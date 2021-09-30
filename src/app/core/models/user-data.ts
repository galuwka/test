export interface UserData {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    role?: UserEnum
}

export enum UserEnum {
    Riskmanager,
    Processexpert,
    Admin,
    Auditor
}