//@desc get all contacts
//@desc GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({message: "Get all contacts"})
};

//@desc create new contact
//@desc POST /api/contacts
//@access public
const createContact = (req, res) => {
  console.log("req body :", req.body)
  const { cpcgFlag, requestType, crmId, productOrderId, offerId, file } = req.body;
  if( !cpcgFlag || !requestType || !crmId || !productOrderId || !offerId || !file ){
    res.status(400);
    throw new Error("Mandatory field missing")
  }
  res.status(201).json({message: "contact created"})
};

//@desc get individual contact
//@desc GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({message: `have the requested contact ${req.params.id}`})
};

//@desc update contact
//@desc PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
  res.status(200).json({message: `update contacts for ${req.params.id}`})
};

//@desc delete contact
//@desc DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({message: `delete contacts for ${req.params.id}`})
};

module.exports = { getContacts, createContact, getContact , updateContact, deleteContact };   