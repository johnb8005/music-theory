import * as S from "./scale";
import * as T from "./type";

describe("generate scales", () => {
  test("C major", () => {
    expect(S.generateScale(S.major, T.Note.C).map((x) => T.Note[x])).toEqual([
      "C",
      "D",
      "E",
      "F",
      "G",
      "A",
      "B",
    ]);
  });

  test("A minor", () => {
    expect(S.generateScale(S.minor, T.Note.A).map((x) => T.Note[x])).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
    ]);
  });

  test("D dorian", () => {
    expect(S.generateScale(S.dorian, T.Note.D).map((x) => T.Note[x])).toEqual([
      "D",
      "E",
      "F",
      "G",
      "A",
      "B",
      "C",
    ]);
  });

  test("E phrygian", () => {
    expect(
      S.generateScale(S.phrygian, T.Note.E).map((x) => T.Note[x])
    ).toEqual(["E", "F", "G", "A", "B", "C", "D"]);
  });

  test("F lydian", () => {
    expect(S.generateScale(S.lydian, T.Note.F).map((x) => T.Note[x])).toEqual([
      "F",
      "G",
      "A",
      "B",
      "C",
      "D",
      "E",
    ]);
  });

  test("G mixoydian", () => {
    expect(
      S.generateScale(S.mixoydian, T.Note.G).map((x) => T.Note[x])
    ).toEqual(["G", "A", "B", "C", "D", "E", "F"]);
  });

  test("A aeolian", () => {
    expect(S.generateScale(S.aeolian, T.Note.A).map((x) => T.Note[x])).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
    ]);
  });

  test("B locrian", () => {
    expect(S.generateScale(S.locrian, T.Note.B).map((x) => T.Note[x])).toEqual([
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "A",
    ]);
  });

  test("Eb Major", () => {
    expect(
      S.generateScale(S.major, (T.NoteFlat.Eb as number) as T.Note).map(
        (x) => T.NoteFlat[x]
      )
    ).toEqual(["Eb", "F", "G", "Ab", "Bb", "C", "D"]);
  });

  test("C# Major", () => {
    expect(
      S.generateScale(S.major, T.Note.Cs).map((x) => T.NoteSharp[x])
    ).toEqual(["Cs", "Ds", "Es", "Fs", "Gs", "As", "Bs"]);
  });
});
