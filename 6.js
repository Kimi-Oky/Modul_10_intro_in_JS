const arr = [1, 1, 1]
let x = arr[0]
for (var i = 0; i < arr.length; i++) {
        while(x!==arr[i]){
            console.log("false")
        }
    }   
console.log("true")