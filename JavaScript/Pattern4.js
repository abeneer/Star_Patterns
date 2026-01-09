class Num_pyramid{
    Pattern4(N){
        for(let i=1; i<=N; i++){
            let row = "";
            for(let j =1; j<=i; j++){
                row += i + " ";
            }
            console.log(row);
        }
           
    }
}

const sol = new Num_pyramid();
const N = 5;
sol.Pattern4(N)