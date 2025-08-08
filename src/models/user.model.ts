// src/models/user.model.ts
export interface User {
  id: number;
  name: string;
  email: string;
  created_at?: Date;
}
