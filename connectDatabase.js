const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:123@ds253889.mlab.com:53889/server1813')
.then(() => console.log('Database connected.'))
.catch(error => {
    console.log(error);
    process.exit(1);
});
