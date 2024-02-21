# tests/lib/test_is_package_real.py
import pytest
from src.lib.is_package_real import is_package_real

@pytest.mark.parametrize("width, height, length, mass, expected", [
    (10, 10, 10, 10, True),  # All dimensions and mass are positive
    (0, 10, 10, 10, False),  # Width is zero
    (10, 0, 10, 10, False),  # Height is zero
    (10, 10, 0, 10, False),  # Length is zero
    (10, 10, 10, 0, False),  # Mass is zero
    (-1, 10, 10, 10, False),  # Width is negative
    (10, -1, 10, 10, False),  # Height is negative
    (10, 10, -1, 10, False),  # Length is negative
    (10, 10, 10, -1, False),  # Mass is negative
    (-1, -1, -1, -1, False),  # All dimensions and mass are negative
])
def test_is_package_real(width, height, length, mass, expected):
    """Test if the package has valid dimensions and mass."""
    assert is_package_real(width, height, length, mass) == expected
