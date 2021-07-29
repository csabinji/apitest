const jwt = require('jsonwebtoken');
const Member = require('../Models/Member')

module.exports.verifyMember = function(req,res,next)
{
    try
    {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const data = jwt.verify(token, 'secretkey');
        Member.findOne({_id:data.MemberID})
        .then(function(result)
        {
            console.log("member id: ", data.MemberID)
            req.member = result;
            next();
        })
        .catch(function(result)
        {
           return res.status(403).json({error: "Auth failed."})
        })
    }
    catch(e)
    {
       return res.status(403).json({message: "Fail to authenticate Member"});
    }
}

module.exports.verifyAdmin = function(req,res,next)
{
    if(!req.member)
    {
        return res.status(401).json({message: "Member doesnot have access."})
    }
    else if(req.member.Status!=="Admin")
    {
        return res.status(401).json({message: "Permission denied."})
    }
    next();
}