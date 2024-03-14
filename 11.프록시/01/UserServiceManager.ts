import { UserService } from "./UserService";

export class UserServiceManager {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public async printFirstUserName() {
    const users = await this.userService.getUsers();

    console.log("name : " + users[0].name);
  }
}
