import mongoose from 'mongoose';

const StatisticSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  totalEarnings: {
    type: Number,
    required: true
  },
  accountBalance: {
    type: Number,
    required: true
  },
  withdrawals: {
    type: [Number],
    required: true
  }
});

export default  mongoose.model('Statistic', StatisticSchema);
