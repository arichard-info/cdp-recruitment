/**
 * returns an object with key-value pairs for each flag passed as argument
 * @returns {object}
 */
const getArguments = () => {
    const args = {};
    process.argv.slice(2, process.argv.length).forEach((rawArg) => {
        const arg = rawArg.split('=');
        const flag = arg[0].slice(2, arg[0].length);
        args[flag] = arg.length > 1 ? arg[1] : true;
    })
    return args;
}

module.exports = { getArguments }