import jwt from "jsonwebtoken"

const secret: string = process.env.JWT_SECRET || ""
const generateToken = ({ _id, name, email }:{_id: string,name: string, email: string }) => {
try {
  const token = jwt.sign({
      _id,
      name,
      email
  }, secret, {
      expiresIn: 60 * 60 * 24
  });
  return token;
} catch (error) {
  return error;
}
};

export default generateToken