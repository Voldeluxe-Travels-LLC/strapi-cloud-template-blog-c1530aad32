'use strict';

/**
 * one-way controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::one-way.one-way');
