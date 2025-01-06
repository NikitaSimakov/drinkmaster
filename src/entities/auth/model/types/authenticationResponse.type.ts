export interface SignUpResponse {
  name: string;
  email: string;
  avarURL: string;
  token: string;
}

export interface SignInResponse {
  token: string;
  user: {
    email: string;
  };
}
