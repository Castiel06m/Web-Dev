def wrapper(f):
    def fun(l):
        standardized_l = []
        for phone in l:
            clean_number = phone[-10:]
            formatted = f"+91 {clean_number[:5]} {clean_number[5:]}"
            standardized_l.append(formatted)
        
        return f(standardized_l)
    return fun

@wrapper
def sort_phone(l):
    print(*sorted(l), sep='\n')

if __name__ == '__main__':
    l = [input() for _ in range(int(input()))]
    sort_phone(l) 