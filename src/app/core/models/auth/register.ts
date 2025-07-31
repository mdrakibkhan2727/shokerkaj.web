export interface RegisterInfo {
  username: string;
  emailAddress: string;
  password: string;
  role?: string; // optional, defaults to 'User' if not set
}
