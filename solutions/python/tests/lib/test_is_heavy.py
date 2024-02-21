# tests/lib/test_is_heavy.py
import pytest
from src.lib.is_heavy import is_heavy
from src.constants import STANDARD_PACKAGE

@pytest.mark.parametrize("mass,expected", [
    (STANDARD_PACKAGE["MAX_MASS_IN_KG"] - 1, False),
    (STANDARD_PACKAGE["MAX_MASS_IN_KG"], True),
    (STANDARD_PACKAGE["MAX_MASS_IN_KG"] + 1, True),
])
def test_is_heavy(mass, expected):
    assert is_heavy(mass) == expected
