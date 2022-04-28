import mongoose, { Document, Schema } from 'mongoose';

interface Notification extends Document {
  date: Date;
  message: {
    title: String;
    body: String;
  };
  to: String;
  multipleRecipients: Boolean;
  testDevice: Boolean;
}
const NotificationSchema: Schema = new Schema({
  created_at: {
    type: Date,
    default: Date.now,
  },
  message: {
    type: Object,
    required: true,
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  to: {
    type: String,
    required: true,
    index: true,
  },
  multipleRecipients: {
    type: Boolean,
    required: false,
  },
  testDevice: {
    type: Boolean,
    required: false,
  },
});
export default mongoose.model<Notification>(
  'notifications',
  NotificationSchema,
);
