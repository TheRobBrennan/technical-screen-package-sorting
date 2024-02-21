# src/lib/is_special_handling_needed.py
from ..constants import STANDARD_PACKAGE

def is_special_handling_needed(width: float, height: float, length: float, mass: float) -> bool:
    """Determine if special handling is needed based on package dimensions and mass."""
    volume = width * height * length
    is_heavy = mass >= STANDARD_PACKAGE["MAX_MASS_IN_KG"]
    is_bulky = (
        width >= STANDARD_PACKAGE["MAX_WIDTH_IN_CM"] or
        height >= STANDARD_PACKAGE["MAX_HEIGHT_IN_CM"] or
        length >= STANDARD_PACKAGE["MAX_LENGTH_IN_CM"] or
        volume >= STANDARD_PACKAGE["MAX_VOLUME_IN_CUBIC_CM"]
    )
    return is_heavy or is_bulky
