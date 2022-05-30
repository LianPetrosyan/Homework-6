// 1. Get array of node ids from tree (keys).

function getNodes (node, arr=[],keys = 1 ){
    if(keys!== undefined){
        for(keys in node){
            arr.push(keys)
            getNodes(node[keys], arr)
        }
    }return arr
}


// 2. Get array of nodes from tree.

function getNodes (node, arr=[],keys = 1 ){
    if(keys!== undefined){
        for(keys in node){
            arr.push({"id": keys,  "children": node[keys]})
            getNodes(node[keys], arr)
        }
    }return arr
}


// 3. Implement binary search.
// traberak 1 rekursiayov

function binarySearch(arr, target, startIndex = 0 , endIndex = arr.length-1){
    let middleEl = arr[Math.round((startIndex + endIndex) /2)]
    if(middleEl === target){
        return arr.indexOf(middleEl)
    }
    if(middleEl > target) {
        endIndex = middleEl
        return binarySearch(arr, target, startIndex , endIndex)
    }
    else{
        startIndex = middleEl
        return binarySearch(arr, target, startIndex, endIndex)
    }
}

// tarberak 2 loopov

function binarSearch (arr, target) {
    let startIndex = 0
    let endIndex = arr.length-1
    for(i = startIndex ; i < endIndex ; i++){
        let middleEl = Math.floor((startIndex + endIndex) / 2)
        if(middleEl === target){
            return arr.indexOf(middleEl)
        }
        else if (middleEl > target){
            endIndex = middleEl
        }
        else if (middleEl < target){
            startIndex = middleEl
        }
        else {
            return "Not found"
        }
    }
}

