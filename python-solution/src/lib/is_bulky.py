# src/lib/is_bulky.py
from ..constants import STANDARD_PACKAGE

def is_bulky(width: float, height: float, length: float) -> bool:
    """Determine if the package is bulky based on its dimensions and volume."""
    volume = width * height * length
    return (width >= STANDARD_PACKAGE["MAX_WIDTH_IN_CM"] or
            height >= STANDARD_PACKAGE["MAX_HEIGHT_IN_CM"] or
            length >= STANDARD_PACKAGE["MAX_LENGTH_IN_CM"] or
            volume >= STANDARD_PACKAGE["MAX_VOLUME_IN_CUBIC_CM"])
