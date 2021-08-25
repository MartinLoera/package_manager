const log4js = require("log4js");

let logger = log4js.getLogger();

logger.level = "debug";
logger.info("La app se inicio con exito");
logger.warn('Cuidado')
logger.error('Error')
logger.fatal('Ya valio')

function sumar(x, y) {
    return x + y
}

module.exports = sumar;

