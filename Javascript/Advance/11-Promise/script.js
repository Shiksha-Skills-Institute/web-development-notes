let result = fetch('https://images.pexels.com/photos/1540258/pexels-photo-1540258.jpeg?cs=srgb&dl=pexels-fotios-photos-1540258.jpg&fm=jpg').then((result)=> console.log('Image Fatched Ezternal'));
const myPromise = new Promise((resolve, reject) => {
  const success = false;

  let result = fetch('https://images.pexels.com/photos/1540258/pexels-photo-1540258.jpeg?cs=srgb&dl=pexels-fotios-photos-1540258.jpg&fm=jpg').then((result)=> console.log('Image Fatched internal'));
  

  if ( result.finally() ) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected!");
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));