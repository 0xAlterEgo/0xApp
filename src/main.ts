import { SkyRouter } from "skyrouter";
import Home from "./view/Home";
import SyncDiscord from "./view/sync/Discord";
import SyncWallet from "./view/sync/Wallet";

(async () => {

    SkyRouter.route("", Home);
    SkyRouter.route("sync/discord", SyncDiscord);
    SkyRouter.route("sync/wallet", SyncWallet);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();