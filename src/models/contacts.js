import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
    {
        // username: {
        //     type: String,
        //     required: true
        // },
        // email: {
        //     type: String,
        //     required: true
        // },
        // phone: {
        //     type: String,
        //     required: true
        // },
        // message: {
        //     type: String,
        //     required: true
        // },

        username: String,
        email: String,
        phone: String,
        message: String,

    },
    {
        timestamp: true
    }
)

const Contacts = mongoose.models.Contacts || mongoose.model('Contacts', contactSchema);
export default Contacts;