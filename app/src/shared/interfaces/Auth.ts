export interface PayloadSignin {
  email: string;
  password: string;
}

export interface PayloadSignup extends PayloadSignin {
  name: string;
}
