const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Jack London',
        //     city: 'Los Angeles'
        // });
        reject('Didnt happen');
    }, 4000);
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

console.log('after');
