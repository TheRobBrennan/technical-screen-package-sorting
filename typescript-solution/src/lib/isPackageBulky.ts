import { STANDARD_PACKAGE } from "../constants";

export function isPackageBulky(width: number, height: number, length: number): boolean {
  const { MAX_WIDTH_IN_CM, MAX_HEIGHT_IN_CM, MAX_LENGTH_IN_CM, MAX_VOLUME_IN_CUBIC_CM } = STANDARD_PACKAGE;

  const volume = width * height * length;
  return (width >= MAX_WIDTH_IN_CM || height >= MAX_HEIGHT_IN_CM || length >= MAX_LENGTH_IN_CM) || (volume >= MAX_VOLUME_IN_CUBIC_CM);
}