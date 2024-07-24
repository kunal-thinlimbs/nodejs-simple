function sum2(...a){
    console.log(a)

}
const sum=(...a)=>
{
    console.log(arguments)
}

// argumanets only work in function why  because of different es version 

sum2(2,3,3,4,4,5)

sum(2,3,3,4,4,5)


console.log("rest opreator")

let arr1=[1,2,3,4,5]
let arr2=[23,4,5,]

console.log([...arr1]+[6,7,8,9])

