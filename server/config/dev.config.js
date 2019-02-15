module.exports={
    user:{
        username:'Bonnie',
        password:'1',
        login_time:new Date(),
        login_area:'四川成都'
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