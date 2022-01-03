const { schema, model } = require('mongoose')

const userSchema = new Schema(
    {
        name: { String, required: true },
        email: { String, required: true , unique: true},
        password: { String, required: true },
        profile_url: { String, required: true },
        roles: { String, required: true }
    }
    );

    module.exports("user",userSchema)