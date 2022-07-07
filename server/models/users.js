const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    team: {
        type: String,
        required: true,
    },
    project: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    hub: {
        type: String,
        required: true,
    },
    contact: {
        type:String ,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },

    
     
});


const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;