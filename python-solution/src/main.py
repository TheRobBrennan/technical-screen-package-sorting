from src.lib.sort import sort_package

# Example usage
if __name__ == "__main__":
    # Example package
    width = 100
    height = 100
    length = 100
    mass = 10
    stack = sort_package(width, height, length, mass)
    print(f"\n----------------\nPackage details\n----------------\nWidth: {width} cm, Height: {height} cm, Length: {length} cm, Mass: {mass} kg")
    print(f"This package belongs to the {stack} stack.\n")
