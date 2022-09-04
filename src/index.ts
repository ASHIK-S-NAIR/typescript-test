import express,{Request, Response} from 'express';
const app  = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Mohammed Rahis")
})

app.listen("3001", (): void => {
    console.log("Server running");
})