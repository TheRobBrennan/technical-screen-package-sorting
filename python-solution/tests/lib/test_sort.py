# tests/lib/test_sort.py
import pytest
from src.lib.sort import sort_package

@pytest.mark.parametrize("width,height,length,mass,expected", [
    (99.9, 99.9, 99.9, 10, 'STANDARD'),
    (100, 100, 100, 10, 'SPECIAL'), # Bulky by matching the maximum volume
    (151, 100, 100, 10, 'SPECIAL'),  # Bulky by width
    (100, 151, 100, 10, 'SPECIAL'),  # Bulky by height
    (100, 100, 151, 10, 'SPECIAL'),  # Bulky by length
    (100, 100, 100, 21, 'SPECIAL'),  # Heavy
    (0, 100, 100, 10, 'REJECTED'),   # Invalid width
    (100, 0, 100, 10, 'REJECTED'),   # Invalid height
    (100, 100, 0, 10, 'REJECTED'),   # Invalid length
    (100, 100, 100, 0, 'REJECTED'),  # Invalid mass
])
def test_sort_package(width, height, length, mass, expected):
    assert sort_package(width, height, length, mass) == expected
