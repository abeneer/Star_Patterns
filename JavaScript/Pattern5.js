class Inverted_Right_Pyramid{
    Pattern5(N){
        for(let i = 0; i < N; i++){
            let row = ""
            for (let j = N; j > i; j--){
                row += "* "; 
            }
            console.log(row);
        }
    }
}

const sol = new Inverted_Right_Pyramid();
const N = 5;
sol.Pattern5(N)