/// <reference lib="dom" />
import { User, UserService } from "./UserService";

export class UserServiceImpl implements UserService {
  async getUsers() {
    console.log("fetch user data from server");

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users as User[];
  }
}
