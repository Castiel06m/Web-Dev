n = int(input())

l = list(map(int, input().split()))
ans = 'NO'

for i in range(1, n):
    if (l[i] > 0 and l[i-1] > 0) or (l[i] < 0 and l[i-1] < 0):
        ans = 'YES'
print(ans)
        