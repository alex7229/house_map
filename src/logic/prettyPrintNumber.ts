export type PrettyPrintNumber = (num: number) => string;

export const prettyPrintNumber: PrettyPrintNumber = num => {
  const roundedNumber = Math.round(num).toString();
  const segments: string[] = [];
  for (let i = roundedNumber.length - 3; i >= -2; i -= 3) {
    // if i < 0 — that means that number looks like this '45 000' or this '2 232'
    // and this segment is 45 (or 2 in second example)
    const startPosition = i || 0;
    const endPosition = i + 3;
    const segment = roundedNumber.substring(startPosition, endPosition);
    segments.unshift(segment);
  }
  return segments.join(" ");
};
