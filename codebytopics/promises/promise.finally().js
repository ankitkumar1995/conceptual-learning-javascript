/**
 * finally()
 * the finally method in javascript promises is typically used for cleanup operations that need to be perfomred regardless of whether a promise is fullfilled or rejected.
 *
 */
function fetchData() {
  showLoadingSpinner(true);
  return fetch("")
    .then((res) => {
      if (!res.ok) {
        throw new Error("api call face some issue");
      }
      return res.json();
    })
    .catch((error) => {
      console.log("api call fetch rejected", error);
    })
    .finally(() => {
      showLoadingSpinner(false);
    });
}

function showLoadingSpinner(isLoader) {
  if (isLoader) {
    console.log("Showing loading spinner");
  } else {
    console.log("Hiding loading spinner");
  }
}
