/**
 * Flowtype definitions for auth
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.10.0
 * @flow
 */

declare module 'N/auth' {

  declare export interface ChangePasswordOptions {
    currentPassword: string;
    newPassword: string;
  }
  declare export interface ChangeEmailOptions {
    password: string;
    newEmail: string;
    onlyThisAccount?: boolean;
  }

  declare export interface NAuth {
    /**
     * Method used to change the current user’s NetSuite email address (user name).
     */
    changeEmail(options: ChangeEmailOptions): void;

    /**
     * Method used to change the current user’s NetSuite password.
     */
    changePassword(options: ChangePasswordOptions): void;
  }

}