"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class SyncDiscord {
    constructor() {
        this.container = (0, skynode_1.el)(".sync-discord-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", "0xAlterEgo"), (0, skynode_1.el)("h2", "Check Discord")), (0, skynode_1.el)("article", (0, skynode_1.el)("a.discord-login-button", "Check Discord", {
            href: "https://discord.com/api/oauth2/authorize?client_id=939799459720728606&redirect_uri=https%3A%2F%2Fsigor.com%2Fcheckholder&response_type=code&scope=identify",
        }))).appendTo(skynode_1.BodyNode);
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = SyncDiscord;
//# sourceMappingURL=Discord.js.map