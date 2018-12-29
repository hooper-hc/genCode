'use strict';

import mongoose from 'mongoose';

export default {
  meta: {
    type: {
      createdBy: {
        type: {
          _id: {
            type: mongoose.Schema.Types.ObjectId,
          },
          name: {
            type: String,
          },
        }
      },
      createdOn: {
        type: Date,
        default: Date.now,
      },
    },
  },
};
