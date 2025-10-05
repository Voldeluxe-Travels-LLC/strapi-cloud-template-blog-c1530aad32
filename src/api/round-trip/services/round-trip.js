'use strict';

/**
 * round-trip service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::round-trip.round-trip');
