'use strict';

/**
 * round-trip router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::round-trip.round-trip');
