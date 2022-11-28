import express, { urlencoded, json } from "express"
const app = express()
const port = 4000
import cors from "cors"

// npm init
// npm i express cors nodemon
// they add a handy req.body object to our req,
// containing a Javascript
//  object representing the payload sent with the request

app.use(urlencoded({ extended: true }))
app.use(json())
app.use(cors())

app.get("/", cors(), async (req, res) => {
	res.send("This is working")
})
app.get("/home", cors(), async (req, res) => {
	res.send("This is the data for the home page")
})

app.post("/post_name", async (req, res) => {
	let { name } = req.body
	console.log(name)
})
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})