function delaySuccess(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(success);
        }, 3000);
    });
}

console.log(delaySuccess('Success!').then(result => console.log(result)));





