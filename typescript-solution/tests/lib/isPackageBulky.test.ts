// tests/lib/isPackageBulky.test.ts
import { isPackageBulky } from '../../src/lib/isPackageBulky';
import { STANDARD_PACKAGE } from '../../src/constants';

describe('isPackageBulky', () => {
  test('returns false for packages with volume just below the max volume', () => {
    expect(isPackageBulky(99.9, 99.9, 99.9)).toBe(false);
  });

  test('returns false for packages with the longest dimension just shy of the max dimension', () => {
    const almostMaxWidth = STANDARD_PACKAGE.MAX_WIDTH_IN_CM - 0.1;
    const almostMaxHeight = STANDARD_PACKAGE.MAX_HEIGHT_IN_CM - 0.1;
    const almostMaxLength = STANDARD_PACKAGE.MAX_LENGTH_IN_CM - 0.1;

    expect(isPackageBulky(almostMaxWidth, 10, 10)).toBe(false);
    expect(isPackageBulky(10, almostMaxHeight, 10)).toBe(false);
    expect(isPackageBulky(10, 10, almostMaxLength)).toBe(false);
  });

  test('returns true for packages with volume equal to the max volume', () => {
    const bulkyVolume = STANDARD_PACKAGE.MAX_VOLUME_IN_CUBIC_CM;
    expect(isPackageBulky(100, 100, bulkyVolume / 10_000)).toBe(true);
  });

  test('returns true for packages with one dimension equal to the max dimension', () => {
    expect(isPackageBulky(STANDARD_PACKAGE.MAX_WIDTH_IN_CM, 100, 100)).toBe(true);
    expect(isPackageBulky(100, STANDARD_PACKAGE.MAX_HEIGHT_IN_CM, 100)).toBe(true);
    expect(isPackageBulky(100, 100, STANDARD_PACKAGE.MAX_LENGTH_IN_CM)).toBe(true);
  });

  test('returns true for packages with one dimension greater than the max dimension', () => {
    const bulkyWidth = STANDARD_PACKAGE.MAX_WIDTH_IN_CM + 10;
    const bulkyHeight = STANDARD_PACKAGE.MAX_HEIGHT_IN_CM + 10;
    const bulkyLength = STANDARD_PACKAGE.MAX_LENGTH_IN_CM + 10;

    expect(isPackageBulky(bulkyWidth, 10, 10)).toBe(true);
    expect(isPackageBulky(10, bulkyHeight, 10)).toBe(true);
    expect(isPackageBulky(10, 10, bulkyLength)).toBe(true);
  });
});
