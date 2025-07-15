import rateLimit from 'express-rate-limit';

const limiter  = ({
  
  windowMs: 15 * 60 * 1000, // 15 phút
  max: 100, // giới hạn mỗi IP 100 requests mỗi 15 phút
  standardHeaders: true,
  legacyHeaders: false,
});

export default rateLimit(limiter);
