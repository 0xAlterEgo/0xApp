"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyrouter_1 = require("skyrouter");
const Home_1 = __importDefault(require("./view/Home"));
const LinkWalletToDiscord_1 = __importDefault(require("./view/LinkWalletToDiscord"));
(async () => {
    skyrouter_1.SkyRouter.route("", Home_1.default);
    skyrouter_1.SkyRouter.route("link-wallet-to-discord", LinkWalletToDiscord_1.default);
    if (sessionStorage.__spa_path) {
        skyrouter_1.SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();
//# sourceMappingURL=main.js.map