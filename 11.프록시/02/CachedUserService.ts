import { User, UserService } from "./UserService";

export class CachedUserService implements UserService {
  private readonly userService: UserService;
  private cache: User[] | null = null;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async getUsers() {
    console.info("CachedUserService.getUsers()");
    if (this.cache) {
      return this.cache;
    }

    this.cache = await this.userService.getUsers();

    return this.cache;
  }
}
