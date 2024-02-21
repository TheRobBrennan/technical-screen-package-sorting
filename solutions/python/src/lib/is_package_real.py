# src/lib/is_package_real.py
def is_package_real(width: float, height: float, length: float, mass: float) -> bool:
    """Check if the package has valid dimensions and mass."""
    return all(dimension > 0 for dimension in [width, height, length, mass])
