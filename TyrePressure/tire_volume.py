import math
from datetime import datetime

# Tire Size Selection Menu
print("Select a tire size option:")
print("1. 185/65R15")
print("2. 195/65R15")
print("3. 205/55R16")
print("4. 205/60R15")
print("5. 215/55R17")
print("6. Enter custom tire size")

choice = input("Enter choice (1-6): ")

if choice == "1":
    wid, asp, dia = 185, 65, 15
elif choice == "2":
    wid, asp, dia = 195, 65, 15
elif choice == "3":
    wid, asp, dia = 205, 55, 16
elif choice == "4":
    wid, asp, dia = 205, 60, 15
elif choice == "5":
    wid, asp, dia = 215, 55, 17
elif choice == "6":
    wid  = int(input("Enter the width of the tire in mm (ex 205): "))
    asp = int(input("Enter the aspect ratio of the tire (ex 60): "))
    dia = int(input("Enter the diameter of the wheel in inches (ex 15): "))
else:
    print("Invalid choice, defaulting to custom size.")
    wid  = int(input("Enter the width of the tire in mm (ex 205): "))
    asp = int(input("Enter the aspect ratio of the tire (ex 60): "))
    dia = int(input("Enter the diameter of the wheel in inches (ex 15): "))

print(f"Using tire size: {wid}/{asp}R{dia}")

vol = (math.pi * wid**2 * asp * (wid * asp + 2540 * dia)) / 10000000000
vol_rounded = round(vol, 2)

print(f"The approximate volume is {vol_rounded} liters")

current_date = datetime.now()
date_str = f"{current_date:%Y-%m-%d}"

with open("volumes.txt", "at") as file:
    print(f"{date_str}, {wid}, {asp}, {dia}, {vol_rounded}", file=file)