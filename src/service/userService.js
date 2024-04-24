import userModel from "../models/userModel";

export const exsistingUser = await userModel.findOne({ email });
if (exsistingUser) {
  return res.status(200).send({
    success: false,
    message: "Account already exsists please login",
  });
}
//Check user
export const user = await userModel.findOne({ email });
if (!user) {
  return res.status(200).send({
    success: false,
    message: "Email is not registered",
  });
}