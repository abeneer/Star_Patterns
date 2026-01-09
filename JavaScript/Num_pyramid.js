// Right_Angle_number_pyramid
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 


class Num_Pyramid{
    Pattern3(N){
        for(let i = 1; i <= N; i++){
            let row = ""
            for (let j = 1; j<=i; j++){
                row += j + " "; 
            }
            console.log(row);   
        }
    }
}

const sol = new Num_Pyramid();
const N = 5;
sol.Pattern3(N);