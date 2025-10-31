import math
from datetime import datetime

wid  = int(input("Please enter the width of the tire in mm (exp. 205):"))
asp = int(input("Please enter the aspect ratio of the tire (exp. 60):"))
dia = int(input("Please enter the diamter of the wheel in inches (exp. 15):"))

vol = (math.pi * wid**2 * asp *(wid * asp + 2540 * dia)) / 10000000000

vol_rounded = round(vol, 2)

print(f"If the Tire width is {wid} The aspect ratio is {asp}, and the diamater is {dia}, then the preassure is approximately {vol_rounded} liters" 

)

current_date = datetime.now()
date_str = f"{current_date:%Y-%m-%d}"

with open("volumes.txt", "at") as file:
    print(f"{date_str}, {wid}, {asp}, {dia}, {vol_rounded}", file=file)

