const bcrypt = require("bcrypt-promised")

const saltRounds = 10
const myPlaintextPassword = "rahasia123"

bcrypt.hash(myPlaintextPassword, saltRounds).then(hash => {
    console.log(hash);
});

// bcrypt.compare(plaintextPassword, hash).then(password => {
//     console.log(password);
// }).catch(err => {
//     console.log(err);
// });

// bcrypt.getRounds(encrypted);