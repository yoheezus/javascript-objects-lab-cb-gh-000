const recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, obj, {key: value})
}
