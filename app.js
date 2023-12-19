const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('./util/path')

const app = express();
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',  adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // console.log("Page not found"); 
    res.status(404).sendFile(path.join(rootDir, 'views', 'PageNotFound.html'));
});

    
app.listen(5000);
 