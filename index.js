// Write your solution in this file!
const employee = {
    name: "Shuaib Shaban",
    streetAddress: "0TC"
}


function updateEmployeeWithKeyAndValue(obj, key, value){
  return {
    ...obj,
    [key] : value
  }

}
console.log(updateEmployeeWithKeyAndValue(employee, "Shaban", 454))
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, "shaban", 456)
console.log(employee);

function deleteFromEmployeeByKey(obj, key){
    const newObj = {
        ...obj
    }
    delete newObj[key]

    return newObj

}

console.log(deleteFromEmployeeByKey(employee, "jobId"))
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}

destructivelyDeleteFromEmployeeByKey(employee, "jobId")
console.log(employee);
