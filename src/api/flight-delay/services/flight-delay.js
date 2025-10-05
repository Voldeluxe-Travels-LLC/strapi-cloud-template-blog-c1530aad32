'use strict';

/**
 * flight-delay service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::flight-delay.flight-delay');
