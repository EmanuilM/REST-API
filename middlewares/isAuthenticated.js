const cloudinary = require("cloudinary").v2;


module.exports = (req, res, next) => {
    if (req.user !== undefined) {
        next()
    } else {
        if(req.body.imageIds) {
            cloudinary.api.delete_resources(req.body.imageIds);
        }
        res.status(401)
        res.json({ message: "Unauthorized" })
    }
}
