
// give sun of two array index which is equal to target in usorted array

function SumOfTwoArrayUnsorted()
{
   
    let arr=[3,5,1,6,3,8,4];

    let target=9;
    let dummyObj={}

    for(let i=0; i<arr.length; i++)
    { let targetLeft=target-arr[i]

        
if(dummyObj.hasOwnProperty(targetLeft))
{
    return [i,dummyObj[targetLeft]]
}
dummyObj[arr[i]]=i;


    }

return 'Not found'


}

console.log("result", SumOfTwoArrayUnsorted())


//         if(arr[i]+arr[i+1]==target)
//         {
// return [i,i+1];
//         }
