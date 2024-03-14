import { CachedUserService } from "./CachedUserService";
import { UserServiceManager } from "./UserServiceManager";
import { UserServiceImpl } from "./UserServiceImpl";

const userService = new UserServiceImpl();
const userServiceProxy = new CachedUserService(userService);
const userServiceManager = new UserServiceManager(userServiceProxy);

(async () => {
  userServiceManager.printFirstUserName();

  await waitForOneSecond();

  userServiceManager.printFirstUserName();

  await waitForOneSecond();

  userServiceManager.printFirstUserName();
})();

function waitForOneSecond() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}
