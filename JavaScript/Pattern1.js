// Pattern 1 
// * * 
// * * 

class Solution{
    Pattern1(N){
        for (let i = 0; i< N; i++){
            let row = "";
            for (let j=0; j<N; j++){
                row += "* ";
            }
            console.log(row);
        }

    }
}

const sol = new Solution();
const N = 2;
sol.Pattern1(N);