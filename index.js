const userRouter = require('./src/user-router')
const dotenv = require('dotenv');
const jsonParser = require('./framework/parsejson')
const Application = require('./framework/Application')
const parseUrl = require('./framework/parseUrl')
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = new Application ();

app.use(jsonParser)
app.use(parseUrl('http://localhost:5000'))


app.addRouter(userRouter);
app.listen(PORT, () => console.log(`Start on PORT ${PORT}`))

