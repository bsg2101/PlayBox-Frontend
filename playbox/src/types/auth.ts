export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    token: string;
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
    }
  }
  
  export interface User {
    id: string;
    email: string;
    name: string;
    role: string;
  }