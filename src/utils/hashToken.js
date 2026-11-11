import argon2 from "argon2";

const hashTokenGenerator = async (token) => {
  const hash = await argon2.hash(token);
  return hash;
};
export default hashTokenGenerator;
