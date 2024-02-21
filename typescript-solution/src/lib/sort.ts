const MAX_VOLUME_IN_CUBIC_CM = 1_000_000;

type Stack = 'STANDARD' | 'SPECIAL' | 'REJECTED';

export function sort(width: number, height: number, length: number, mass: number): Stack {
  const isHeavy = isPackageHeavy(mass)
  const isBulky = isPackageBulky(width, height, length);

  if (mass <= 0 || width <= 0 || height <= 0 || length <= 0) {
    return 'REJECTED';
  } else if (isHeavy || isBulky) {
    return 'SPECIAL';
  } else {
    return 'STANDARD';
  }
}

// TODO: Consider refactoring these functions to a separate file
function isPackageHeavy(mass: number): boolean {
  // A package is considered heavy when its mass is greater or equal to 20 kg
  return mass >= 20;
}

function isPackageBulky(width: number, height: number, length: number): boolean {
  // A package is considered bulky if
  // - Its volume is greater than or equal to 1,000,000 cm³
  // - Any one of its dimensions is greater or equal to 150 cm
  const volume = width * height * length;
  return (width >= 150 || height >= 150 || length >= 150) || (volume >= MAX_VOLUME_IN_CUBIC_CM);
}
