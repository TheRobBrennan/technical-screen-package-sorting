// tests/lib/isPackageHeavy.test.ts
import { isPackageHeavy } from '../../src/lib/isPackageHeavy';
import { STANDARD_PACKAGE } from '../../src/constants';

describe('isPackageHeavy', () => {
  test('should return true for packages heavier than the standard maximum mass', () => {
    const heavyMass = STANDARD_PACKAGE.MAX_MASS_IN_KG + 1;
    expect(isPackageHeavy(heavyMass)).toBe(true);
  });

  test('should return true for packages exactly at the standard maximum mass', () => {
    const exactMass = STANDARD_PACKAGE.MAX_MASS_IN_KG;
    expect(isPackageHeavy(exactMass)).toBe(true);
  });

  test('should return false for packages lighter than the standard maximum mass', () => {
    const lightMass = STANDARD_PACKAGE.MAX_MASS_IN_KG - 1;
    expect(isPackageHeavy(lightMass)).toBe(false);
  });
});
