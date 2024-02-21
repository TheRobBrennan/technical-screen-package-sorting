from .is_package_real import is_package_real
from .is_special_handling_needed import is_special_handling_needed

def sort_package(width: float, height: float, length: float, mass: float) -> str:
    if not is_package_real(width, height, length, mass):
        return 'REJECTED'
    elif is_special_handling_needed(width, height, length, mass):
        return 'SPECIAL'
    else:
        return 'STANDARD'
