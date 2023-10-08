class citizensController
{
    static register = async (req,res) =>{
        try {
            const citizens = require("../models/citizens")

            const citizen = await citizens.create({
                nid: req.body.NID,
                firstname: req.body.fname,
                othername: req.body.oname,
                surname: req.body.sname,
                sex: req.body.sex,
                dob: req.body.dob,
                phone: req.body.phone
            })

            if (!citizen) throw new Error("Failed to register card");

            res.status(200).json(citizen);

        } catch (error) {

            res.status(400).json({message: error.message})
        }

    }
}

module.exports = citizensController
