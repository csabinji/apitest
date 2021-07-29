const express = require('express');
const router1 = express.Router();
const Reseller = require('../Models/Reseller');


//Adding New Reseller
router1.post('/newReseller', async function(req,res)
{
    const {reseller_fullname, pasal_name, address, phone_number, rateforReseller} = req.body

    const alreadyExist = await Reseller.findOne({reseller_fullname : reseller_fullname})
    if(alreadyExist)
    {
        return res.status(500).json({
            success:false, 
            message: "Reseller Already Exist."})
    }

    const data = new Reseller({
        reseller_fullname : reseller_fullname,
        pasal_name : pasal_name,
        address : address,
        phone_number : phone_number,
        rateforReseller:rateforReseller
    });

    const resellerinfo = await data.save();
    console.log(resellerinfo);
    if(!resellerinfo)
    {
        return res.status(500).json({
            success:false, 
            message:"Please fill all required information."});
    }

    res.status(200).json({
        message:"New reseller " + reseller_fullname + " added successfully. ", 
        success:true, 
        reseller:resellerinfo
    });
});


//Showing list of Reseller
router1.get('/resellerList',async function(req,res)
{
    await Reseller.find()
    .then(function(result)
    {
        console.log(result);
        if(!result)
        {
            res.status(201).json({
                success:false, 
                message:"There are no any reseller registered."})
        };
        res.status(200).json({
            success:true, 
            message:"List of Registered Reseller: ", 
            data:result});
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
});


//Showing Reseller Details
router1.get('/resellerList/:id', async function(req,res)
{
    const id = req.params.id;
    await Reseller.findOne({_id : id})
    .then(function(result)
    {
        console.log(result);
        res.status(200).json({
            success:true, 
            message:"Details of " + result.reseller_fullname, 
            info:result});
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
});

//Update Reseller Details
router1.put('/reseller/update/:id', async function(req,res)
{
    const id = req.params.id

    const {reseller_fullname, pasal_name, address, phone_number, rateforReseller} = req.body

    await Reseller.findOneAndUpdate({_id:id},
        {
            reseller_fullname:reseller_fullname, 
            pasal_name:pasal_name, 
            address:address, 
            phone_number:phone_number,
            rateforReseller:rateforReseller
        })

    .then(function(result)
    {
        if(!result)
        {
            return res.status(500).json({
                success:false, 
                message:"Please fill all required information."
            });
        }
        console.log(result);
        res.status(200).json({
            message: "Reseller " + result.reseller_fullname + " Details Updated..", 
            success:true,
            status:result
        });
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
})

//Update Reseller Active or inactive
router1.put('/reseller/isactivetoggle/:id', async function(req,res)
{
    const id = req.params.id
    console.log(id)
    await Reseller.findOne({_id : id})
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
            Reseller.findOneAndUpdate({_id:id},
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
                        message: "Reseller " + result.reseller_fullname + " is inactive now", 
                        success:true,
                        isActive:false
                    });
                })
        }else{
            Reseller.findOneAndUpdate({_id:id},
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
                    message: "Reseller " + result.reseller_fullname + " is active now", 
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

module.exports = router1;