class noncitizensController
{
    static register = async (req,res) =>{
        try {
            const noncitizens = require("../models/noncitizens")

            const noncitizen = await noncitizens.create({
                nid: req.body.NID,
                firstname: req.body.fname,
                othername: req.body.oname,
                surname: req.body.sname,
                sex: req.body.sex,
                dob: req.body.dob,
                phone: req.body.phone
            })

            if (!noncitizen) throw new Error("Failed to register card");

            res.status(200).json(noncitizen);

        } catch (error) {

            res.status(400).json({message: error.message})
        }

    }
}

module.exports = noncitizensController
