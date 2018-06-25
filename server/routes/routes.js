const express =require('express');
const router=express.Router();
const axios=require('axios');
const PostAPI='http://localhost:3000/api/ZoneMsts'
const divisionApi='http://localhost:3000/api/DivisionMsts'
var mysql = require('mysql');
var path=require('path');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "brsh1091",
    database: "mydb"
  });
router.get('/',(req,res)=>{
    res.send('it works');
})

// //GET POST 
// router.get('/zones',(req,res)=>{
//     axios.get(`${PostAPI}`).then(zones=>{
//         res.status(200).json(zones.data);
//     })
//     .catch(error=>{
//         res.status(500).send(error);
//     })
// })
// router.get('/divisions',(req,res)=>{
//     axios.get(`${divisionApi}`).then(divisions=>{
//         res.status(200).json(divisions.data);
//     })
//     .catch(error=>{
//         res.status(500).send(error);
//     })
// })


// router.post('/register',(req,res)=>{
//     var name=req.body.name;
//     con.connect(function(err) {
//         if (err){
//             console.log('error occured')
//         };
//         console.log("Connected!");
//         var sql = "INSERT INTO medicalStaff (name, address) VALUES ?";
//         var values=[
//             [name,'highway']
//         ];
//         //
//         con.query(sql,[values], function (err, result) {
//           if (err) throw err;
//           console.log("1 record inserted");
//         });
//       });   
// })

router.get('/getperson/:email',(req,res)=>{
    var mail=req.params.email;
    console.log(mail);
    var sql='SELECT * FROM People WHERE emailid = ?';
    con.query(sql,[mail], function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
    });
});

router.post('/addperson',(req,res)=>{
    var email=req.body.email;
    var pass=req.body.pass;
    var name=req.body.name;
    var sql="INSERT INTO People (emailid, password, username) VALUES ?";
    var values=[
        [email,pass,name]
    ]
    con.query(sql,[values],function(err,result){
        if(err){
            throw err;
        }else{
            console.log("1 record insert !");
        }
    })
})

router.put('/updateperson/:mail/:pass',(req,res)=>{
    var email=req.params.mail;
    var pass=req.params.pass;
    var sql = "UPDATE People SET password =? WHERE  emailid ="+mysql.escape(email);
    var values=[
        [pass]
    ]
    con.query(sql,[values], function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
    res.redirect('/');
})



module.exports=router;