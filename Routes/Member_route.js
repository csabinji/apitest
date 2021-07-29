const express = require('express');
const router2 = express.Router();
const Member = require('../Models/Member');
const bcryptjs = require('bcryptjs');
const authUser = require('../middleware/authUser');
const {check, validationResult} = require('express-validator');
const date = require('date-and-time');
const jwt = require('jsonwebtoken');

router2.post('/admin/profile/addMember',
//  authUser.verifyMember, authUser.verifyAdmin, 
 [
    check('Firstname', 'Enter First Name').not().isEmpty(),
    check('Lastname', 'Enter Last Name').not().isEmpty(),
    check('Status', 'Who are  you?').not().isEmpty(),
    check('Phonenumber', 'Enter your phonenumber').not().isEmpty(),
    check('Address', 'Enter your address').not().isEmpty(),
    check('Comission', 'What comission should be given?').not().isEmpty(),
],
async function(req,res)
{
    console.log(req.body)
    const errors = validationResult(req);

    if(errors.isEmpty())
    {
        const firstname = req.body.Firstname
        const lastname = req.body.Lastname



        const status = req.body.Status
        const phonenumber = req.body.Phonenumber
        const address = req.body.Address
        const comission = req.body.Comission

        const username = firstname + lastname 
        const password =  Math.floor(Math.random() * (100000000 - 10000000) + 10000000) + firstname
        const hpassword = await bcryptjs.hash(password, 10)

        const accountCreated = date.format(new Date(),date.compile('YYYY/MM/DD hh:mm:ss'));

        Member.findOne({ Username: username })
        .then(function (memberDetails) {
            if (memberDetails === null) {
                const data = new Member({Firstname : firstname, Lastname : lastname, Status : status, Phonenumber : phonenumber,
                    Address : address, Comission : comission, Username : username, Password : hpassword, isactive:true, accountCreated: accountCreated })
               data.save()
               .then(function(result)
               {
                   res.status(201).json({message: "Member Added successfully !!", success:true, username : username, password : password});
               })
               .catch(function(e)
               {
                   res.status(500).json({message: e, success: false})
               });
            }else{
                return res.status(201).json({ message: "Username already exist.", success: false })
            }
        })
        .catch(function(e){
            res.status(500).json({message: e, success: false})
        })
    }
    else
    {
        res.status(400).json(errors.array());
    }
})

router2.post('/login',[
    check('Username', 'Enter Username').not().isEmpty(),
    check('Password', 'Enter Password').not().isEmpty(),
],function(req,res)
{
    console.log(req.body.Username)
    Member.findOne({Username:req.body.Username})
    
    .then(function(memberDetails){
        
        console.log(memberDetails)
        if(memberDetails === null)
        {
            return res.status(201).json({message: "Unauthorised Member !!!", success: false})
        }
        bcryptjs.compare(req.body.Password, memberDetails.Password,function(err,cresult)
        {
            if(cresult == false)
            {
                return res.status(201).json({message: "Username or Password Incorrect.", success: false})
            }
            if(memberDetails.isfirst == true)
            {
                return res.status(201).json({message: "Please change your default password.", success: false})
            }
            const token = jwt.sign({MemberID : memberDetails._id}, 'secretkey')

            return res.status(200).json({message: "Login Success", token:token, status : memberDetails.Status, success:true})
            
            /* Member.updateOne({Username: req.body.Username})
            .then(async function(res)
            {
                await Member.updateOne({Username: req.body.Username},{$set:{isfirst:false}}, {new:true})
                
            })
            .catch(function(e){
                res.status(500).json({message: e})
            }) */
        })
    })
    .catch(function(e){
        res.status(500).json({message: e, success: false})
    })
})

router2.put('/changepassword', async function (req, res) {

    const username = req.body.Username
    const password = req.body.Password
    const Npassword = await bcryptjs.hash(req.body.Npassword, 10)

    Member.findOne({ Username: username })
        .then(function (memberDetails) {
            if (memberDetails === null) {
                return res.status(201).json({ message: "Invalid Username", success: false })
            }
            bcryptjs.compare(password, memberDetails.Password, function (err, result) {
                if (result === false) {
                    return res.status(201).json({ message: "Username or Password does not match.", success: false})
                }
                else
                {
                    Member.findOneAndUpdate({Username : username}, 
                        {Password : Npassword, isfirst:false})
                    .then(function(result){
                        res.status(200).json({success : true, message : "Password Changed."})
                    })
                    .catch(function(err){
                        res.status(500).json({message : err, success: false})
                    })
                }
            })
        })
        .catch()
})

//Showing list of Members
router2.get('/memberList',async function(req,res)
{
    await Member.find()
    .then(function(result)
    {
        console.log(result);
        if(!result)
        {
            res.status(500).json({
                success:false, 
                message:"There are no any members registered."})
        };
        res.status(200).json({
            success:true, 
            message:"List of Registered Members: ", 
            data:result});
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
});


//Showing Member Details
router2.get('/memberList/:id', async function(req,res)
{
    const id = req.params.id;
    await Member.findOne({_id : id})
    .then(function(result)
    {
        console.log(result);
        res.status(200).json({
            success:true, 
            message:"Details of " + result.Firstname, 
            info:result});
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
});


router2.put('/member/update/:id', async function(req,res)
{
    const id = req.params.id
    const firstname = req.body.Firstname
    const lastname = req.body.Lastname
    const status = req.body.Status
    const phonenumber = req.body.Phonenumber
    const address = req.body.Address
    const comission = req.body.Comission
    const username = req.body.Username
    const password = req.body.Password

    await Member.findOneAndUpdate({_id:id},{
        firstname:firstname,
        lastname:lastname,
        status:status,
        phonenumber:phonenumber,
        address:address,
        comission:comission,
        username:username,
        password:password
    })

    .then(function(result)
    {
        console.log(result);
        res.status(200).json({
            success:true,
            message:"Member Details Updated..",
            stats:result
        })
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
});

//Update Member Active or inactive
router2.put('/member/isactivetoggle/:id', async function(req,res)
{
    const id = req.params.id
    console.log(id)
    await Member.findOne({_id : id})
    .then(function(data){
        if(!data)
        {
            return res.status(500).json({
                success:false, 
                message:"Id didn't match"
            });
        }
        console.log(data);
        if(data.isActive == true){
            Member.findOneAndUpdate({_id:id},
                    {
                        isActive:false
                    })
            
                .then(function(result)
                {
                    if(!result)
                    {
                        return res.status(500).json({
                            success:false, 
                            message:"db error"
                        });
                    }
                    console.log(result);
                    res.status(200).json({
                        message: "Member " + result.Username + " is inactive now", 
                        success:true,
                        isActive:false
                    });
                })
        }else{
            Member.findOneAndUpdate({_id:id},
                {
                    isActive:true
                })
        
            .then(function(result)
            {
                if(!result)
                {
                    return res.status(500).json({
                        success:false, 
                        message:"db error"
                    });
                }
                console.log(result);
                res.status(200).json({
                    message: "Member " + result.username + " is active now", 
                    success:true,
                    isActive:true
                });
            })
        }
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
})

module.exports = router2;