const recipes = {}

// function updateObjectWithKeyAndValue(obj, key, value) {
//     obj[key] = value;
//     return obj;
// }

function updateObjectWithKeyAndValue(obj, key, value) {
    newObj = Object.assign({}, obj, {key: value})
    return newObj
}
