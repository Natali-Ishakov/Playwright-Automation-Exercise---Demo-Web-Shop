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
exports.UIActions = void 0;
class UIActions {
    constructor(page) {
        this.page = page;
    }
    click(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield element.waitFor({ state: 'visible' });
            yield element.click();
        });
    }
    fillText(element, text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield element.waitFor({ state: 'visible' });
            yield element.fill(text);
        });
    }
    hover(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield element.waitFor({ state: 'visible' });
            yield element.hover();
        });
    }
    selectDropdown(element, option) {
        return __awaiter(this, void 0, void 0, function* () {
            yield element.waitFor({ state: 'visible' });
            yield element.selectOption(option);
        });
    }
    waitForElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield element.waitFor({ state: 'visible' });
        });
    }
}
exports.UIActions = UIActions;
