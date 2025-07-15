import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, title: 'Post 1', content: 'Nội dung post 1' },
    { id: 2, title: 'Post 2', content: 'Nội dung post 2' },
    { id: 3, title: 'Post 3', content: 'Nội dung post 3' }
  ]);
});

export default router;