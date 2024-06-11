export interface UserResponse {
  name: string;
  email: string;
}

export interface UserUpdateResponse extends UserResponse {
  id: string;
}
