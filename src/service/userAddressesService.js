import User from "../models/userModel.js";

export const getAddressesByUserEmail = async (userEmail) => {
  try {
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      throw new Error("User not found");
    }
    return user.addresses;
  } catch (error) {
    throw new Error("Error fetching addresses: " + error.message);
  }
};

export const addAddressForUser = async (userEmail, addressData) => {
  try {
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      throw new Error("User not found");
    }
    user.addresses.push(addressData);
    await user.save();
    return user.addresses;
  } catch (error) {
    throw new Error("Error adding address: " + error.message);
  }
};

export const updateAddressForUser = async (userEmail, addressIndex, addressData) => {
  try {
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      throw new Error("User not found");
    }
    user.addresses[addressIndex] = addressData;
    await user.save();
    return user.addresses;
  } catch (error) {
    throw new Error("Error updating address: " + error.message);
  }
};

export const deleteAddressForUser = async (userEmail, addressIndex) => {
  try {
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      throw new Error("User not found");
    }
    user.addresses.splice(addressIndex, 1);
    await user.save();
    return user.addresses;
  } catch (error) {
    throw new Error("Error deleting address: " + error.message);
  }
};
