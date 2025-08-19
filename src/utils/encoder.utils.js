import bcrypt from "bcryptjs";

const encoder = async (texto) => {
  const hash = await bcrypt.hash(texto, 10);
  return hash;
}

const verify = async (texto, hash) => {
  const isValid = await bcrypt.compare(texto, hash);
  return isValid;
}

export const cod = {
  encoder,
  verify
};
