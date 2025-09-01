"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const typeorm_1 = require("typeorm");
async function runSeeder() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const dataSource = app.get(typeorm_1.DataSource);
    await app.close();
}
runSeeder();
//# sourceMappingURL=run-seeder.js.map