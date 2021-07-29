const express = require('express');
const router1 = express.Router();
const ResellerStock = require('../Models/ResellerStock');
const Reseller = require('../Models/Reseller');

//Entering Stock Details
router1.post('/resellerStock',async function(req, res)
{
    await Reseller.findOne({_id:req.body.ResellerID})
    .then(async function(ResellerDetails)
    {
        console.log(ResellerDetails);
        const {ResellerReceiptNo, ResellerID, Gas_state, Regular_Prima, Regular_Kamakhya, Regular_Suvidha, Regular_Others,
            Leak_Prima, Leak_Kamakhya, Leak_Suvidha, Leak_Others,
            Sold_Prima, Sold_Kamakhya, Sold_Suvidha, Sold_Others,
            SendOrReceive, Amount, Remarks, Entryby} = req.body
    
        const data = new ResellerStock({
            ResellerReceiptNo:ResellerReceiptNo,
            ResellerID:ResellerID,
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
            resellerDetails:ResellerDetails,
            info:stockInfo
        })
    })
    .catch(function(e)
    {
        res.status(500).json({error:e})
    });
});

//Show all Reseller Stock list
router1.get('/resellerStockList', async function(req,res)
{
    await ResellerStock.find()
    .then(function(result)
    {
        console.log(result);
        if(!result)
        {
            res.status(201).json({
                success:false,
                message:"There is no data in Reseller Stock."
            })
        }
        res.status(200).json({
            success:true,
            message:"Reseller Stock List: ",
            data:result
        })
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
})


//Show stock of related reseller
router1.get('/resellerStockList/:id', async function(req,res)
{
    const id = req.params.id
    
    await ResellerStock.findOne({_id:id})
    .then(function(result)
    {
        console.log(result);
        res.status(200).json({
            success:true,
            message:"Details of stock of Reseller having ID " + result.ResellerID,
            data:result
        })
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })
})

//Updating Stock of Related Company
router1.put('/resellerStockList/update/:id', async function(req,res)
{
    const id = req.params.id

    const {ResellerReceiptNo, Gas_state, Regular_Prima, Regular_Kamakhya, Regular_Suvidha, Regular_Others,
        Leak_Prima, Leak_Kamakhya, Leak_Suvidha, Leak_Others,
        Sold_Prima, Sold_Kamakhya, Sold_Suvidha, Sold_Others,
        SendOrReceive, Amount, Remarks, Entryby} = req.body

    await ResellerStock.findOneAndUpdate({_id:id},
        {
            ResellerReceiptNo:ResellerReceiptNo,
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