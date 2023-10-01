import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
    },
    {
        timestamp: true
    }
)

const Contacts = mongoose.models.Contacts || mongoose.model('Contacts', contactSchema);
export default Contacts;