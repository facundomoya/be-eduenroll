import bcrypt from "bcryptjs";

const encoder = async (text) => {
  const hash = await bcrypt.hash(text, 10);
  return hash;
}

const verify = async (text, hash) => {
  const isValid = await bcrypt.compare(text, hash);
  return isValid;
}

export const cod = {
  encoder,
  verify
};
