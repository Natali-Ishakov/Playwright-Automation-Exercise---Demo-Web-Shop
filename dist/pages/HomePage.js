"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
class HomePage {
    constructor(page) {
        this.page = page;
        this.loginButton = page.getByRole('link', { name: 'Login or register' });
        this.signupButton = page.getByRole('link', { name: 'Login or register' });
        this.productsLink = page.getByRole('link', { name: 'Products' });
        this.cartLink = page.getByRole('link', { name: 'Automation Test Store' });
        this.contactUsLink = page.getByRole('link', { name: 'Contact us' });
    }
}
exports.HomePage = HomePage;
