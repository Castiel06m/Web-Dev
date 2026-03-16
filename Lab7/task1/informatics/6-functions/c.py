l = list(map(int, input().split()))

def xor(a, b):
    return int((a == 1 and b == 0) or (a == 0 and b == 1))

print(xor(l[0], l[1])) 