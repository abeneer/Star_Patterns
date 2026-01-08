class Solution{
    pattern2(N){
        for (let i =0; i < N; i++){
            let row = "* ".repeat(i + 1);
            console.log(row);
            
        }

    }
}
const sol = new Solution();
    const N = 5;
    sol.pattern2(N);