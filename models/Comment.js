const { Schema, model, Types } = require('mongoose');
const dataFormat = require('../utils/dataFormat');

const ReplySchema = new Schema(
    {
        // Set Custom id to avoid confusion with parent comment _id
        replyId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId() 
        },
        replyBody: {
            type: String,
            required: true,
            trim: true
        },
        writtenBy: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dataFormat(createdAtVal)
        }
    },
    {   
        toJSON: {
            getters: true
        }    
    }
);

const CommentSchema = new Schema ({
    writtenBy: {
        type: String,
        required: "You must provide a user name.",
        trim: true
    },
    commentBody: {
        type: String,
        required: "You must provide a comment here.",
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    // Use ReplySchema to validate data for a reply
    replies: [ReplySchema]
 
},
	{
		toJSON: {
			virtuals: true,
			getters: true
		},
		id: false
	}
);

CommentSchema.virtual('replyCount').get(function() {
    return this.replies.length;
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;
