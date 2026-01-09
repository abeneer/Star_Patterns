// Right_Angle_number_pyramid
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

package Java;

public class Num_pyramid {
    public void pattern3(int N){
        for (int i = 1; i<= N; i++){
            for (int j = 1; j<=i; j++){
                System.out.print(j + " ");

            }
            System.out.println();
        }

    };

    public static void main(String[] args){
        Num_pyramid sol = new Num_pyramid();
        int N = 5;
        sol.pattern3(N);

    }


    
}

