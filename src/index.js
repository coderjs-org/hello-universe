const members = [{
        name: "Haidar",
        email: "haidar@impactbyte.com",
        phone: "+62-8-1993-101010",
        github: "mhaidarh"
    },
    {
        name: "Joko",
        email: "joko@impactbyte.com",
        phone: "+62-8-1234-5678",
        github: "jokorezky"
    }
]

const viewMembers = () => {
    members.forEach(member => {
        console.log(`Hello ${member.name} (@${member.github})!`);
    })
}

const addMember = ({
    name,
    email,
    phone,
    github
}) => {
    members.push({
        name,
        email,
        phone,
        github
    })
}

addMember({
    name: "Kucing",
    email: "kucing@cats.com",
    phone: "+62-8-10101010",
    github: "kucingkucing"
})
viewMembers()