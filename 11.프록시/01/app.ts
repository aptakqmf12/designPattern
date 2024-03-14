import { UserServiceManager } from "./UserServiceManager";
import { UserServiceImpl } from "./UserServiceImpl";

const userService = new UserServiceImpl();
const userServiceManager = new UserServiceManager(userService);

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
