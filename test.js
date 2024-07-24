/**
 * Finds the intersection of two arrays using a single loop.
 * This approach may be less performant in real-world scenarios
 * due to cache misses caused by random memory access.
 * * @param {Array<any>} arr1 The first array.
 * @param {Array<any>} arr2 The second array.
 * @returns {Array<any>} A new array containing the elements present in both input arrays.
 */
function findIntersectionSinglePass(arr1, arr2) {
  // Use the smaller array to build the initial set for efficiency.
  const smallerArr = arr1.length < arr2.length ? arr1 : arr2;
  const largerArr = arr1.length < arr2.length ? arr2 : arr1;

  // Create a Set from the smaller array for quick lookups.
  const smallerSet = new Set(smallerArr);
  
  // Use a Set to store the result to automatically handle duplicates.
  const resultSet = new Set();

  // Iterate through the larger array.
  for (const element of largerArr) {
    // If the element is in the set created from the smaller array,
    // add it to our result set. The Set automatically prevents duplicates.
    if (smallerSet.has(element)) {
      resultSet.add(element);
    }
  }

  // Convert the result Set back to an Array before returning.
  return Array.from(resultSet);
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const intersection = findIntersectionSinglePass(array1, array2);
console.log("Intersection:", intersection); // Output: Intersection: [3, 4, 5]

const array3 = [1, 2, 2, 3];
const array4 = [2, 2, 3, 4];

const intersectionWithDuplicates = findIntersectionSinglePass(array3, array4);
console.log("Intersection with Duplicates:", intersectionWithDuplicates); // Output: Intersection with Duplicates: [2, 3]
