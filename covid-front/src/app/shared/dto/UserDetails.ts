import { VaccinationCenter } from './VaccinationCenter';
export interface UserDetails {
  id?: number,
  username: string,
  firstName: string,
  lastName: string,
  password: string,
  center?: VaccinationCenter,
  role: Role, 
  authdata?: string
}

export interface Role{
  id: number,
  name: string
}
