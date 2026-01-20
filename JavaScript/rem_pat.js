class Rem_pat{
    patterns(N){
        for(let i = 0; i < N; i++){
            let row = "";
            for (let j = N; j>i; j--){
                row += (N - j + 1)+ " ";
            }
            console.log(row.trim());
            
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
    sol.patterns(N);
}