# src/main.py
from src.lib.sort import sort_package

if __name__ == "__main__":
    # Refactor package details into a dictionary
    package_details = {
        "width": 100,
        "height": 100,
        "length": 100,
        "mass": 10,
    }
    
    # Unpack the dictionary when calling the sort_package function
    stack = sort_package(**package_details)
    
    # Display the package details and the stack it belongs to
    package_description = ', '.join(f"{key}: {value}" for key, value in package_details.items())
    print(f"Package details =>\t{package_description}")
    print(f"This package belongs to the {stack} stack.\n")