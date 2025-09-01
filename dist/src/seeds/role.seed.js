"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const role_entity_1 = require("../modules/roles/entities/role.entity");
(async () => {
    try {
        await data_source_1.AppDataSource.initialize();
        const roleRepository = data_source_1.AppDataSource.getRepository(role_entity_1.Role);
        await roleRepository.save([
            { name: 'super-admin', description: 'Super admin role', is_active: true },
            { name: 'branch-admin', description: 'Branch admin role', is_active: true },
            { name: 'staff', description: 'Staff role', is_active: true },
        ]);
        console.log('Roles seeded successfully.');
        await data_source_1.AppDataSource.destroy();
    }
    catch (error) {
        console.error('Role seed failed:', error);
        process.exit(1);
    }
})();
//# sourceMappingURL=role.seed.js.map