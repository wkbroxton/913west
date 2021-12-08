require('dotenv').config();
require('./config/database');
const User = require('./models/user');
// IIFE - Immediately Invoked Function Expression
(async function() {
await User.create([{ 
    name: 'Admin', 
    email: 'william.k.broxton@gmail.com', 
    isClient: false, 
    password: 'B123B321',
}]);
  process.exit();
})();