import { Route53Resolver } from "aws-sdk";
import { Router, Request, Response } from "express";
import { FeedRouter } from "./feed/routes/feed.router";
import { UserRouter } from "./users/routes/user.router";

const router: Router = Router();

router.use("/feed", FeedRouter);
router.use("/users", UserRouter);

router.get("/", async (req: Request, res: Response) => {
    res.send(`V0`);
});

router.get("/info", (req: Request, res: Response) => {
    res.send(process.env);
});
export const IndexRouter: Router = router;
