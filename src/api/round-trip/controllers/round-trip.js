'use strict';

/**
 * round-trip controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::round-trip.round-trip');
