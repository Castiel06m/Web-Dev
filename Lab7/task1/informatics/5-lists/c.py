n = int(input())
l = list(map(int, input().split()))

print(sum(1 for x in l if x>0))