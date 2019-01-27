const recipes = {}

// function updateObjectWithKeyAndValue(obj, key, value) {
//     obj[key] = value;
//     return obj;
// }

function updateObjectWithKeyAndValue(obj, key, value) {
    var newObj = Object.assign({}, obj, {key: value})
    return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}

function deleteFromObjectByKey(object, key) {
    var newObj = Object.assign({}, obj)
    delete newObj[key]
    return newObj
}
