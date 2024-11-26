import jwt from "jsonwebtoken";

export const verifytoken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).json({
        msg: "Access denied",
      });
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, "KartIsCoding");
    req.user = verified;
    next();
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
