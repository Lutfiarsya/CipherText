export const ALPHABET_SIZE = 26;
export const MIN_KEY = 0;
export const MAX_KEY = 25;

/** Contoh default yang ditampilkan sebelum pengguna mengisi input. */
export const EXAMPLE = {
  plaintext: "HELLO",
  key: 3,
  ciphertext: "KHOOR",
};

const A_CODE = 65;

const shiftChar = (char, shift) => {
  if (char < "A" || char > "Z") return char;

  const index = char.charCodeAt(0) - A_CODE;
  const shifted =
    (((index + shift) % ALPHABET_SIZE) + ALPHABET_SIZE) % ALPHABET_SIZE;

  return String.fromCharCode(shifted + A_CODE);
};

const shiftText = (text, shift) =>
  [...text.toUpperCase()].map((char) => shiftChar(char, shift)).join("");

export const caesarEncrypt = (text, key) => shiftText(text, key);

export const caesarDecrypt = (text, key) => shiftText(text, -key);

/** Coba seluruh key 0-25 pada ciphertext. */
export const bruteForceCaesar = (ciphertext) =>
  Array.from({ length: ALPHABET_SIZE }, (_, key) => ({
    key,
    text: caesarDecrypt(ciphertext, key),
  }));

export const isValidKey = (key) =>
  Number.isInteger(key) && key >= MIN_KEY && key <= MAX_KEY;

/** Ubah nilai input key (string) menjadi angka. String kosong dianggap tidak valid. */
export const parseKey = (raw) => (raw === "" ? NaN : Number(raw));

/**
 * Langkah per karakter untuk visualisasi (hanya huruf A-Z).
 * Mengembalikan [] jika key tidak valid atau tidak ada huruf.
 */
export const getCharacterSteps = (text, key, mode, limit = 5) => {
  if (!isValidKey(key)) return [];

  const shift = mode === "encrypt" ? key : -key;

  return [...text.toUpperCase()]
    .filter((char) => char >= "A" && char <= "Z")
    .slice(0, limit)
    .map((char) => {
      const shifted = shiftChar(char, shift);

      return {
        char,
        ascii: char.charCodeAt(0),
        shifted,
        shiftedAscii: shifted.charCodeAt(0),
      };
    });
};

export const EXAMPLE_STEPS = {
  encrypt: getCharacterSteps(EXAMPLE.plaintext, EXAMPLE.key, "encrypt"),
  decrypt: getCharacterSteps(EXAMPLE.ciphertext, EXAMPLE.key, "decrypt"),
};
