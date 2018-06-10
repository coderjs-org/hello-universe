const bcrypt = require('bcrypt-promised');
const uuid = require('uuid/v4');

// Initalize default data
// There are at least 2 members in community

const members = [
    {
        id: uuid(),
        name: "Haidar Hanif",
        email: "haidar@impactbyte.com",
        phone: "+62-8-1993-101010",
        github_handle: "mhaidarh",
        admin: true,
        address: "Depok"
    },
    {
        id: uuid(),
        name: "Joko",
        email: "joko@impactbyte.com",
        phone: "+62-8-1234-5678",
        github: "jokorezky",
        admin: true,
        address: "Batam"
    }
]

const viewMembers = (members) => {
   console.log(members);
}

const addMember = async ({
    name,
    email,
    phone,
    github,
    password
}) => {
    const hash = await encryptPassword(password)

    members.push({
        id: uuid(),
        name,
        email,
        phone,
        github,
        hash
    })
}

const encryptPassword = async (password) => {
    const saltRounds = 0;
    const hashed = bcrypt.hash(password, saltRounds).then(hash => {
        return hash
    });
    return hashed
}

addMember({
    name: "Kucing",
    email: "kucing@cats.com",
    phone: "+62-8-10101010",
    github: "kucingkucingmiaw",
    password: "rahasia123"
})

addMember({
    name: "Ayam",
    email: "ayam@chickens.com",
    phone: "+62-8-10101010",
    github: "ayamlapar",
    password: "rahasia456"
})

setTimeout(() => {
    viewMembers(members);
}, 1000);