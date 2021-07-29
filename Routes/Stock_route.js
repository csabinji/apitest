const express = require('express');
const router = express.Router();
const ResellerStock = require('../Models/ResellerStock');
const CompanyStock = require('../Models/CompanyStock');


router.get('/stockDetails', async function(req,res)
{
    //For Full Cylinder (Reseller)
    var rFull_Prima_Send, rFull_Kamakhya_Send, rFull_Suvidha_Send, rFull_Others_Send;
    await ResellerStock.find({Gas_state:"Full" , SendOrReceive:"Send"})
    .then(function(result1aa)
    {
        for (i in result1aa)
        {
            rFull_Prima_Send = result1aa[i].Regular_Prima + result1aa[i].Leak_Prima + result1aa[i].Sold_Prima;
            rFull_Kamakhya_Send = result1aa[i].Regular_Kamakhya + result1aa[i].Leak_Kamakhya + result1aa[i].Sold_Kamakhya;
            rFull_Suvidha_Send = result1aa[i].Regular_Suvidha + result1aa[i].Leak_Suvidha + result1aa[i].Sold_Suvidha;
            rFull_Others_Send = result1aa[i].Regular_Others + result1aa[i].Leak_Others + result1aa[i].Sold_Others;
        }
        console.log("rPrima Full (Send): ", rFull_Prima_Send);
        console.log("rKamakhya Full (Send): ", rFull_Kamakhya_Send);
        console.log("rSuvidha Full (Send): ", rFull_Suvidha_Send);
        console.log("rOthers Full (Send): ", rFull_Others_Send);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    var rFull_Prima_Receive, rFull_Kamakhya_Receive, rFull_Suvidha_Receive, rFull_Others_Receive;
    await ResellerStock.find({Gas_state:"Full" , SendOrReceive:"Receive"})
    .then(function(result1ab)
    {
        for (i in result1ab)
        {
            rFull_Prima_Receive = result1ab[i].Regular_Prima + result1ab[i].Leak_Prima + result1ab[i].Sold_Prima;
            rFull_Kamakhya_Receive = result1ab[i].Regular_Kamakhya + result1ab[i].Leak_Kamakhya + result1ab[i].Sold_Kamakhya;
            rFull_Suvidha_Receive = result1ab[i].Regular_Suvidha + result1ab[i].Leak_Suvidha + result1ab[i].Sold_Suvidha;
            rFull_Others_Receive = result1ab[i].Regular_Others + result1ab[i].Leak_Others + result1ab[i].Sold_Others;
        }
        console.log("rPrima Full (Receive): ", rFull_Prima_Receive);
        console.log("rKamakhya Full (Receive): ", rFull_Kamakhya_Receive);
        console.log("rSuvidha Full (Receive): ", rFull_Suvidha_Receive);
        console.log("rOthers Full (Receive): ", rFull_Others_Receive);
        
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    // For Half Cylinder (Reseller)
    var rHalf_Prima_Send, rHalf_Kamakhya_Send, rHalf_Suvidha_Send, rHalf_Others_Send;
    await ResellerStock.find({Gas_state:"Half" , SendOrReceive:"Send"})
    .then(function(result1ba)
    {
        for (i in result1ba)
        {
            rHalf_Prima_Send = result1ba[i].Regular_Prima + result1ba[i].Leak_Prima + result1ba[i].Sold_Prima;
            rHalf_Kamakhya_Send = result1ba[i].Regular_Kamakhya + result1ba[i].Leak_Kamakhya + result1ba[i].Sold_Kamakhya;
            rHalf_Suvidha_Send = result1ba[i].Regular_Suvidha + result1ba[i].Leak_Suvidha + result1ba[i].Sold_Suvidha;
            rHalf_Others_Send = result1ba[i].Regular_Others + result1ba[i].Leak_Others + result1ba[i].Sold_Others;
        }
        console.log("rPrima Half (Send): ", rHalf_Prima_Send);
        console.log("rKamakhya Half (Send): ", rHalf_Kamakhya_Send);
        console.log("rSuvidha Half (Send): ", rHalf_Suvidha_Send);
        console.log("rOthers Half (Send): ", rHalf_Others_Send);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    var rHalf_Prima_Receive, rHalf_Kamakhya_Receive, rHalf_Suvidha_Receive, rHalf_Others_Receive;
    await ResellerStock.find({Gas_state:"Half" , SendOrReceive:"Receive"})
    .then(function(result1bb)
    {
        for (i in result1bb)
        {
            rHalf_Prima_Receive = result1bb[i].Regular_Prima + result1bb[i].Leak_Prima + result1bb[i].Sold_Prima;
            rHalf_Kamakhya_Receive = result1bb[i].Regular_Kamakhya + result1bb[i].Leak_Kamakhya + result1bb[i].Sold_Kamakhya;
            rHalf_Suvidha_Receive = result1bb[i].Regular_Suvidha + result1bb[i].Leak_Suvidha + result1bb[i].Sold_Suvidha;
            rHalf_Others_Receive = result1bb[i].Regular_Others + result1bb[i].Leak_Others + result1bb[i].Sold_Others;
        }
        console.log("rPrima Half (Receive): ", rHalf_Prima_Receive);
        console.log("rKamakhya Half (Receive): ", rHalf_Kamakhya_Receive);
        console.log("rSuvidha Half (Receive): ", rHalf_Suvidha_Receive);
        console.log("rOthers Half (Receive): ", rHalf_Others_Receive);
        
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    //For Empty Cylinder (Reseller)
    var rEmpty_Prima_Send, rEmpty_Kamakhya_Send, rEmpty_Suvidha_Send, rEmpty_Others_Send;
    await ResellerStock.find({Gas_state:"Empty" , SendOrReceive:"Send"})
    .then(function(result1ca)
    {
        for (i in result1ca)
        {
            rEmpty_Prima_Send = result1ca[i].Regular_Prima + result1ca[i].Leak_Prima + result1ca[i].Sold_Prima;
            rEmpty_Kamakhya_Send = result1ca[i].Regular_Kamakhya + result1ca[i].Leak_Kamakhya + result1ca[i].Sold_Kamakhya;
            rEmpty_Suvidha_Send = result1ca[i].Regular_Suvidha + result1ca[i].Leak_Suvidha + result1ca[i].Sold_Suvidha;
            rEmpty_Others_Send = result1ca[i].Regular_Others + result1ca[i].Leak_Others + result1ca[i].Sold_Others;
        }
        console.log("rPrima Empty (Send): ", rEmpty_Prima_Send);
        console.log("rKamakhya Empty (Send): ", rEmpty_Kamakhya_Send);
        console.log("rSuvidha Empty (Send): ", rEmpty_Suvidha_Send);
        console.log("rOthers Empty (Send): ", rEmpty_Others_Send);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    var rEmpty_Prima_Receive, rEmpty_Kamakhya_Receive, rEmpty_Suvidha_Receive, rEmpty_Others_Receive;
    await ResellerStock.find({Gas_state:"Empty" , SendOrReceive:"Receive"})
    .then(function(result1cb)
    {
        for (i in result1cb)
        {
            rEmpty_Prima_Receive = result1cb[i].Regular_Prima + result1cb[i].Leak_Prima + result1cb[i].Sold_Prima;
            rEmpty_Kamakhya_Receive = result1cb[i].Regular_Kamakhya + result1cb[i].Leak_Kamakhya + result1cb[i].Sold_Kamakhya;
            rEmpty_Suvidha_Receive = result1cb[i].Regular_Suvidha + result1cb[i].Leak_Suvidha + result1cb[i].Sold_Suvidha;
            rEmpty_Others_Receive = result1cb[i].Regular_Others + result1cb[i].Leak_Others + result1cb[i].Sold_Others;
        }
        console.log("rPrima Empty (Receive): ", rEmpty_Prima_Receive);
        console.log("rKamakhya Empty (Receive): ", rEmpty_Kamakhya_Receive);
        console.log("rSuvidha Empty (Receive): ", rEmpty_Suvidha_Receive);
        console.log("rOthers Empty (Receive): ", rEmpty_Others_Receive);
        
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    var rFull_Prima = rFull_Prima_Send - rFull_Prima_Receive;
    var rHalf_Prima = rHalf_Prima_Send - rHalf_Prima_Receive;
    var rEmpty_Prima = rEmpty_Prima_Send - rEmpty_Prima_Receive;
    
    var rFull_Kamakhya = rFull_Kamakhya_Send - rFull_Kamakhya_Receive;
    var rHalf_Kamakhya = rHalf_Kamakhya_Send - rHalf_Kamakhya_Receive;
    var rEmpty_Kamakhya = rEmpty_Kamakhya_Send - rEmpty_Kamakhya_Receive;

    var rFull_Suvidha = rFull_Suvidha_Send - rFull_Suvidha_Receive;
    var rHalf_Suvidha = rHalf_Suvidha_Send - rHalf_Suvidha_Receive;
    var rEmpty_Suvidha = rEmpty_Suvidha_Send - rEmpty_Suvidha_Receive;

    var rFull_Others = rFull_Others_Send - rFull_Others_Receive;
    var rHalf_Others = rHalf_Others_Send - rHalf_Others_Receive;
    var rEmpty_Others = rEmpty_Others_Send - rEmpty_Others_Receive;
    
    console.log("rFull_Prima Total", rFull_Prima);
    console.log("rHalf_Prima Total", rHalf_Prima);
    console.log("rEmpty_Prima Total", rEmpty_Prima);
    
    console.log("rFull_Kamakhya Total", rFull_Kamakhya);
    console.log("rHalf_Kamakhya Total", rHalf_Kamakhya);
    console.log("rEmpty_Kamakhya Total", rEmpty_Kamakhya);

    console.log("rFull_Suvidha Total", rFull_Suvidha);
    console.log("rHalf_Suvidha Total", rHalf_Suvidha);
    console.log("rEmpty_Suvidha Total", rEmpty_Suvidha);
    
    console.log("rFull_Others Total", rFull_Others);
    console.log("rHalf_Others Total", rHalf_Others);
    console.log("rEmpty_Others Total", rEmpty_Others);















    //For Full Cylinder (Company)
    var cFull_Prima_Send, cFull_Kamakhya_Send, cFull_Suvidha_Send, cFull_Others_Send;
    await CompanyStock.find({Gas_state:"Full" , SendOrReceive:"Send"})
    .then(function(result2aa)
    {
        for (i in result2aa)
        {
            cFull_Prima_Send = result2aa[i].Regular_Prima + result2aa[i].Leak_Prima + result2aa[i].Sold_Prima;
            cFull_Kamakhya_Send = result2aa[i].Regular_Kamakhya + result2aa[i].Leak_Kamakhya + result2aa[i].Sold_Kamakhya;
            cFull_Suvidha_Send = result2aa[i].Regular_Suvidha + result2aa[i].Leak_Suvidha + result2aa[i].Sold_Suvidha;
            cFull_Others_Send = result2aa[i].Regular_Others + result2aa[i].Leak_Others + result2aa[i].Sold_Others;
        }
        console.log("cPrima Full (Send): ", cFull_Prima_Send);
        console.log("cKamakhya Full (Send): ", cFull_Kamakhya_Send);
        console.log("cSuvidha Full (Send): ", cFull_Suvidha_Send);
        console.log("cOthers Full (Send): ", cFull_Others_Send);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    var cFull_Prima_Receive, cFull_Kamakhya_Receive, cFull_Suvidha_Receive, cFull_Others_Receive;
    await CompanyStock.find({Gas_state:"Full" , SendOrReceive:"Receive"})
    .then(function(result2ab)
    {
        for (i in result2ab)
        {
            cFull_Prima_Receive = result2ab[i].Regular_Prima + result2ab[i].Leak_Prima + result2ab[i].Sold_Prima;
            cFull_Kamakhya_Receive = result2ab[i].Regular_Kamakhya + result2ab[i].Leak_Kamakhya + result2ab[i].Sold_Kamakhya;
            cFull_Suvidha_Receive = result2ab[i].Regular_Suvidha + result2ab[i].Leak_Suvidha + result2ab[i].Sold_Suvidha;
            cFull_Others_Receive = result2ab[i].Regular_Others + result2ab[i].Leak_Others + result2ab[i].Sold_Others;
        }
        console.log("cPrima Full (Receive): ", cFull_Prima_Receive);
        console.log("cKamakhya Full (Receive): ", cFull_Kamakhya_Receive);
        console.log("cSuvidha Full (Receive): ", cFull_Suvidha_Receive);
        console.log("cOthers Full (Receive): ", cFull_Others_Receive);
        
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    
    // For Half Cylinder (Company)
    var cHalf_Prima_Send, cHalf_Kamakhya_Send, cHalf_Suvidha_Send, cHalf_Others_Send;
    await CompanyStock.find({Gas_state:"Half" , SendOrReceive:"Send"})
    .then(function(result2ba)
    {
        for (i in result2ba)
        {
            cHalf_Prima_Send = result2ba[i].Regular_Prima + result2ba[i].Leak_Prima + result2ba[i].Sold_Prima;
            cHalf_Kamakhya_Send = result2ba[i].Regular_Kamakhya + result2ba[i].Leak_Kamakhya + result2ba[i].Sold_Kamakhya;
            cHalf_Suvidha_Send = result2ba[i].Regular_Suvidha + result2ba[i].Leak_Suvidha + result2ba[i].Sold_Suvidha;
            cHalf_Others_Send = result2ba[i].Regular_Others + result2ba[i].Leak_Others + result2ba[i].Sold_Others;
        }
        console.log("cPrima Half (Send): ", cHalf_Prima_Send);
        console.log("cKamakhya Half (Send): ", cHalf_Kamakhya_Send);
        console.log("cSuvidha Half (Send): ", cHalf_Suvidha_Send);
        console.log("cOthers Half (Send): ", cHalf_Others_Send);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    var cHalf_Prima_Receive, cHalf_Kamakhya_Receive, cHalf_Suvidha_Receive, cHalf_Others_Receive;
    await CompanyStock.find({Gas_state:"Half" , SendOrReceive:"Receive"})
    .then(function(result2bb)
    {
        for (i in result2bb)
        {
            cHalf_Prima_Receive = result2bb[i].Regular_Prima + result2bb[i].Leak_Prima + result2bb[i].Sold_Prima;
            cHalf_Kamakhya_Receive = result2bb[i].Regular_Kamakhya + result2bb[i].Leak_Kamakhya + result2bb[i].Sold_Kamakhya;
            cHalf_Suvidha_Receive = result2bb[i].Regular_Suvidha + result2bb[i].Leak_Suvidha + result2bb[i].Sold_Suvidha;
            cHalf_Others_Receive = result2bb[i].Regular_Others + result2bb[i].Leak_Others + result2bb[i].Sold_Others;
        }
        console.log("cPrima Half (Receive): ", cHalf_Prima_Receive);
        console.log("cKamakhya Half (Receive): ", cHalf_Kamakhya_Receive);
        console.log("cSuvidha Half (Receive): ", cHalf_Suvidha_Receive);
        console.log("cOthers Half (Receive): ", cHalf_Others_Receive);
        
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    //For Empty Cylinder (Company)
    var cEmpty_Prima_Send, cEmpty_Kamakhya_Send, cEmpty_Suvidha_Send, cEmpty_Others_Send;
    await CompanyStock.find({Gas_state:"Empty" , SendOrReceive:"Send"})
    .then(function(result2ca)
    {
        for (i in result2ca)
        {
            cEmpty_Prima_Send = result2ca[i].Regular_Prima + result2ca[i].Leak_Prima + result2ca[i].Sold_Prima;
            cEmpty_Kamakhya_Send = result2ca[i].Regular_Kamakhya + result2ca[i].Leak_Kamakhya + result2ca[i].Sold_Kamakhya;
            cEmpty_Suvidha_Send = result2ca[i].Regular_Suvidha + result2ca[i].Leak_Suvidha + result2ca[i].Sold_Suvidha;
            cEmpty_Others_Send = result2ca[i].Regular_Others + result2ca[i].Leak_Others + result2ca[i].Sold_Others;
        }
        console.log("cPrima Empty (Send): ", cEmpty_Prima_Send);
        console.log("cKamakhya Empty (Send): ", cEmpty_Kamakhya_Send);
        console.log("cSuvidha Empty (Send): ", cEmpty_Suvidha_Send);
        console.log("cOthers Empty (Send): ", cEmpty_Others_Send);
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    var cEmpty_Prima_Receive, cEmpty_Kamakhya_Receive, cEmpty_Suvidha_Receive, cEmpty_Others_Receive;
    await CompanyStock.find({Gas_state:"Empty" , SendOrReceive:"Receive"})
    .then(function(result2cb)
    {
        for (i in result2cb)
        {
            cEmpty_Prima_Receive = result2cb[i].Regular_Prima + result2cb[i].Leak_Prima + result2cb[i].Sold_Prima;
            cEmpty_Kamakhya_Receive = result2cb[i].Regular_Kamakhya + result2cb[i].Leak_Kamakhya + result2cb[i].Sold_Kamakhya;
            cEmpty_Suvidha_Receive = result2cb[i].Regular_Suvidha + result2cb[i].Leak_Suvidha + result2cb[i].Sold_Suvidha;
            cEmpty_Others_Receive = result2cb[i].Regular_Others + result2cb[i].Leak_Others + result2cb[i].Sold_Others;
        }
        console.log("cPrima Empty (Receive): ", cEmpty_Prima_Receive);
        console.log("cKamakhya Empty (Receive): ", cEmpty_Kamakhya_Receive);
        console.log("cSuvidha Empty (Receive): ", cEmpty_Suvidha_Receive);
        console.log("cOthers Empty (Receive): ", cEmpty_Others_Receive);
        
    })
    .catch(function(e)
    {
        res.status(500).json({error:e});
    })

    var cFull_Prima = cFull_Prima_Receive - cFull_Prima_Send;
    var cHalf_Prima = cHalf_Prima_Receive - cHalf_Prima_Send;
    var cEmpty_Prima = cEmpty_Prima_Receive - cEmpty_Prima_Send;
    
    var cFull_Kamakhya = cFull_Kamakhya_Receive - cFull_Kamakhya_Send;
    var cHalf_Kamakhya = cHalf_Kamakhya_Receive - cHalf_Kamakhya_Send;
    var cEmpty_Kamakhya = cEmpty_Kamakhya_Receive - cEmpty_Kamakhya_Send;

    var cFull_Suvidha = cFull_Suvidha_Receive - cFull_Suvidha_Send;
    var cHalf_Suvidha = cHalf_Suvidha_Receive - cHalf_Suvidha_Send;
    var cEmpty_Suvidha = cEmpty_Suvidha_Receive - cEmpty_Suvidha_Send;

    var cFull_Others = cFull_Others_Receive - cFull_Others_Send;
    var cHalf_Others = cHalf_Others_Receive - cHalf_Others_Send;
    var cEmpty_Others = cEmpty_Others_Receive - cEmpty_Others_Send;
    
    console.log("cFull_Prima Total", cFull_Prima);
    console.log("cFull_Prima Total", cHalf_Prima);
    console.log("cFull_Prima Total", cEmpty_Prima);
    
    console.log("cFull_Kamakhya Total", cFull_Kamakhya);
    console.log("cHalf_Kamakhya Total", cHalf_Kamakhya);
    console.log("cEmpty_Kamakhya Total", cEmpty_Kamakhya);

    console.log("cFull_Suvidha Total", cFull_Suvidha);
    console.log("cHalf_Suvidha Total", cHalf_Suvidha);
    console.log("cEmpty_Suvidha Total", cEmpty_Suvidha);
    
    console.log("cFull_Others Total", cFull_Others);
    console.log("cHalf_Others Total", cHalf_Others);
    console.log("cEmpty_Others Total", cEmpty_Others);


    var Full_Prima = cFull_Prima - rFull_Prima
    var Full_Kamakhya = cFull_Kamakhya - rFull_Kamakhya
    var Full_Suvidha = cFull_Suvidha - rFull_Suvidha
    var Full_Others = cFull_Others - rFull_Others

    var Half_Prima = cHalf_Prima - rHalf_Prima
    var Half_Kamakhya = cHalf_Kamakhya - rHalf_Kamakhya
    var Half_Suvidha = cHalf_Suvidha - rHalf_Suvidha
    var Half_Others = cHalf_Others - rHalf_Others

    var Empty_Prima = cEmpty_Prima - rEmpty_Prima
    var Empty_Kamakhya = cEmpty_Kamakhya - rEmpty_Kamakhya
    var Empty_Suvidha = cEmpty_Suvidha - rEmpty_Suvidha
    var Empty_Others = cEmpty_Others - rEmpty_Others

    console.log("Full Prima: ",Full_Prima);
    console.log("Full_Kamakhya: ",Full_Kamakhya);
    console.log("Full_Suvidha: ",Full_Suvidha);
    console.log("Full_Others: ",Full_Others);

    console.log("Half Prima: ",Half_Prima);
    console.log("Half_Kamakhya: ",Half_Kamakhya);
    console.log("Half_Suvidha: ",Half_Suvidha);
    console.log("Half_Others: ",Half_Others);

    console.log("Empty Prima: ",Empty_Prima);
    console.log("Empty_Kamakhya: ",Empty_Kamakhya);
    console.log("Empty_Suvidha: ",Empty_Suvidha);
    console.log("Empty_Others: ",Empty_Others);


    res.status(200).json({
        success: true,
        message: "Stock Details",
        etPrimaF: Full_Prima,
        etPrimaH: Half_Prima,
        etPrimaE: Empty_Prima,
        etKamakhyaF: Full_Kamakhya,
        etKamakhyaH: Half_Kamakhya,
        etKamakhyaE: Empty_Kamakhya,
        etSuvidhaF: Full_Suvidha,
        etSuvidhaH: Half_Suvidha,
        etSuvidhaE: Empty_Suvidha,
        etOthersF: Full_Others,
        etOthersH: Half_Others,
        etOthersE: Empty_Others,
    })
});


module.exports = router;