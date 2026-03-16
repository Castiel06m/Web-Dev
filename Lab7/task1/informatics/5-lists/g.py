n = int(input())

l = list(map(int, input().split()))

for i in range(0, int(n/2)):
    temp = l[i]
    l[i] = l[-(i+1)]
    l[-(i+1)] = temp
print(*(l))