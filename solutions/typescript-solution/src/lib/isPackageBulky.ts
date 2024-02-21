// src/lib/isPackageBulky.ts
import { STANDARD_PACKAGE } from "../constants";

/**
 * Checks if the package is bulky.
 * @param width The width of the package in cm.
 * @param height The height of the package in cm.
 * @param length The length of the package in cm.
 * @returns Returns true if any single dimension of the package (width, height, or length) is equal to or exceeds the maximum allowed dimension. 
 *          Returns true if the total volume of the package is equal to or exceeds the maximum allowed volume. 
 *          Returns false if this is not considered a bulky package.
 */
export function isPackageBulky(width: number, height: number, length: number): boolean {
  const { MAX_WIDTH_IN_CM, MAX_HEIGHT_IN_CM, MAX_LENGTH_IN_CM, MAX_VOLUME_IN_CUBIC_CM } = STANDARD_PACKAGE;

  const volume = width * height * length;
  return (width >= MAX_WIDTH_IN_CM || height >= MAX_HEIGHT_IN_CM || length >= MAX_LENGTH_IN_CM) || (volume >= MAX_VOLUME_IN_CUBIC_CM);
}
