import {Schema, model} from 'mongoose';

const commentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
      required: true
    }
});

const Comment = model('Comment', commentSchema)

export default Comment;