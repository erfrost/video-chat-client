export default interface User {
  _id: string;
  email: string;
  phone: string;
  nickname: string;
  gender: string;
  dateBirth: string;
  avatar: string;
  passportIsVerified?: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
