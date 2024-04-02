import jwt from "jsonwebtoken"

const verifyToken = async (req: any, res: any, next: any) => {
  const { authorization } = req.headers;
  const secret: string = process.env.JWT_SECRET || ""
  if (!authorization) {
    return res.status(401).json({
        error: "You are not authorized"
    });
  }
  const token = authorization.split(' ')[1];
  try {
    const decoded = await jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
        error: "You are not authorized"
    });
  }
};

export default verifyToken