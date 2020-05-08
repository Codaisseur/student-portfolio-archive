const express = require("express");
const cors = require("cors");
const materialRouter = require("./material/router");
const genreRouter = require("./genre/router");
const artFormRouter = require("./artForm/router");
const artistRouter = require("./artist/router");
const artworkRouter = require("./artwork/router");
const authRouter = require("./authorization/router");

const port = process.env.PORT || 4000;
const app = express();
const corsMW = cors();
const parserMW = express.json();

app.use(corsMW);
app.use(parserMW);
app.use(materialRouter);
app.use(genreRouter);
app.use(artFormRouter);
app.use(artistRouter);
app.use(artworkRouter);
app.use(authRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
