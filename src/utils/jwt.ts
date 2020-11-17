
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

const jwtSecret =  "@QEGTUI";
const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  //Get the jwt token from the head
  const token = <string>req.headers["auth"];
  let jwtPayload;
  
  //Try to validate the token and get data
  try {
    jwtPayload = <any>jwt.verify(token, jwtSecret);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    res.status(401).send();
    return;
  }

  res.setHeader("token", token);

  //Call the next middleware or controller
  next();
};

export default checkJwt;