"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class SyncWallet {
    constructor() {
        this.container = (0, skynode_1.el)(".sync-wallet-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", "0xAlterEgo"), (0, skynode_1.el)("h2", "Check Wallet")), (0, skynode_1.el)("article", (0, skynode_1.el)("a.discord-login-button", "Check Wallet", {
            href: "https://discord.com/api/oauth2/authorize?client_id=939799459720728606&redirect_uri=https%3A%2F%2Fsigor.com%2Fcheckholder&response_type=code&scope=identify",
        }))).appendTo(skynode_1.BodyNode);
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = SyncWallet;
//# sourceMappingURL=LinkWalletToDiscord.js.map