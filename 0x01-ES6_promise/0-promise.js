export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call with a delay
    const success = true; // Change to `false` to test rejection

    setTimeout(() => {
      if (success) {
        resolve('API call successful!');
      } else {
        reject(Error('API call failed!'));
      }
    }, 1000); // 1 second delay
  });
}
