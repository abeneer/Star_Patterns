class Num_pyramid:
    def Pattern4(self, N):
        for i in range(1, N+1):
            for j in range(1, i + 1):
                print(i, end = " ")
            print()
    
if __name__ == "__main__":
    sol = Num_pyramid()
    N=5
    sol.Pattern4(N)
