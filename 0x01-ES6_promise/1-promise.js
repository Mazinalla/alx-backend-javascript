export default function getFullResponseFromAPI(success) {
  return new Promise((resolv, reject) => {
    if (success) {
      resolv({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
