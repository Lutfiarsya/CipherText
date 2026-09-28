import { caesarDecrypt, caesarEncrypt } from "@/src/lib/caesar";

export const testCases = [
  {
    id: 1,
    title: "Enkripsi Standar",
    description: "Menguji proses enkripsi Caesar Cipher.",
    mode: "encrypt",
    input: "HELLO",
    key: 3,
    expected: "KHOOR",
  },
  {
    id: 2,
    title: "Alphabet Wrap-Around",
    description: "Menguji pergeseran alfabet setelah huruf Z.",
    mode: "encrypt",
    input: "XYZ",
    key: 3,
    expected: "ABC",
  },
  {
    id: 3,
    title: "Dekripsi Standar",
    description: "Menguji proses dekripsi Caesar Cipher.",
    mode: "decrypt",
    input: "KHOOR ZRUOG",
    key: 3,
    expected: "HELLO WORLD",
  },
];

export const runTestCase = (test) => {
  const actual =
    test.mode === "encrypt"
      ? caesarEncrypt(test.input, test.key)
      : caesarDecrypt(test.input, test.key);

  return { actual, passed: actual === test.expected };
};
