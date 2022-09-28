const myEach = (collection, fn) =>{
    for(const item of convertToArray(collection)){
        fn(item)
    }
    return collection;
};

const myMap = (collection, fn) =>{
    const newCollection = [];
    for(const item of convertToArray(collection)){
        newCollection.push(fn(item))
    }
    return newCollection;
};

const myReduce = (collection, fn, acc) =>{
    const newCollection = convertToArray(collection)
    for(let i=0; i < newCollection.length; i++){
        if(i===0 && (acc === undefined || acc === null)){
            acc = newCollection[i];
            continue;
        }
        acc = fn(acc, newCollection[i], collection);
    }
    return acc;
};


const myFind = (collection, predicate)=> {
    for(const item of convertToArray(collection)){
        if(predicate(item)){
            return item;
        }
    }
    return undefined;
};

const myFilter = (collection, predicate)=> {
    const results = [];
    for(const item of convertToArray(collection)){
        if(predicate(item)){
            results.push(item);
        }
    }
    return results;
};

const mySize = (collection) => convertToArray(collection).length;;

const myFirst = (arr, n) =>{
    const newArr = convertToArray(arr);
    const results = [];

    if(n === undefined || n === null){
        return newArr[0];
    }

    for(let i=0; i < n; i++){
        results.push(newArr[i]);
    }
    return results;
};

const myLast = (arr, n) =>{
    const newArr = convertToArray(arr);
    const results = [];

    if(n === undefined || n === null){
        return newArr[newArr.length - 1];
    }

    for(let i=newArr.length-1; i > (newArr.length - n - 1); i--){
        results.unshift(newArr[i]);
    }
    return results;
};

const mySortBy = (items, fn) =>{
    const newArr = [...items];
    return newArr.sort((a,b)=>{
        if(fn(a) > fn(b)){
            return 1
        }else if(fn(a) < fn(b)){
            return -1;
        }else{
            return 0;
        }
    });
};

const myFlatten = (collection, single, newArr = []) =>{
    
    if(single){
        for(const item of collection){
            if(Array.isArray(item)){
                for(const itemInArr of item){
                    newArr.push(itemInArr)
                }
            }else{
                newArr.push(item)
            }

        }
    }else{
        for(const item of collection){
            Array.isArray(item) ? myFlatten(item, false, newArr) : newArr.push(item)
        }
    }
    
    return newArr;
};

const myKeys = (obj) =>{
    const arr = [];
    for(const key in obj){
        arr.push(key);
    }
    return arr;
};
const myValues = (obj) =>{
    const arr = [];
    for(const key in obj){
        arr.push(obj[key]);
    }
    return arr;
};


function convertToArray(collection){
    return !Array.isArray(collection) ? Object.values(collection) : collection;
}

