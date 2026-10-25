const express = require('express');
// nosemgrep: javascript.express.security.audit.express-check-csurf-middleware-usage.express-check-csurf-middleware-usage
// Justificación: la app solo expone rutas GET sin sesiones ni cookies; CSRF no aplica.
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('MinicoDevelopers - App segura');
});

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
