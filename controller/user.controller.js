const UserService = require('../services/user.services');

exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const successRes = await UserService.registerUser(email, password)

        res.json({ status: true, success: "User regisered successfully" })
    } catch (error) {
        throw error
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user =await UserService.checkUser(email);

        if(!user){
            throw Error('user does not exist')
        }
        const isMatch =await user.comparePassword(password)

        if(isMatch ===false){
            throw Error('password does not match')
        }
        let tokenData ={_id:user._id,email:user.email}

        const token = await UserService.genarateToken(tokenData,"secretKey",'1h')

        res.status(200).json({status:true,token})
    } catch (error) {
        throw error
    }
}