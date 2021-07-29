const express = require('express');
const router1 = express.Router();
const CompanyStock = require('../Models/CompanyStock');
const Company = require('../Models/Company');

//Entering Stock Details
router1.post('/CompanyStock',async function(req, res)
{
    await Company.findOne({_id:req.body.CompanyID})
    .then(async function(CompanyDetails)
    {
        console.log(CompanyDetails);
        const {CompanyReceiptNo, CompanyID, Gas_state, Regular_Prima, Regular_Kamakhya, Regular_Suvidha, Regular_Others,
            Leak_Prima, Leak_Kamakhya, Leak_Suvidha, Leak_Others,
            Sold_Prima, Sold_Kamakhya, Sold_Suvidha, Sold_Others,
            SendOrReceive, Amount, Remarks, Entryby} = req.body
    
        const data = new CompanyStock({
            CompanyReceiptNo:CompanyReceiptNo,
            CompanyID:CompanyID,
            Gas_state:Gas_state,
            Regular_Prima:Regular_Prima,
            Regular_Kamakhya:Regular_Kamakhya,
            Regular_Suvidha:Regular_Suvidha,
            Regular_Others:Regular_Others,
            Leak_Prima:Leak_Prima,
            Leak_Kamakhya:Leak_Kamakhya,
            Leak_Suvidha:Leak_Suvidha,
            Leak_Others:Leak_Others,
            Sold_Prima:Sold_Prima,
            Sold_Kamakhya:Sold_Kamakhya,
            Sold_Suvidha:Sold_Suvidha,
            Sold_Others:Sold_Others,
            SendOrReceive:SendOrReceive,
            Amount:Amount,
            Remarks:Remarks,
            Entryby:Entryby
        })
        
        const stockInfo = await data.save()
        console.log(stockInfo);

        if(!stockInfo)
        {
            res.status(201).json({
                success:false,
                message:"Please fill all required information."
            })
        }
        res.status(200).json({
            success:true,
            message: "Data entered in Stock.",
            companyDetails:CompanyDetails,
            info:stockInfo
        })
    })
    .catch(function(e)
    {
        res.status(500).json({error:e})
    });
});

//Show all Company Stock list
router1.get('/companyStockList', async function(req,res)
{
    await CompanyStock.find()
    .then(function(result)
    {
        console.log(result);
        if(!result)
        {
            res.status(201).json({
                success:false,
                message:"There is no data in Company Stock."
            })
        }
        res.status(200).json({
            success:true,
            message:"Company Stock List: ",
            data:result
        })
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
})


//Show stock of related company
router1.get('/companyStockList/:id', async function(req,res)
{
    const id = req.params.id

    await CompanyStock.findOne({_id:id})
    .then(function(result)
    {
        console.log(result);
        res.status(200).json({
            success:true,
            message:"Details of stock of Company having ID " + result.CompanyID,
            data:result
        })
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
})

//Updating Stock of Related Company
router1.put('/companyStockList/update/:id', async function(req,res)
{
    const id = req.params.id

    const {CompanyReceiptNo, Gas_state, Regular_Prima, Regular_Kamakhya, Regular_Suvidha, Regular_Others,
        Leak_Prima, Leak_Kamakhya, Leak_Suvidha, Leak_Others,
        Sold_Prima, Sold_Kamakhya, Sold_Suvidha, Sold_Others,
        SendOrReceive, Amount, Remarks, Entryby} = req.body

    await CompanyStock.findOneAndUpdate({_id:id},
        {
            CompanyReceiptNo:CompanyReceiptNo,
            Gas_state:Gas_state,
            Regular_Prima:Regular_Prima,
            Regular_Kamakhya:Regular_Kamakhya,
            Regular_Suvidha:Regular_Suvidha,
            Regular_Others:Regular_Others,
            Leak_Prima:Leak_Prima,
            Leak_Kamakhya:Leak_Kamakhya,
            Leak_Suvidha:Leak_Suvidha,
            Leak_Others:Leak_Others,
            Sold_Prima:Sold_Prima,
            Sold_Kamakhya:Sold_Kamakhya,
            Sold_Suvidha:Sold_Suvidha,
            Sold_Others:Sold_Others,
            SendOrReceive:SendOrReceive,
            Amount:Amount,
            Remarks:Remarks,
            Entryby:Entryby
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
            message: "Stock Details Updated.", 
            success:true,
            data:result
        });
    })
})

module.exports = router1;