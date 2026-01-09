# Right_Angle_number_pyramid
# // 1 
# // 1 2 
# // 1 2 3 
# // 1 2 3 4 
# // 1 2 3 4 5 


class Num_Pyramid:
    def pattern3(self, N):
        for i in range(1, N+1):
            for j in range(1, i + 1):
                print(j, end = " ")
            print()

    

if __name__ == "__main__":
    sol = Num_Pyramid()
    N= 5
    sol.pattern3(N)
