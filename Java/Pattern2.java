package Java;

public class Pattern2 {
    public void patty(int N){
        for (int i = 0; i< N; i++){
            for (int j= 0; j<=i; j++){
                System.out.print("* ");
            }
            System.out.println();
        }

    }

    public static void main(String[] args){
        Pattern2 pat = new Pattern2();
        int N = 5;
        pat.patty(N);
    }
}
