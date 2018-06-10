import path from 'path';
import express from 'express';
const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get("*", (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(3000, () => console.log('Listening to port 3000'));
