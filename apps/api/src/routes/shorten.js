import { Router } from "express";
import { createURL, redirectURL } from "../controllers/storen.js";

const routes = Router();

routes.post("/shorten", createURL);
routes.get("/:shortCode", redirectURL);

export default routes;
