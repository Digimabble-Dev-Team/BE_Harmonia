"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFilters = exports.applyDynamicConditions = void 0;
function applyDynamicConditions(qb, conditions) {
    Object.keys(conditions).forEach((key) => {
        qb.andWhere(`${key} = :${key}`, { [key]: conditions[key] });
    });
    return qb;
}
exports.applyDynamicConditions = applyDynamicConditions;
function buildFilters(query) {
    const filters = {};
    for (const [key, value] of Object.entries(query)) {
        if (value) {
            filters[key] = value;
        }
    }
    return filters;
}
exports.buildFilters = buildFilters;
//# sourceMappingURL=helpers.js.map