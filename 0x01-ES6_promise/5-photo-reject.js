export default function uploadPhoto(filename) {
  return new Promise((reject) => {
    if (filename) {
      reject(Error(`${filename} cannot be processed`));
    }
  });
}
