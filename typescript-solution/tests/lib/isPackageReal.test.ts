// tests/lib/isPackageReal.test.ts
import { isPackageReal } from '../../src/lib/isPackageReal';

describe('isPackageReal', () => {
  test('returns true for positive dimensions (width, height, or length) and mass', () => {
    expect(isPackageReal(10, 20, 30, 5)).toBe(true);
  });

  test('returns false if any dimension (width, height, or length) is zero', () => {
    expect(isPackageReal(0, 20, 30, 5)).toBe(false);
    expect(isPackageReal(10, 0, 30, 5)).toBe(false);
    expect(isPackageReal(10, 20, 0, 5)).toBe(false);
  });

  test('returns false if any dimension (width, height, or length) is negative', () => {
    expect(isPackageReal(-1, 20, 30, 5)).toBe(false);
    expect(isPackageReal(10, -1, 30, 5)).toBe(false);
    expect(isPackageReal(10, 20, -1, 5)).toBe(false);
  });

  test('returns false if mass is zero', () => {
    expect(isPackageReal(10, 20, 30, 0)).toBe(false);
  });

  test('returns false if mass is negative', () => {
    expect(isPackageReal(10, 20, 30, -5)).toBe(false);
  });
});
