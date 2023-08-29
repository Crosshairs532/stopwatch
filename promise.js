const getdata = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    if (num > 5) {
        resolve(999);
    }
    else {
        reject('nothing is available');
    }

})
getdata
    .then((data) => console.log(data))
    .catch((err) => console.error('err', err))