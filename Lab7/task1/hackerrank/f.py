# Enter your code here. Read input from STDIN. Print output to STDOUT
n = int(input())

for _ in range(0, n):
    try:
        a, b = map(int, input().split())
        print(a//b)
    except (ZeroDivisionError, ValueError) as e:
        print(f"Error Code: {e}")
        