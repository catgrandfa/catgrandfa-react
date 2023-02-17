import crypto from "crypto";

const algorithm = "aes-256-ctr";
const secretKey = "WwTBrRUReyicvWI598YshYkwSmo4DFQD";
const iv = crypto.randomBytes(16);

const encrypt = (text: string) => {
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return { iv: iv.toString("hex"), content: encrypted.toString("hex") };
};
const decrypt = (hash: any) => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    secretKey,
    Buffer.from(hash.iv, "hex")
  );

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(hash.content, "hex")),
    decipher.final(),
  ]);

  return decrypted.toString();
};

const randomBytes = (length: number) => {
  if (!Number.isFinite(length)) {
    throw new TypeError('Expected a finite number');
  }

  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

export { encrypt, decrypt, randomBytes };
