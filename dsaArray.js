
let arr=[1,2,3,4,5,6]
let arr1=[1,2,3,4,5,6]




function insertElement(arr,element,index){

arr.splice(index,10,element)
// it will replace
// arr.push(element)

}
[1,2,3,4,5,6]

insertElement(arr,10,10)
console.log("Addded",arr)


// Delete

function deleteElement(arr,index){

    arr.splice(index,1)
    // arr1.pop()

}

deleteElement(arr1,3)
console.log("deleted array",arr1)

let arrLong=["arrssssssay","kunal","shayam"];

function longestStringFind(){
    let longSting=""
    for(let i=0; i<arrLong.length; i++)
    {
        longSting.length<arrLong[i].length ? longSting=arrLong[i]:''

    }
    return longSting
}
console.log("longest srting",longestStringFind())




function findSumoftripplet()
{
   let sumofarray=[0,2,3,1,2,-3]

   for(let i=0;i<sumofarray.length-2; i++)
   {
    console.log("is barr i",i)
    for(let k=i+1;k<sumofarray.length-1; k++)
    {
    console.log("is barrnk",k)

    for(let l=k+1;l<sumofarray.length; l++)
    {
    console.log("is barr l",l)

        if(sumofarray[i]+sumofarray[k]+sumofarray[l]==0)
        {
            return  [i]+""+[k]+""+[l]
        }

    }

   }
}
return "nahi";
}
console.log("sum of tripleet",findSumoftripplet()) 


function findMinandmax(){
    let minarray=['222','22222','32','114','1115','26','l']
    let min=minarray[0];
    let max=minarray[0];

    for(let i=0;  i<minarray.length;i++)
    {
if(min.length<minarray[i].length){
max=minarray[i]

}
if(min.length>minarray[i].length){
min=minarray[i]

}


    }
    return `min ${min} and max${max}`
}

console.log(findMinandmax())


function removeElement(){
    let removeArr=[1,2,3,4,5,6,7]
    let removeele=2
    removeArr.splice(1,1)
    return removeArr
}
console.log("remove elem",removeElement())


function findArr(){
  var arr=['222','22222','32','114','1115','26','l']
  var min=arr[0]
  var max=arr[0]
  for(var i =0; i<arr.length; i++){

    
    if(min.length>arr[i].length)
      {
        min=arr[i]
      }
    
     if(max.length<arr[i].length)
      {
        max=arr[i]
      }
  }
  return min+' '+max;
}
// console.log("kunba",findArr())


// find sum of two particluar index equal to target
// it with complextu of 0(n)
function sumOfTwo(){
    console.log("i got all")
    let arr=[1,3,5,6,7,8,3,10]
    let target=10
  
    for(let i=0; i<arr.length; i++)
    {

        console.log("showw")
        let targetLeft=target-arr[i]
        console.log("target left",targetLeft)

        if( arr.indexOf(targetLeft)!==-1 )
        {
            console.log("yaha sey ",arr.hasOwnPropety(targetLeft))
            return 0
        }
        console.log("nahii==>>>")
    }
}
console.log("show",sumOfTwo())


function sumOfTwo2(){
    console.log("i got all")
    let arr=[1,3,5,6,7,8,3,10]
    let target=10
  
    for(let i=0; i<arr.length; i++)
    {

        console.log("showw")
        let targetLeft=target-arr[i]
        console.log("target left",targetLeft)

        if( arr.indexOf(targetLeft)!==-1 )
        {
            console.log("yaha sey ",arr.indexOf(targetLeft))
            return [i,arr.indexOf(targetLeft)]
        }
       
    }
}
function sumOfTwo(){
    console.log("i got all")
    let arr=[1,3,5,6,7,9,3,10]
    let target=10
    let tagetObject={}
  
    for(let i=0; i<arr.length; i++)
    {

        console.log("showw")
        let targetLeft=target-arr[i]
        console.log("target left",targetLeft)

        if(tagetObject.hasOwnProperty(targetLeft))
        {
            
            return [i,tagetObject[targetLeft]]
        }
        tagetObject[arr[i]]=i;
        console.log("targetLefttargetLeft",tagetObject)
       
    }
    return []
}

// console.log("kk",sumOfTwo2())


function duplicateArray(){
    let arr=[1,2,3,4,5,6,4,5,6]
    let dummyObj={}
    let dupliArray=[]
     for(let i=0; i<arr.length; i++)
    {

if(dummyObj.hasOwnProperty(arr[i]))
{

    dupliArray.push(arr[i])
 

    }
    dummyObj[arr[i]]=i

}

return  dupliArray
}

console.log("kk",duplicateArray())



function itemIncommon(){
  let arr1 = [1, 2, 3]
let arr2 = [4, 5, 1]
    let dummyObj ={}
    // console.log('dumm',dummyObj)
    for(let i=0; i<arr1.length; i++)
    {
 if(arr1[i]==arr2[i])
        {
            return  true
        }
         if(dummyObj.hasOwnProperty(arr1[i])||dummyObj.hasOwnProperty(arr2[i])   )
    {
return true
    }
   
dummyObj[arr1[i]]=arr1[i]
dummyObj[arr2[i]]=arr2[i]

console.log(dummyObj)
        
    }
    return false
   
}

console.log("last",itemIncommon())
