const data = [
    {name : "amar singh", age : 25},
    {name : "Ajay singh", age : 27}
];


function getData() {

setTimeout(() => {
    let output = ""
    data.forEach((datas, index) => {
        
        output+= `<li> ${datas.name} </li>`
    
    });
    
    document.body.innerHTML=output
}, 1000);
    
}


getData();

// Promise

function createData(Newdata) {
    new Promise((resolve, reject) => {
    setTimeout(() => {

        
            let err = false

            if(!err) {
                resolve()
            } else {
                    reject("Bhai kuch to gadbad hai")
                }
            
        })


data.push(Newdata)

    })
}

createData({name : "sunny"})




// Call Back


// function createData(Newdata, callback) {
//     setTimeout(() => {

// data.push(Newdata)
// callback();
//     }, 2000)
// }

// createData({name : "sunny"},  getData)
