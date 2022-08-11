const route=require("express").Router();
const Sequelize = require("sequelize");
//creating connection
const sequelizeInstance = 
new Sequelize("mydb", "root", "root", {
  host: "localhost",
  dialect: "mysql", 
});
sequelizeInstance.authenticate().then((success)=>console.log("connection is established"))
.catch((error)=>console.log("error in connection"));

const ARTIST=sequelizeInstance.define("Artist_info",{
    id:
    {  type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
    First_name:
    {
        type:Sequelize.STRING
    },
    Last_name:
    {
        type:Sequelize.STRING
    },
    Art_genre:
    {
        type:Sequelize.STRING
    },
    Gender:
    {
        type:Sequelize.STRING
    },
    Address:
    {
        type:Sequelize.STRING
    },
    Phone_no:
    {
        type:Sequelize.STRING
    },
    Email:
    {
        type:Sequelize.STRING
    },
    Password:
    {
        type:Sequelize.STRING
    },
    Confirm_password:
    {
        type:Sequelize.STRING
    }
    

},{timestamps:false});


const USERS=sequelizeInstance.define("Users_info",{
    c_id:
    {  type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
    First_name:
    {
        type:Sequelize.STRING
    },
    Last_name:
    {
        type:Sequelize.STRING
    },
    Address:
    {
        type:Sequelize.STRING
    },
    Email:
    {
        type:Sequelize.STRING
    },
    Phone_no:
    {
        type:Sequelize.STRING
    },
    Gender:
    {
        type:Sequelize.STRING
    },
    Password:
    {
        type:Sequelize.STRING
    },
    Confirm_password:
    {
        type:Sequelize.STRING
    },
    

},{timestamps:false});

// USER.belongsToMany(COMMENTS, {
//     through: "USER_COMMMENTS",
//     as: "COMMMENTS",
//     foreignKey: "user_id",
//   });
//   COMMENTS.belongsToMany(USER, {
//     through: "USER_COMMMENTS",
//     as: "USER",
//     foreignKey: "c_id",
//   });

sequelizeInstance.sync();

// route.get('/home', (req, res)=> {
//     res.send('<html><body><h1>Hello From Node</h1></body></html>');
//     });
// user data api
route.post("/userReg",async (req, res)=> {
  const user = await USERS.create(req.body)
    
    .then((data)=>{res.send(data)})
    .catch((error)=>console.log(error));
});
// artist data api
route.post("/artistReg",async (req, res)=> {
  const artist = await ARTIST.create(req.body)
    
    .then((data)=>{res.send(data)})
    .catch((error)=>console.log(error));
});

// Check user Login
route.post("/usersignin",async (req, res)=> {
    const emailid=req.body.email
    const pass=req.body.password
    const user = await USERS.findOne({where:{email:emailid}})
    if(user.Email===emailid && user.Password===pass)
    {
        res.send("Email password matches..!")
    }
    else{
        res.send("No matches found..!")
    }
  });


route.get("/:name", (req, res)=> {
    USERS.findAll({where:{name:req.params.name}}).then((data)=>{res.send(data)})
    .catch((error)=>console.log(error));
});

route.get("/byId/:id", (req, res)=> {
    USERS.findByPk(req.params.id).then((data)=>{res.send(data)})
    .catch((error)=>console.log(error));
});


route.put("/:id", (req, res)=> {
    USERS.update(req.body,{
        where: { id: req.params.id }}).then((data)=>{res.send(data)})
    .catch((error)=>console.log(error));
});

route.delete("/:id", (req, res)=> {
    USERS.destroy({where: { id: req.params.id }}).then((data)=>{res.send(data)})
    .catch((error)=>console.log(error));
});

route.get("/getUsers", (req, res)=> {
    sequelizeInstance.query("select * from user_infos"
    ,{type:sequelizeInstance.QueryTypes.SELECT}).then((response)=>{res.status(200).json(response)})
      .catch((error)=>console.log(error));
  });

    module.exports=route;