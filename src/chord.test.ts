import * as C from "./chord";
import * as S from "./scale";
import * as T from "./type";

describe("chord", () => {
  test("C major", () => {
    expect(S.generateScale(C.major, T.Note.C).map((x) => T.Note[x])).toEqual([
      "C",
      "E",
      "G",
    ]);
  });

  test("A minor", () => {
    expect(S.generateScale(C.minor, T.Note.A).map((x) => T.Note[x])).toEqual([
      "A",
      "C",
      "E",
    ]);
  });

  test("A sus2", () => {
    expect(S.generateScale(C.sus2, T.Note.A).map((x) => T.Note[x])).toEqual([
      "A",
      "B",
      "E",
    ]);
  });

  test("A sus4", () => {
    expect(S.generateScale(C.sus4, T.Note.A).map((x) => T.Note[x])).toEqual([
      "A",
      "D",
      "E",
    ]);
  });

  test("C maj7", () => {
    expect(S.generateScale(C.maj7, T.Note.C).map((x) => T.Note[x])).toEqual([
      "C",
      "E",
      "G",
      "B",
    ]);
  });

  test("G7", () => {
    expect(S.generateScale(C._7, T.Note.G).map((x) => T.Note[x])).toEqual([
      "G",
      "B",
      "D",
      "F",
    ]);
  });

  test("A minor 7", () => {
    expect(S.generateScale(C.min7, T.Note.A).map((x) => T.Note[x])).toEqual([
      "A",
      "C",
      "E",
      "G",
    ]);
  });

  test("A minor M7", () => {
    expect(S.generateScale(C.minMaj7, T.Note.A).map((x) => T.Note[x])).toEqual([
      "A",
      "C",
      "E",
      "Gs",
    ]);
  });

  test("A m7b5", () => {
    expect(
      S.generateScale(C.min7b5, T.Note.A).map((x) => T.NoteFlat[x])
    ).toEqual(["A", "C", "Eb", "G"]);
  });

  test("C6", () => {
    expect(S.generateScale(C._6, T.Note.C).map((x) => T.Note[x])).toEqual([
      "C",
      "E",
      "G",
      "A",
    ]);
  });

  test("Am6", () => {
    expect(S.generateScale(C.min6, T.Note.A).map((x) => T.Note[x])).toEqual([
      "A",
      "C",
      "E",
      "Fs",
    ]);
  });
});
