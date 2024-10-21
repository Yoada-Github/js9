//Question number 1

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

delay(3000).then(() => {
    console.log('Promise is resolved!');
});

//Question number 2

function fetchData(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.floor(Math.random() * 100); 

            if (number > 0) {
                resolve("Data fetched successfully."); 
            } else {
                reject("Failed to fetch the data."); 
            }
        }, delay);
    });
}

fetchData(4000)
    .then((data) => console.log(data)) 
    .catch((error) => console.log(error)); 


//Question number 3

function processData(data) {
    console.log("proccessing data:", data);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data*2)
        }, 1000);
    });
}
processData(4)
.then((result) =>console.log("processed data:", result))
.catch((error) =>console.error("data error:", error));


//Question number 4

function fetchData(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.floor(Math.random() * 100); 

            if (number > 0) {
                resolve(number); 
            } else {
                reject("Failed to fetch the data."); 
            }
        }, delay);
    });
}

function processData(data) {
    console.log("Processing data:", data);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data * 2); 
        }, 1000);
    });
}

// Chain fetchData and processData together
fetchData(4000)
    .then((data) => {
        console.log("Data fetched successfully:", data);
        return processData(data); 
    })
    .then((processedData) => {
        console.log("Processed data:", processedData); 
    })
    .catch((error) => {
        console.error("Error:", error); 
    });

    