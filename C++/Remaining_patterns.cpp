#include<iostream>
using namespace std;

class Solution {
public:
    // Function to print Pattern 6
    void pattern6(int N) {
        // Outer loop for rows
        for (int i = 0; i < N; i++) {
            // Inner loop for columns
            // Prints numbers from 1 up to (N - i)
            for (int j = N; j > i; j--) {
                cout << N - j + 1 << " ";
            }
            // Move to next line
            cout << endl;
        }
    }
// Pattern7
//     *    
//    ***   
//   *****  
//  ******* 
// *********
    void pattern7(int N){
        for(int i = 0; i <N; i++){
            //space
            for(int j = 0; j<N-i-1; j++){
                cout << " ";
            }
            // stars 
            for(int j=0; j<2*i+1; j++){
                cout << "*";
            }
            for(int j = 0; j<N-i-1; j++){
                cout << " ";
            }
            cout << endl;
        }


    }
    
//   pattern8
//   *********
//    ******* 
//     *****  
//      ***   
//       * 
    void pattern8(int N){
        for(int i = 0; i<N; i++){
            for(int j = 0; j < i; j++){
                cout << " ";
            }
            for(int j = 0; j<2*N - (2*i+1); j++){
                cout << "*";
            }
            for(int j = 0; j<i; j++){
                cout << " ";
            }
            cout << endl;
        }

    }
};

int main() {
    // Create object of Solution class
    Solution sol;

    // Define size of pattern
    int N = 5;

    // Call pattern function
    sol.pattern8(N);

    return 0;
}
