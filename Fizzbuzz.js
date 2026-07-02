//EJERCICIO 1 FIZZ-BUZZ

let num=1

if (num > 100) {
    console.log("FIN")
        
} else {

    while (num<=100) {
        if (num % 3 ==0 && num %5==0) {
            console.log("FizzBuzz");          
        }else if (num % 5==0) {
            console.log("Buzz");
        }else if (num % 3 ==0) {
            console.log("Fizz");
        }else{
            console.log(num);
            
        }
        num++
        }
            
            
    }

            

        

//for (let i = 1; i <= 100; i++) {
  //  const element = array[index];
    
//}