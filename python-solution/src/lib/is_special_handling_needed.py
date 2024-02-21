# src/lib/is_special_handling_needed.py
from .is_heavy import is_heavy
from .is_bulky import is_bulky

def is_special_handling_needed(width: float, height: float, length: float, mass: float) -> bool:
    """Determine if special handling is needed based on package dimensions and mass."""
    return is_heavy(mass) or is_bulky(width, height, length)
