'use strict';

/**
 * one-way router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::one-way.one-way');
