import * as addressService from "../service/userAddressesService.js";
import { STATUS_CODES,MESSAGES } from "../constants/constants.js";

export const getAddresses = async (req, res) => {
  try {
    const userEmail = req.query.email;
    const addresses = await addressService.getAddressesByUserEmail(userEmail);
    res.status(STATUS_CODES.SUCCESS).json(addresses);
  } catch (error) {
    console.error(error.message);
    res.status(STATUS_CODES.SERVER_ERROR).json(MESSAGES.SERVER_ERROR);
  }
};

export const addAddress = async (req, res) => {
  try {
    const userEmail = req.query.email;
    const addressData = req.body;
    const addresses = await addressService.addAddressForUser(userEmail, addressData);
    res.status(STATUS_CODES.SUCCESS_CREATED).json(addresses);
  } catch (error) {
    console.error(error.message);
    res.status(STATUS_CODES.SERVER_ERROR).json(MESSAGES.SERVER_ERROR);
  }
};

export const updateAddress = async (req, res) => {
  try {
    const userEmail = req.query.email;
    const addressIndex = req.params.addressIndex;
    const addressData = req.body;
    const addresses = await addressService.updateAddressForUser(userEmail, addressIndex, addressData);
    res.status(STATUS_CODES.SUCCESS).json(addresses);
  } catch (error) {
    console.error(error.message);
    res.status(STATUS_CODES.SERVER_ERROR).json(MESSAGES.SERVER_ERROR);
  }
};

export const deleteAddress = async (req, res) => {
  try {
    const userEmail = req.query.email;
    const addressIndex = req.params.addressIndex;
    const addresses = await addressService.deleteAddressForUser(userEmail, addressIndex);
    res.status(STATUS_CODES.SUCCESS).json(addresses);
  } catch (error) {
    console.error(error.message);
    res.status(STATUS_CODES.SERVER_ERROR).json(MESSAGES.SERVER_ERROR);
  }
};
