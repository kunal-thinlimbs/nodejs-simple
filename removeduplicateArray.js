function removeDuolicateSorterArray(arr){


    let slowIndex=0
    for (let fastIndex=1; fastIndex<arr.length; fastIndex++)
    {

        if(arr[slowIndex]!==arr[fastIndex])
        {

            slowIndex++;

            arr[slowIndex]=arr[fastIndex]
        }
    }
    return slowIndex+1;

}
let sortArray=[1,2,3,3,4,4]

console.log(sortArray.splice(0,removeDuolicateSorterArray(sortArray)))
