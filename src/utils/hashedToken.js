import argon2 from "argon2";

const hashToken = async (property) => {
  const hash = await argon2.hash(property);
  return hash;
};
export default hashToken;
