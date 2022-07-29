export interface ISignUser {
    name?: string,
    cpf?: string,
    companyName?: string,
    login?: string,
    password: string,
    confirmPassword: string,
    accountType: string
}

export type Login = Pick<ISignUser, 'login' | 'password' | 'accountType'>