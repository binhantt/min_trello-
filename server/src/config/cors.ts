import cors from 'cors';

const corsOptions = {
  origin: '*', // Có thể thay đổi thành domain cụ thể nếu cần
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

export default cors(corsOptions);
