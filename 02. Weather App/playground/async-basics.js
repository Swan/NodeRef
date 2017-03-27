console.log('Startng App');

setTimeout(() => {
    console.log("Inside of Callback");
}, 2000);

setTimeout(() => {
    console.log("Lol");
}, 0);
console.log('Finishing App');


