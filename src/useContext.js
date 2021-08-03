"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handler_json_1 = require("./handler.json");
class Core {
}
handler_json_1.handlers.map((handler) => {
    Reflect.defineProperty(Core, handler.fn, {
        value: { user_id: 1, authenticated: false },
    });
});
const core = new Core();
console.log(core.createUser());
