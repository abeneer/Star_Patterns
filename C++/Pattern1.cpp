// Pattern 1 
// * * * *
// * * * *
// * * * *
// * * * *

#include <iostream>
using namespace std;
void Pattern1(int N){
    //Outer loop to handle rows
    for (int i = 0; i < N; i++){
        // Innet loop to handle colums
        for(int j = 0; j < N; j++){
            cout << "* ";
        }
        cout << endl;
    }

}


int main(){ 
    int N = 5;
    Pattern1(N);
    return 0;
}