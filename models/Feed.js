const mongoose = require('mongoose');

const FeedSchema = new mongoose.Schema({
    feedURL: { type: String, trim:true },
    link: { type: String, trim:true },
    title: { type: String, trim:true },
    description: { type: String, trim:true },
    state: { type: String, trim:true, lowercase:true, default: 'new' },
    createdDate: { type: Date, default: Date.now },
    modifiedDate: { type: Date, default: Date.now }
});
{ collection: 'feed' }
FeedSchema.index({feedURL : 1}, {unique:true});
FeedSchema.index({link : 1}, {unique:true, sparse:true});
module.exports = mongoose.model('Feed', FeedSchema);
