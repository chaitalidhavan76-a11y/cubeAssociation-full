import jwt from "jsonwebtoken";
import Admin from "../models/admin.js";

export const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer "))
      return res.status(401).json({ msg: "No token, unauthorized" });

    token = token.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.admin = await Admin.findById(decoded.id).select("-password");

    if (!req.admin) return res.status(404).json({ msg: "Admin not found" });

    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};
