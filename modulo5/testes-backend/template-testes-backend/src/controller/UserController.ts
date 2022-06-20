import { Request, Response } from "express";
import userBusiness from "../business/UserBusiness";
import { User } from "../model/User";

export class UserController {

   public async signup(req: Request, res: Response) {
      try {
         const { name, role, email, password } = req.body
         const result = await userBusiness.signup(
            name,
            email,
            password,
            role
         );
         res.status(200).send(result);
      } catch (error:any) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const result = await userBusiness.login(email, password);
         res.status(200).send(result);
      } catch (error:any) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }
   public async getUserById(
      req:Request,
      res:Response
   ) {
      try {
         const id:string = req.params.id
         const authorization:string = req.headers.authorization as string

         const result = await userBusiness.getUserById(id, authorization)

         res.status(200).send(result)
      } catch (error:any) {
         res.status(400).send(error.sqlMessage || error.message)
      }
   }
}

export default new UserController()