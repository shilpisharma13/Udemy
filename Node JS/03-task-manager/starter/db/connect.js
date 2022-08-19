const mongoose = require('mongoose')

const connectionString =
  'mongodb+srv://shilpi13:yuviyudi1830@cluster0.zqyb4xm.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('CONNECTED TO DB...'))
  .catch((err) => console.log(err))
