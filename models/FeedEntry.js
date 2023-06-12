const mongoose = require('mongoose');

const FeedEntrySchema = new mongoose.Schema({
description: { type: String, trim:true },
title: { type: String, trim:true },
summary: { type: String, trim:true },
entryID: { type: String, trim:true },
publishedDate: { type: Date },
link: { type: String, trim:true  },
feedID: { type: mongoose.Schema.Types.ObjectId },
state: { type: String, trim:true, lowercase:true, default: 'new' },
created: { type: Date, default: Date.now }
});
{ collection: 'feedentry' }
FeedEntrySchema.index({entryID : 1});
FeedEntrySchema.index({feedID : 1});

module.exports = mongoose.model('FeedEntry', FeedEntrySchema);
