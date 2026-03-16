n = int(input())

l = list(map(int, input().split()))
print(*(x for x in l if x%2==0))