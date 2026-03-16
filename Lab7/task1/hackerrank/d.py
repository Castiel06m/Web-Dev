from collections import defaultdict
d = defaultdict(list)
l = list(map(int, input().split()))

for i in range(0, l[0]):
    a = input()
    d[a].append(i+1)
for _ in range(0, l[1]):
    a = input()
    print(*(d[a] if d[a] else [-1]))