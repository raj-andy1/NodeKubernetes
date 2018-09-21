const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;

let userRouter = express.Router()

userRouter.get('*', (req, res) => {
	res.status(200).json({hello: 'Andy, How are you?'})
});

app.use(userRouter)

app.listen(PORT, () => {
	console.log('Hello PuppetConf')
});
