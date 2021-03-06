import express from 'express';
import serveIndex from 'serve-index';

const app = express();
const port = +(process.env.PORT || 3000);
const publicDir = './public';
const frontDir = '../front/dist';

app.use((req, res, next) => {
  console.log('req.url', req.url);
  next();
});
app.use(express.static(frontDir));
app.use(express.static(publicDir));
app.use(serveIndex(publicDir, {icons: true}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
