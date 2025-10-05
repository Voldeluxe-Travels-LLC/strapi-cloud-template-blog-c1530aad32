'use strict';

/**
 * one-way service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::one-way.one-way');
