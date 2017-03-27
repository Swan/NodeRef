let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers.');
            }
        }, 1500);
    });
};

// let somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('It worked');
//     }, 2500);

// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }).catch((errorMessage) => {
//     console.log('Error: ', errorMessage);
// })

asyncAdd(5, 7).then((sum) => {
    console.log('Sum:', sum);
    return asyncAdd(sum, 33);
}).then((res) => {
    console.log(res)
}).catch((errorMessage) => {
    console.log(errorMessage);
});
