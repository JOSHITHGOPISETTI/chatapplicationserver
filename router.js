const app = require('express');
const router = app.Router();
router.get('/', (req, res) => {
    res.send("Server is up and running");
});
module.exports = router;