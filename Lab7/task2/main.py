from models import Pistol, Rifle

def main():
    glock = Pistol("Glock 17", 15)
    ak = Rifle("AK-47", 30, "Single")
    
    weapons = [glock, ak]
    
    for w in weapons:
        print(w)
        print("-" * 15)
    
    glock.fire()
    glock.toggle_safety()
    glock.fire()
    
    ak.switch_mode("Burst")
    ak.fire()
    ak.switch_mode("Sniper")
    
    print("\n--- Polymorphism check ---")
    for w in weapons:
        w.fire()
    
    glock.reload()
    ak.reload()

if __name__ == "__main__":
    main()