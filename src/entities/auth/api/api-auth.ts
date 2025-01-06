import { api } from "../../../shared/http/axios-config";

import {
  SignInRequest,
  SignUpRequest,
} from "../model/types/authenticationRequest.type";
import {
  SignInResponse,
  SignUpResponse,
} from "../model/types/authenticationResponse.type";

// регистрация пользователя
export const signUpUser = async (
  user: SignUpRequest
): Promise<SignUpResponse> => {
  const response = await api.post("/auth/register", user);
  return response.data;
};

// аутентификация пользователя
export const signInUser = async (
  user: SignInRequest
): Promise<SignInResponse> => {
  const response = await api.post<SignInResponse>("/auth/login", user);
  console.log(response);

  return response.data;
};

// аутентификация пользователя
export const logoutUser = async (userId: string): Promise<void> => {
  await api.post("/auth/logout", userId);
};
