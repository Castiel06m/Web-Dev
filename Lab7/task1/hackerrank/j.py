import numpy as np

n, m = map(int, input().split())

data = [list(map(int, input().split())) for _ in range(n)]
a = np.array(data)

print(np.mean(a, axis=1))
print(np.var(a, axis=0))
val = np.std(a)
print(round(val, 11) if val != 0 else 0.0)