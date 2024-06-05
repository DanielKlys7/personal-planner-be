import { z } from 'zod';

import { createUserSchema } from '../domain/entities/User.entity';
import { UserService } from '../domain/services/User.service';

export class UserServiceController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async signup(user: z.infer<typeof createUserSchema>) {
    return user;
  }

  async login() {
    // Implement login logic here
  }
}
