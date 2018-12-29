'use strict';

import mongoose from 'mongoose';

import Meta from './meta';

const userSchema = new mongoose.Schema({
  meta: {
    type: Meta,
  },
  handle: {
    type: String,
    required: true,
    index: true,
  },
  auth0id: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  avatar: {
    type: String,
  },
  public: {
    type: Boolean,
  },
  donate: {
    type: String,
  },
});

export default mongoose.model('User', userSchema);
