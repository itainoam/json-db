var faker = require('faker');
var _ = require('lodash');

var fakePeople = function() {
        return {
            people: _.times(5, function() {
                return {
                    name: faker.name.findName(),
                    email: faker.internet.email()
                }
            })
        }
    }


module.exports = fakePeople;