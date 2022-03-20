"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const superagent_1 = __importDefault(require("superagent"));
const EthereumWallet_1 = __importDefault(require("../ethereum/EthereumWallet"));
class LinkWalletToDiscord {
    constructor() {
        this.container = (0, skynode_1.el)(".link-wallet-to-discord-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", "0xAlterEgo"), (0, skynode_1.el)("h2", "Link Wallet to Discord")), (0, skynode_1.el)("article", (0, skynode_1.el)("a.discord-login-button", "Link Wallet", {
            href: "https://discord.com/api/oauth2/authorize?client_id=939799839129096244&redirect_uri=https%3A%2F%2F0xalterego.com%2Flink-wallet-to-discord&response_type=code&scope=identify",
        }))).appendTo(skynode_1.BodyNode);
        this.checkDiscordLogin();
    }
    async checkDiscordLogin() {
        let code = new URLSearchParams(window.location.search).get("code");
        if (code !== null) {
            try {
                await superagent_1.default.get("https://api.0xalterego.com/discord/token").query({
                    code,
                    redirect_uri: `${window.location.protocol}//${window.location.host}/link-wallet-to-discord`,
                });
            }
            catch (error) {
                console.error(error);
                code = undefined;
            }
        }
        else {
            code = undefined;
        }
        if (code !== undefined) {
            try {
                const result = await superagent_1.default.get("https://api.0xalterego.com/discord/me").query({ code });
                this.discordUser = result.body;
                this.checkWalletConnected(code);
            }
            catch (error) {
                console.error(error);
            }
        }
    }
    async checkWalletConnected(code) {
        if (await EthereumWallet_1.default.connected() !== true) {
            await EthereumWallet_1.default.connect();
        }
        const address = await EthereumWallet_1.default.loadAddress();
        if (address !== undefined) {
            const message = "Link Wallet to Discord";
            const signedMessage = await EthereumWallet_1.default.signMessage(message);
            try {
                const result = await fetch("https://api.0xalterego.com/link-wallet-to-discord", {
                    method: "POST",
                    body: JSON.stringify({
                        code,
                        signedMessage,
                        address,
                    }),
                });
                if ((await result.json()).linked === true) {
                    alert("Link Succeed.");
                }
                else {
                    alert("Link Failed.");
                }
            }
            catch (error) {
                console.error(error);
            }
        }
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = LinkWalletToDiscord;
//# sourceMappingURL=LinkWalletToDiscord.js.map