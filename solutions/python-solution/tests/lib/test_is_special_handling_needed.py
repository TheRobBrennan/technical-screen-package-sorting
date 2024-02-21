# tests/lib/test_is_special_handling_needed.py
import pytest
from src.lib.is_special_handling_needed import is_special_handling_needed
from src.constants import STANDARD_PACKAGE

# Define test cases to cover all scenarios
@pytest.mark.parametrize("width, height, length, mass, expected", [
    # Not heavy or bulky
    (10, 10, 10, 10, False),
    # Heavy only
    (10, 10, 10, STANDARD_PACKAGE["MAX_MASS_IN_KG"] + 1, True),
    # Bulky only by width
    (STANDARD_PACKAGE["MAX_WIDTH_IN_CM"] + 1, 10, 10, 10, True),
    # Bulky only by height
    (10, STANDARD_PACKAGE["MAX_HEIGHT_IN_CM"] + 1, 10, 10, True),
    # Bulky only by length
    (10, 10, STANDARD_PACKAGE["MAX_LENGTH_IN_CM"] + 1, 10, True),
    # Bulky by volume
    (100, 100, STANDARD_PACKAGE["MAX_VOLUME_IN_CUBIC_CM"] // 10000 + 1, 10, True),
    # Both heavy and bulky
    (STANDARD_PACKAGE["MAX_WIDTH_IN_CM"] + 1, 100, 100, STANDARD_PACKAGE["MAX_MASS_IN_KG"] + 1, True),
])
def test_is_special_handling_needed(width, height, length, mass, expected):
    assert is_special_handling_needed(width, height, length, mass) == expected
