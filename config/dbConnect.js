import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return;
  const password = encodeURIComponent('843487111!2');
  mongoose
    .connect(
      `mongodb+srv://viditr111:qL1t6oJrjWIRDDDP@cluster0.q3gbtq8.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true,
      }
    )
    .then((con) => console.log(`connected to local database ${con}`));
};

export default dbConnect;
