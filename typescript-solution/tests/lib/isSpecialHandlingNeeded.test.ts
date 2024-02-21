// tests/lib/isSpecializedHandlingNeeded.test.ts
import { isSpecialHandlingNeeded } from '../../src/lib/isSpecialHandlingNeeded';
import { STANDARD_PACKAGE } from '../../src/constants';

describe('isSpecialHandlingNeeded', () => {
  test('returns false for packages that are neither heavy nor bulky', () => {
    // Assuming dimensions and mass below the thresholds for heavy and bulky
    expect(isSpecialHandlingNeeded(50, 50, 50, 10)).toBe(false);
  });

  test('returns true for heavy packages', () => {
    // Mass just above the heavy threshold
    expect(isSpecialHandlingNeeded(50, 50, 50, STANDARD_PACKAGE.MAX_MASS_IN_KG + 1)).toBe(true);
  });

  test('returns true for bulky packages', () => {
    // Dimensions just above the bulky threshold
    expect(isSpecialHandlingNeeded(STANDARD_PACKAGE.MAX_WIDTH_IN_CM + 1, 50, 50, 10)).toBe(true);
    expect(isSpecialHandlingNeeded(50, STANDARD_PACKAGE.MAX_HEIGHT_IN_CM + 1, 50, 10)).toBe(true);
    expect(isSpecialHandlingNeeded(50, 50, STANDARD_PACKAGE.MAX_LENGTH_IN_CM + 1, 10)).toBe(true);
  });

  test('returns true for packages that are both heavy and bulky', () => {
    // Both mass and one dimension above their respective thresholds
    expect(isSpecialHandlingNeeded(STANDARD_PACKAGE.MAX_WIDTH_IN_CM + 1, 50, 50, STANDARD_PACKAGE.MAX_MASS_IN_KG + 1)).toBe(true);
  });
});
