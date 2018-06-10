const bcrypt = require('bcrypt');

const encryptPassword = () => {
    const saltRounds = 0;
    const password = 'samplePassword';

    bcrypt.genSalt(saltRounds, function(err, salt) {
        console.log("salt:", salt);
        
        bcrypt.hash(password, salt, function(err, hash) {
            console.log("hash:", hash);
        });
    });
}

encryptPassword()