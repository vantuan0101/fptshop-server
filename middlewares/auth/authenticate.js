const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
    const token = req.headers.token;
    // console.log(token);
    try {
        const accessToken = token.split(" ")[1];
        // console.log(accessToken);
        const decoder = jwt.verify(accessToken, process.env.JWT_SECRET);
        // console.log(decoder);
        if(decoder){
            req.user = decoder;
            return next();
        }else{
            return res.status(401).json({
                errCode : 1 ,
                status: "fail",
                message: "Bạn chưa đăng nhập"
            });
        }
    } catch (error) {
        res.status(500).json({
            errCode : 1 ,
            status: "fail",
            message: error
        });
    }
        
    
}
module.exports = { authenticate };
