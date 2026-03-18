import math
class Circle:
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        print(self.radius**2 * 2 * math.pi) 
     
    def perimeter(self):
        print(self.radius * 2 * math.pi)

n = int(input())
kruzhok = Circle(n)

kruzhok.area()
kruzhok.perimeter()