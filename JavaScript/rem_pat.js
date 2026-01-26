class Rem_pat{

// pattern6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
    pattern6(N){
        for(let i = 0; i < N; i++){
            let row = "";
            for (let j = N; j>i; j--){
                row += (N - j + 1)+ " ";
            }
            console.log(row.trim());
            
        }

    }
// Pattern 7
//      *    
//     ***   
//    *****  
//   ******* 
//  *********

    pattern7(N){
        for(let i = 0; i < N; i++){
            let row = "";

            for(let j = 0; j < N - i - 1; j++){
                row += " ";
            }

            for(let j = 0; j < 2*i+1; j++){
                row+= "*";
            }
            for(let j = 0; j < N - i - 1; j++){
                row += " ";
            }
            console.log(row);

        }
    }

    pattern8(N){
    // *********
    //  ******* 
    //   *****  
    //    ***   
    //     *   
        for(let i = 0;  i < N; i++){
            let row = "";

            for(let j = 0; j<i; j++){
                row += " ";
            }
            for (let j = 0; j < 2*N-(2*i+1); j++){
                row += "*";
            }
            for(let j = 0; j<i; j++){
                row += " ";
            }
            console.log(row);
        }
    }

    // pattern9
//     *    
//     ***   
//    *****  
//   ******* 
//  *********
//  *********
//   ******* 
//    *****  
//     ***   
//      *  
    erectStarts(N){
        for(let i = 0; i<N; i++){
            let row = " "

            for(let j = 0; j<N-i-1; j++){
                row+=" ";
            }
            for(let j = 0; j<2*i+1; j++){
                row+="*"
            }
            for(let j = 0; j<N-i-1; j++){
                row+=" ";
            }
            console.log(row)
        }
    }
    invertedStars(N){
        for(let i = 0; i<N; i++){
            let row =" ";

            for(let j=0; j<i; j++){
                row+= " ";
            }
            for(let j = 0; j<2*N-(2*i+1); j++){
                row+="*";
            }
            for(let j=0; j<i; j++){
                row+=" ";
            }
            console.log(row)
        }
    }

 



    
}

const { log } = require("console");
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
 
let idx = 0;
const t = Number(input[idx++]);

const sol = new Rem_pat();

for (let tc = 0; tc < t; tc++){
    const N = Number(input[idx++]);
    sol.pattern7(N);
    sol.pattern8(N);
    sol.erectStarts(N)
    sol.invertedStars(N)
}