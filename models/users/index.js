import Deposit from "../deposits";
import Roles from "../roles";

/**
 * User Model
 *
 */
class User {
  /**
   * Creates a new User instance.
   *
   * @param {string} userId - User ID.
   * @param {string} password - User password.
   * @param {Deposit} deposit - Deposit amount, see allowed values in Deposit model.
   * @param {Roles} role - User role, see allowed values in Roles model.
   */
  constructor(userId, createdAt, password, deposit, role) {
    this.userId = userId;
    this.password = password;
    this.deposit = deposit;
    this.role = role;
    this.createdAt = createdAt;
  }
}

export default User;
