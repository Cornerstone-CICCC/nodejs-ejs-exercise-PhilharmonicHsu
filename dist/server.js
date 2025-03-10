"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// This is your server file :)
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const base_routes_1 = __importDefault(require("./routes/base.routes"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../src/views'));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(base_routes_1.default);
app.use((request, response) => {
    response.status(404).render('404', { title: 'Page not found' });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} ....`);
});
