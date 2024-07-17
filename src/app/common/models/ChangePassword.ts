
export class ChangePassword {
    userId: string;
    currentPassword: string;
    newPassword: string;
    username: string;

    // TODO: correct the email field in front end before correcting this
    email: string;
    constructor(userId: string, currentPassword: string, newPassword: string, username: string,email: string) {
        this.userId = userId;
        this.currentPassword = currentPassword;
        this.newPassword = newPassword;
        this.username = username;
        this.email = email;

  
    }
}
