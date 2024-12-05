import express, {Request, Response} from 'express';

export const epLogin = express.Router();
const postAddress = "/api/public/login"


epLogin.route('/auth/')
  .get(async (req: Request, res: Response) => {
    res.send("Home Page!!!");
  })


epLogin.route('/auth/login')
  .get(async (req, res, next) => {
    res.send(`
      <h1>Sign in</h1>
      <form action="${postAddress}" method="post">
        <section>
          <label for="username">Username</label>
          <input id="username" name="username" type="text" autocomplete="username" required autofocus>
        </section>
        <section>
          <label for="current-password">Password</label>
          <input id="current-password" name="password" type="password" autocomplete="current-password" required>
        </section>
        <button type="submit">Sign in</button>
      </form>  
    `)
  })
  .post(async (req: Request, res: Response) => {
    res.json("You are logged in!!!")
  })

  
epLogin.route('/auth/login')
  .get(async (req: Request, res: Response) => {
    res.send({ user: req.user})
  })
