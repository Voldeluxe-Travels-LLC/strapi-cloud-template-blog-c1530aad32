'use strict';

/**
 * business-class service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::business-class.business-class');
