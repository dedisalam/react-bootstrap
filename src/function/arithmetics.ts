// create calculator check units
export default function calc(
  a: string | number,
  operator: string,
  b: string | number,
): number | string {
  let aUnit;
  let aNum;
  let bUnit;
  let bNum;

  if (typeof a === 'string') {
    // get a units
    aUnit = a.match(/[a-z]+$/);
    // get a numbers
    aNum = a.match(/\d+/);
  } else {
    // get a numbers
    aNum = a;
    aUnit = null;
  }

  if (typeof b === 'string') {
    // get b units
    bUnit = b.match(/[a-z]+$/);
    // get b numbers
    bNum = b.match(/\d+/);
  } else {
    // get b numbers
    bNum = b;
    bUnit = null;
  }

  if (aUnit === bUnit) {
    switch (operator) {
      case '+':
        return Number(aNum) + Number(bNum);
      case '-':
        return Number(aNum) - Number(bNum);
      case '*':
        return Number(aNum) * Number(bNum);
      case '/':
        return Number(aNum) / Number(bNum);
      default:
        return 'operator is not valid';
    }
  }
  return 'units are not valid';
}
