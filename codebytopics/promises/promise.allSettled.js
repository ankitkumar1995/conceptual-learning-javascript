function apiDelay(cfn, time) {
  return new Promise((resolve) => setTimeout(resolve(cfn), time));
}

async function makeApiCall() {
  const apiCall1 = apiDelay(
    console.log("api1 call resolve and delay is 1 sec", 1000)
  );

  const apiCall2 = apiDelay(
    console.log("api2 call resolve and delay is 3 sec", 3000)
  );
  const apiCall3 = apiDelay(
    console.log("api3 call resolve and delay is 2 sec", 2000)
  );
  await Promise.allSettled([apiCall1, apiCall2, apiCall3])
    .then((res) => console.log("api and promise settled in 3 sec", res))
    .then((error) => console.log("api and promise reject in 3 sec", error));
}
makeApiCall();
