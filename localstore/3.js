let arr1="raman"
let arr2="amani"
let obj={}
for(let i=0;i<=arr1.length-1;i++){
    let bag=arr1[i]
    obj[bag]=true
}
if(obj["a"]==true && obj["m"]==true && obj["n"]==true && obj["i"]===true){
    console.log("exist");
}else{
    console.log("not exist");
}
