import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";

export default class SyncWallet implements View {

    private container: DomNode;
    private interval: any;

    constructor() {
        this.container = el(".sync-wallet-view",
            el("header",
                el("h1", "0xAlterEgo"),
                el("h2", "Check Wallet"),
            ),
            el("article",
                el("a.discord-login-button", "Check Wallet", {
                    href: "https://discord.com/api/oauth2/authorize?client_id=939799459720728606&redirect_uri=https%3A%2F%2Fsigor.com%2Fcheckholder&response_type=code&scope=identify",
                }),
            ),
        ).appendTo(BodyNode);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}