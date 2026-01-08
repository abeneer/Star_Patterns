# Pattern 1 
# * * * * * * * * * * 
# * * * * * * * * * * 
# * * * * * * * * * * 
# * * * * * * * * * * 
# * * * * * * * * * * 
# * * * * * * * * * * 
# * * * * * * * * * * 
# * * * * * * * * * * 
# * * * * * * * * * * 

class Solution:
    def pattern1(self, N):
        for i in range(N):
            for j in range(N):
                print("*", end=" ")
            print()



sol = Solution()
N = 10
sol.pattern1(N)

  