const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc get all contacts
//@desc GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts)
});

//@desc create new contact
//@desc POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log("req body :", req.body)
  const { name, email, phone } = req.body;
  if( !name || !email || !phone){
    res.status(400);
    throw new Error("Mandatory field missing")
  }
  const contact = await Contact.create({
    name,
    email,
    phone
  });
  res.status(201).json()
});

//@desc get individual contact
//@desc GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc update contact
//@desc PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body );
  res.status(200).json(updatedContact);
});

//@desc delete contact
//@desc DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.remove();
  res.status(200).json(contact);
});

module.exports = { getContacts, createContact, getContact , updateContact, deleteContact };   