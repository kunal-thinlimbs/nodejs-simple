// give ssun of two array index which is equal to target

/*

approch
step:1  make it sorted array 
step:2 lets create two pointer high and low after that seach if sum of 
these high and low 
if its  bigger than targer reduce max by - 
and viceaversa


*/


function SumOfTwoArray()
{
    let arr=[1,2,3,4,5,6];
    let target=3;
    let low=0;
    let high=arr.length-1

while(low<high)
{
    let sumOf=arr[low]+arr[high]
if(sumOf==target)
{
    
    return [low,high]

}
if(sumOf>target)
{
high--;
}
else{
low++;
}
}
return "not found"
}

console.log("ss", SumOfTwoArray())