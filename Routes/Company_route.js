const express = require('express');
const router1 = express.Router();
const Company = require('../Models/Company');


//Adding New Company
router1.post('/newCompany', async function(req,res)
{
    const {company_fullname, cylinder_name, address, phone_number} = req.body

    const alreadyExist = await Company.findOne({company_fullname : company_fullname})
    if(alreadyExist)
    {
        return res.status(500).json({
            success:false, 
            message: "Company Already Exist."})
    }

    const data = new Company({
        company_fullname : company_fullname,
        cylinder_name : cylinder_name,
        address : address,
        phone_number : phone_number
    });

    const companyinfo = await data.save();
    console.log(companyinfo);
    if(!companyinfo)
    {
        return res.status(500).json({
            success:false, 
            message:"Please fill all required information."});
    }

    res.status(200).json({
        message:"New company " + company_fullname + " added successfully. ", 
        success:true, 
        company:companyinfo});
});


//Showing list of Companies
router1.get('/companyList',async function(req,res)
{
    await Company.find()
    .then(function(result)
    {
        console.log(result);
        if(!result)
        {
            res.status(500).json({
                success:false, 
                message:"There are no any companies registered."})
        };
        res.status(200).json({
            success:true, 
            message:"List of Registered Comapnies: ", 
            data:result});
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
});


//Showing Company Details
router1.get('/companyList/:id', async function(req,res)
{
    const id = req.params.id;
    await Company.findOne({_id : id})
    .then(function(result)
    {
        console.log(result);
        res.status(200).json({
            success:true, 
            message:"Details of " + result.company_fullname, 
            info:result});
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
});

//Update Company Details
router1.put('/company/update/:id', async function(req,res)
{
    const id = req.params.id
    const {company_fullname, cylinder_name, address, phone_number} = req.body

    await Company.findOneAndUpdate({_id:id},
        {company_fullname:company_fullname, 
            cylinder_name:cylinder_name, 
            address:address, 
            phone_number:phone_number})

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
            message: "Company Details Updated..", 
            success:true,
            status:result
        });
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    });
})

//Update Company Active or inactive
router1.put('/company/isactivetoggle/:id', async function(req,res)
{
    const id = req.params.id
    console.log(id)
    await Company.findOne({_id : id})
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
            Company.findOneAndUpdate({_id:id},
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
                        message: "Company " + result.company_fullname + " is inactive now", 
                        success:true,
                        isActive:false
                    });
                })
        }else{
            Company.findOneAndUpdate({_id:id},
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
                    message: "Company " + result.company_fullname + " is active now", 
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