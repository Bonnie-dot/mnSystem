module.exports={
    user:{
        username:'Bonnie',
        password:'1',
        login_time:Date.now(),
    },
    mongodb:{
        host:'localhost',
        prot:'27017',
        database:'cms'
    },
    jwt: {
        secret: 'Bonnie',
        expiresIn:60*60,
    },
}