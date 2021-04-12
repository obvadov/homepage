import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        user_id: {
            type: Number
        },
        post_text: {
            type: String
        },
        removed: {
            type: Boolean,
            default: false,
            select:false
        },

    },
    {
        timestamps: true
    }
)

export default mongoose.model('Post', postSchema)