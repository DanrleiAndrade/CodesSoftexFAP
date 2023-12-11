import { Router, Request, Response } from "express";

class HomeRoutes {
    router = Router();

    constructor(){
        this.initializeRoutes();
    }

    initializeRoutes(){
        this.router.get("/", (req: Request, res: Response) => { return res.status(200).json("Olá mundo!")});
        this.router.get("/boasvindas", (req: Request, res: Response) => { return res.status(200).json("Bem vindo!")});
    }
}

export default new HomeRoutes().router;