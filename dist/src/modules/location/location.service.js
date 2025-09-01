"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const logger_1 = require("../../core/utils/logger");
let LocationService = class LocationService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    detectCountryByPostalCode(postalCode) {
        const cleanCode = postalCode.trim().replace(/\s+/g, '');
        const belgiumRegex = /^[1-9]\d{3}$/;
        const indiaRegex = /^\d{6}$/;
        const possibleCountries = [];
        if (belgiumRegex.test(cleanCode)) {
            possibleCountries.push('be');
        }
        if (indiaRegex.test(cleanCode)) {
            possibleCountries.push('in');
        }
        return possibleCountries;
    }
    async findByPostalCode(postalCode) {
        if (!postalCode || postalCode.trim().length === 0) {
            throw new common_1.HttpException('Postal code is required', common_1.HttpStatus.BAD_REQUEST);
        }
        const cleanPostalCode = postalCode.trim().replace(/\s+/g, '');
        const possibleCountries = this.detectCountryByPostalCode(cleanPostalCode);
        console.log(`Possible countries for postal code "${cleanPostalCode}":`, possibleCountries);
        if (possibleCountries.length === 0) {
            throw new common_1.HttpException('Invalid postal code format. Supported formats: Belgium (4 digits: 1000-9999), India (6 digits: 100000-999999)', common_1.HttpStatus.BAD_REQUEST);
        }
        for (const countryCode of possibleCountries) {
            try {
                const result = await this.fetchLocationData(countryCode, cleanPostalCode);
                return result;
            }
            catch (error) {
                if (error instanceof common_1.HttpException && error.getStatus() === common_1.HttpStatus.NOT_FOUND) {
                    continue;
                }
                throw error;
            }
        }
        throw new common_1.HttpException('Postal code not found in supported countries (Belgium, India)', common_1.HttpStatus.NOT_FOUND);
    }
    async fetchLocationData(countryCode, postalCode) {
        var _a;
        const url = `https://api.zippopotam.us/${countryCode}/${postalCode}`;
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, {
                timeout: 5000,
            }));
            const data = response.data;
            if (!data || !data.places || data.places.length === 0) {
                throw new common_1.HttpException('Postal code not found', common_1.HttpStatus.NOT_FOUND);
            }
            const place = data.places[0];
            console.log(`Fetched location data for postal code ${postalCode} in ${countryCode}:`, place);
            return {
                postalCode: data['post code'],
                city: place['place name'],
                state: place['state'] || place['state abbreviation'] || '',
                country: data['country'],
                countryCode: data['country abbreviation'].toUpperCase(),
            };
        }
        catch (error) {
            logger_1.logger.error(`Error fetching location for postal code ${postalCode} in ${countryCode}:`, error);
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
                throw new common_1.HttpException('Postal code not found', common_1.HttpStatus.NOT_FOUND);
            }
            if (error.code === 'ECONNABORTED' || error.code === 'ETIMEDOUT') {
                throw new common_1.HttpException('Request timeout', common_1.HttpStatus.REQUEST_TIMEOUT);
            }
            throw new common_1.HttpException('Failed to fetch location data', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findByZipcode(zipcode) {
        return this.findByPostalCode(zipcode);
    }
};
LocationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], LocationService);
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map