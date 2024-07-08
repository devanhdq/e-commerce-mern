import mongoose from "mongoose";
export const ValidateMongodbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) {
    throw new Error("This is not a valid or not found");
  }
};
