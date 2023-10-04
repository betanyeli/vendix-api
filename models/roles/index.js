/**
 * Roles model
 *
 * @type {Object} Roles
 * @property {string} SELLER - Represents the seller role.
 * They could add, update or remove products.
 * @property {string} BUYER - Represents the buyer role.
 * They could role can deposit coins into the machine and make purchases
 * @property {string} INVITED - Represents the invited role. They could see available products
 */

/**
 * @type {Roles}
 */

const Roles = {
  SELLER: "seller",
  BUYER: "buyer",
  INVITED: "invited",
};

export default Roles;
