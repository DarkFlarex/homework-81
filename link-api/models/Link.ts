import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    originalUrl:{
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true,
    },
});

const link = mongoose.model('Link', LinkSchema);

export default link;
