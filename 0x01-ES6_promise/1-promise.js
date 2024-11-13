export default function getFullResponseFromAPI(success) {
  return new Promise((resolv, regect) => {
    if (success) {
      resolv({
        status: 200,
        body: 'Success',
      });
    } else {
      regect(Error('The fake API is not working currently'));
    }
  });
}
