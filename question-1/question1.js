const mixedArray = ['PIZZA', 10, true, 25, false, 'Kings'];

const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        const result = arr
            .filter(item => typeof item === 'string')
            .map(word => word.toLowerCase());

        resolve(result);
    });
};

lowerCaseWords(mixedArray)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });