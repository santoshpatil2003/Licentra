const date = Date()
let l = date.toString().split(' ').slice(1,4)
let d = ''
l.forEach((e)=>{
    d = `${d} ` + e
})
console.log(d)


function CreateDate(){
    const date = Date()
    let l = date.toString().split(' ').slice(1,4)
    let d = ''
    l.forEach((e)=>{
        d = `${d} ` + e
    })
    return d
}


// function name2(name){
//     const date = Date.now()
//     let n = name
//     date.toString().split('').slice(8).forEach((e)=>{
//         n += e
//     })
//     console.log(n)
// }

// name2('sunny')
// console.log()

// let data2 = []

// let data = [...data2, { 'id': "12", 'quantity': '43738' }]
// data.push({ 'id': "11", 'quantity': '43738' });
// data.push({ 'id': "12", 'quantity': '43738' });
// data[0].id = "21"
// console.log(data[0].id);
// console.log(data);



