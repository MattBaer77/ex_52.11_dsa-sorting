function merge(arr1, arr2) {

    const mergedArr = []

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {

        if(arr1[i] < arr2[j]) {

            mergedArr.push(arr1[i]);
            i++;

        } else {

            mergedArr.push(arr2[j]);
            j++;

        }

    }

    while(i < arr1.length){
        mergedArr.push(arr1[i])
        i++;
    }

    while(j < arr2.length){
        mergedArr.push(arr2[j])
        j++;
    }

    return mergedArr

}

function mergeSort(arr) {

    // NOTE TO SELF - CHECK NOTES FOR RECURSIVE VERSION.

    const allArrs = [];

    for(value of arr){

        allArrs.push([value])

    }

    let result = [];

    for(eachArr of allArrs){

        result = merge(result, eachArr);

    }

    return result

}

module.exports = { merge, mergeSort};