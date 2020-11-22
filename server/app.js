const express = require('express'),
      app = express();

app.use("/api/cards", require("./routes/cards.js"))
app.listen(3080,()=> console.log('Server listened on port 3080'))
