'use strict';

/**
 * flight-delay controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::flight-delay.flight-delay');
