export interface UserDTO {
  id?: string;
  username: string;
  email: string;
  createdAt: string;
  userRole: string;
  profilePicPath: string;
  firstName: string;
  lastName: string;
  currency: string;
  refreshToken?: string;
  refreshTokenExpiry?: number;
}
