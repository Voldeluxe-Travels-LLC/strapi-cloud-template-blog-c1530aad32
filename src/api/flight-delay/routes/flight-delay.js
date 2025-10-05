'use strict';

/**
 * flight-delay router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::flight-delay.flight-delay');
