const { getArguments } = require('./command');

describe('command functions', () => {
    let originalArgv;

    beforeEach(() => {
        originalArgv = process.argv;
    });

    afterEach(() => {
        process.argv = originalArgv;
    });

    describe('#getArguments', () => {
        it('should return an object with key-value pairs for each flag passed as argument', () => {
            process.argv = ['node', 'app.js', '--filter=ry', '--count']
            const result = getArguments();
            expect(result).toEqual({ filter: 'ry', count: true })
        });

        it('should return an empty object if no flag is passed as argument', () => {
            process.argv = ['node', 'app.js']
            const result = getArguments();
            expect(result).toEqual({})
        })
    })
})