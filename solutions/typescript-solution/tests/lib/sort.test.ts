// tests/lib/sort.test.ts
import { sort } from '../../src/lib/sort';

describe('Package Sorting', () => {
  test('should classify as STANDARD for non-bulky, non-heavy items', () => {
    expect(sort(99, 99, 99, 10)).toBe('STANDARD');
  });

  test('should classify as SPECIAL for bulky items', () => {
    expect(sort(100, 100, 100, 10)).toBe('SPECIAL');
    expect(sort(151, 100, 100, 10)).toBe('SPECIAL');
    expect(sort(100, 151, 100, 10)).toBe('SPECIAL');
    expect(sort(100, 100, 151, 10)).toBe('SPECIAL');
    expect(sort(50, 50, 50, 20)).toBe('SPECIAL'); // Heavy item
    expect(sort(100, 100, 100, 20)).toBe('SPECIAL'); // Exactly at the heavy limit
  });

  test('should classify as SPECIAL for heavy items', () => {
    expect(sort(100, 100, 100, 20)).toBe('SPECIAL');
  });

  test('should classify as REJECTED for items with invalid dimensions or mass', () => {
    expect(sort(0, 100, 100, 10)).toBe('REJECTED');
    expect(sort(100, 0, 100, 10)).toBe('REJECTED');
    expect(sort(100, 100, 0, 10)).toBe('REJECTED');
    expect(sort(100, 100, 100, 0)).toBe('REJECTED');
  });
});
