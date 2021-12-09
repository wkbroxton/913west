require('dotenv').config();
require('./config/database');

const User = require('./models/user');

// IIFE - Immediately Invoked Function Expression
(async function() {
await User.create([
  { name: 'Adam', 
    email: 'am@gmail.com', 
    isAdmin: true, 
    password: 'password'
  },
{ 
    name: 'Chijioke', 
    email: 'co@gmail.com', 
    isAdmin: true, 
    password: 'password',
},
{ 
    name: 'Ian', 
    email: 'ic@gmail.com', 
    isAdmin: true, 
    password: 'password',
},
{ 
    name: 'Jesus', 
    email: 'jp@gmail.com', 
    isAdmin: true, 
    password: 'password',
},
{ 
    name: 'Jonathan', 
    email: 'jpl@gmail.com', 
    isAdmin: true, 
    password: 'password',
},
{ 
    name: 'Mohamed', 
    email: 'mo@gmail.com', 
    isAdmin: true, 
    password: 'password',
},
{ 
    name: 'Paolo', 
    email: 'pa@gmail.com', 
    isAdmin: true, 
    password: 'password',
},
{ 
    name: 'Rajkamal', 
    email: 'rs@gmail.com', 
    isAdmin: true, 
    password: 'password',
},
{ 
    name: 'Ripley', 
    email: 'rm@gmail.com', 
    isAdmin: true, 
    password: 'password',
},
{ 
    name: 'Tavi', 
    email: 'ts@gmail.com', 
    isAdmin: true, 
    password: 'password',
},
{ 
    name: 'Will', 
    email: 'wkb@gmail.com', 
    isAdmin: true, 
    password: 'B123B321',
},
{ 
    name: 'Xinyi', 
    email: 'xl@gmail.com', 
    isAdmin: true, 
    password: 'password',
}]);

process.exit();
})();