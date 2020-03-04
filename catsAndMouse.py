def catsAndMouse(x, y, z):
    distance_a =  x - z if x - z > 0 else (x - z) * -1
    distance_b =  y - z if y - z > 0 else (y - z) * -1
    
    
    if distance_b == distance_a:
        print('Mouse')
    elif distance_a < distance_b:
        print('Cat A')
    else:
        print('Cat B')
    
x = 1
y = 2
z = 3

catsAndMouse(3, 5, 2)