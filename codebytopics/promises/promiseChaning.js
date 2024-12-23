function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("get the user form database");
    setTimeout(() => {
      resolve({
        userId: userId,
        username: "admin",
      });
    }, 1000);
  });
}
function getService(user) {
  return new Promise((resolve, reject) => {
    console.log(`get the service of ${user.username} from the api`);
    setTimeout(() => {
      resolve([]);
    }, 2 * 1000);
  });
}
