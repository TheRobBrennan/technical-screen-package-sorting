# src/main.py
from src.lib.sort import sort_package

# Example usage
if __name__ == "__main__":
    # Define a collection of package details in a list of dictionaries
    packages = [
        {"width": 100, "height": 100, "length": 100, "mass": 10},
        {"width": 150, "height": 200, "length": 250, "mass": 22},  # Example of a heavy package
        {"width": 160, "height": 100, "length": 100, "mass": 10},  # Example of a bulky package
        {"width": 0, "height": 100, "length": 100, "mass": 10},    # Example of an invalid package
    ]
    
    # Process each package in the collection
    for package in packages:
        stack = sort_package(**package)
        
        # Display the package details and the stack it belongs to
        package_description = ', '.join(f"{key}: {value}" for key, value in package.items())
        print(f"\nPackage details:\n\t{package_description}")
        print(f"\tThis package belongs to the {stack} stack.\n")
