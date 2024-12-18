export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    if (filename) {
      reject(`Error: ${filename} cannot be processed`);
    }
  });
}
