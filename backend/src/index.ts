import * as express from 'express';
import messageRouter from './routes/messageRouter';
import userRouter from './routes/userRouter';
import * as cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use('/api/messages', messageRouter);
app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
