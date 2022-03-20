"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Home {
    constructor() {
        this.container = (0, skynode_1.el)(".home-view").appendTo(skynode_1.BodyNode);
    }
    changeParams(params, uri) { }
    close() {
        clearInterval(this.interval);
        this.container.delete();
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map