package Java;
// Pattern 1 
// * * * * * * 
// * * * * * * 
// * * * * * * 
// * * * * * * 
// * * * * * * 
// * * * * * * 

class Solution {
    public void pattern1(int N){
        for (int i=0; i < N; i++){
            for(int j = 0; j < N; j++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args){
        Solution pat = new Solution();
        int N = 6;
        pat.pattern1(N);
    }
    
}
