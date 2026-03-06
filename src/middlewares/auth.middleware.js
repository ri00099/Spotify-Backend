const jwt = require("jsonwebtoken");

async function adminAuth(req, res, next) {
  const { token } = req.cookies;
  if (!token) {
    res.status(401).json({
      message: "Unauthrized access, please log in",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role != "artist") {
      res.status(403).json({
        message: "You do not have access to create an album",
      });
    }

    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    res.status(403).json({
      message: "You do not have access to create an album",
    });
  }
}
async function userAuth(req, res, next) {
  const { token } = req.cookies;
  if (!token) {
    res.status(401).json({
      message: "Unauthrized access, please log in",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role != "artist" && decoded.role != "user") {
      res.status(403).json({
        message: "You do not have access",
      });
    }

    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    res.status(403).json({
      message: "You do not have access to create an album",
    });
  }
}


module.exports = { adminAuth, userAuth };
