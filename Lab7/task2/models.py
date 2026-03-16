class Weapon:
    def __init__(self, model, ammo_capacity):
        self.model = model
        self.ammo_capacity = ammo_capacity
        self.current_ammo = ammo_capacity
    
    def fire(self):
        if self.current_ammo > 0:
            self.current_ammo -= 1
            print(f"[{self.model}] has fired!")
        else:
            print(f"[{self.model}] has no ammo!")

    def reload(self):
        self.current_ammo = self.ammo_capacity
        print(f"[{self.model}] is reloaded")
    
    def __str__(self):
        return f"Model: {self.model} \nAmmo Capacity: {self.ammo_capacity} \nCurrent Ammo: {self.current_ammo}"
    
class Pistol(Weapon):
    def __init__(self, model, ammo_capacity, is_on_safe=True):
        super().__init__(model, ammo_capacity)
        self.is_on_safe = is_on_safe

    def toggle_safety(self):
        self.is_on_safe = not self.is_on_safe
        status = "ON" if self.is_on_safe else "OFF"
        print(f"[{self.model}] Safety: {status}")
    
    def fire(self):
        if(self.is_on_safe):
            print(f"[{self.model}] is on safety mode")
        else:
            return super().fire()
    
class Rifle(Weapon):
    MODES = ["Single", "Burst", "Auto"]

    def __init__(self, model, ammo_capacity, fire_mode="Single"):
        super().__init__(model, ammo_capacity)
        if fire_mode not in self.MODES:
            fire_mode = "Single"
        self.fire_mode = fire_mode
    
    def switch_mode(self, mode):
        if mode in self.MODES:
            self.fire_mode = mode
            print(f"[{self.model}] changed to: {self.fire_mode}")
        else:
            print(f"[{self.model}] Error: '{mode}' mode is not supported. Avaliable: {', '.join(self.MODES)}")

    def fire(self):
        if self.fire_mode == "Burst":
            shots = min(self.current_ammo, 3)
            if shots == 0:
                return super().fire()
            self.current_ammo -= shots
            print(f"[{self.model}] Fire {shots} Rounds!")
        return super().fire()