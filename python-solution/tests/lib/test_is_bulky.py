# tests/lib/test_is_bulky.py
import pytest
from src.lib.is_bulky import is_bulky
from src.constants import STANDARD_PACKAGE

@pytest.mark.parametrize("width,height,length,expected", [
    (STANDARD_PACKAGE["MAX_WIDTH_IN_CM"] - 1, 10, 10, False),
    (STANDARD_PACKAGE["MAX_WIDTH_IN_CM"], 100, 100, True),
    (10, STANDARD_PACKAGE["MAX_HEIGHT_IN_CM"] - 1, 10, False),
    (10, STANDARD_PACKAGE["MAX_HEIGHT_IN_CM"], 10, True),
    (10, 10, STANDARD_PACKAGE["MAX_LENGTH_IN_CM"] - 1, False),
    (100, 100, STANDARD_PACKAGE["MAX_LENGTH_IN_CM"], True),
    (10, 10, 10, False),  # Below volume threshold
    (100, 100, STANDARD_PACKAGE["MAX_VOLUME_IN_CUBIC_CM"] // (100*100), True),  # Exactly at volume threshold
])
def test_is_bulky(width, height, length, expected):
    assert is_bulky(width, height, length) == expected
