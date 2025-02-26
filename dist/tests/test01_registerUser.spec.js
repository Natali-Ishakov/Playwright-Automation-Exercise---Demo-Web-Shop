"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const homePage_1 = require("../pages/homePage");
(0, test_1.test)('Verify Login Button Click', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    const homePage = new homePage_1.HomePage(page);
    // נוודא שהכפתור נראה על המסך
    yield (0, test_1.expect)(homePage.loginButton).toBeVisible();
    // נלחץ על כפתור ההתחברות
    // ודא שכשנלחץ על הכפתור, הגענו לעמוד ההתחברות
    yield (0, test_1.expect)(page).toHaveURL('https://www.automationexercise.com/login'); // או כל URL שקשור לעמוד ההתחברות
}));
