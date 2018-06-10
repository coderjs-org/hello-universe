const bcrypt = require('bcrypt');

// Initalize default data
// There are at least 2 members in community

const members = [
    // {
    //     name: "Haidar Hanif",
    //     email: "haidar@impactbyte.com",
    //     phone: "+62-8-1993-101010",
    //     github_handle: "mhaidarh",
    //     admin: true,
    //     address: "Depok"
    // },
    // {
    //     name: "Joko",
    //     email: "joko@impactbyte.com",
    //     phone: "+62-8-1234-5678",
    //     github: "jokorezky",
    //     admin: true,
    //     address: "Batam"
    // }
]

const viewMembers = () => {
    members.forEach(member => {
        console.log(member.name, member.password);
        // console.log(`Hello ${member.name} (@${member.github})! Phone: ${member.phone}`);
    })
}

const addMember = ({
    name,
    email,
    phone,
    github,
    password
}) => {
    encryptPassword(password, function(hash) {
        console.log(`hash of ${name}:`, hash);

        members.push({
            name,
            email,
            phone,
            github,
            hash
        })
    })

   
}

const encryptPassword = (password, callback) => {
    const saltRounds = 0;

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            callback(hash)
        });
    });
}

addMember({
    name: "Kucing",
    email: "kucing@cats.com",
    phone: "+62-8-10101010",
    github: "kucingkucingmiaw",
    password: "rahasia123"
}, {
    name: "Ayam",
    email: "ayam@chickens.com",
    phone: "+62-8-10101010",
    github: "ayamlapar",
    password: "rahasia456"
})

viewMembers()