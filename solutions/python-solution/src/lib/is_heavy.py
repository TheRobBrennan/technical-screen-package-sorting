# src/lib/is_heavy.py
from ..constants import STANDARD_PACKAGE

def is_heavy(mass: float) -> bool:
    """Check if the package is heavy based on its mass."""
    return mass >= STANDARD_PACKAGE["MAX_MASS_IN_KG"]
