import * as T from "./type";

const shift = (schema: number[], iter = 1): number[] => {
  // create new array
  const r = [...schema];
  // take first element
  const first = r.shift();

  if (first === undefined) {
    throw Error("this should never happen");
  }

  r.push(first + 12);

  const y = r.map((x) => (x - r[0]) % 12);

  if (iter <= 1) {
    return y;
  }

  return shift(y, iter - 1);
};

export const major = [0, 2, 4, 5, 7, 9, 11];
export const ionian = major;
export const minor = shift(major, 5);
export const dorian = shift(major, 1);
export const phrygian = shift(major, 2);
export const lydian = shift(major, 3);
export const mixoydian = shift(major, 4);
export const aeolian = minor;
export const locrian = shift(major, 6);

export const generateScale = <N = T.Note>(
  schema: number[],
  startNote: T.Note = T.Note.C
): T.Note[] =>
  schema.map((x) => {
    return (x + startNote) % 12;
  });
