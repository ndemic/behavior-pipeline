/* eslint-env jest */

import {
    Action,
    Composite,
    Race
} from 'behavior-pipeline/lib';

class TimedPromiseResolver extends Action {
    constructor(params) {
        super(params);
    }

    execute() {
        var output = `TimedPromiseResolver: ${this.name}`;

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.properties.resolve) {
                    resolve(output);
                } else {
                    reject(new Error(output));
                }
            }, this.properties.timeout);
        })
    }
}

describe('Race', () => {
    describe('constructor', () => {
        it('should be an instance of Composite', () => {
            expect(
                new Race()
            ).toBeInstanceOf(Composite);
        });
    });

    describe('execute', () => {
        it('resolves a promise', () => {
            return expect(
                new Race().execute()
            ).resolves.toEqual([]);
        });

        it('resolves a promise with params', () => {
            return expect(
                new Race().execute({ a: 1, b: 'b' })
            ).resolves.toEqual([]);
        });

        it('resolves the first successful node', () => {
            return expect(
                new Race()
                    .add(new TimedPromiseResolver({ name: 'First', properties: { resolve: true, timeout: 200 } }))
                    .add(new TimedPromiseResolver({ name: 'Second', properties: { resolve: true, timeout: 100 } }))
                    .add(new TimedPromiseResolver({ name: 'Third', properties: { resolve: true, timeout: 300 } }))
                    .execute()
            ).resolves.toEqual('TimedPromiseResolver: Second');
        });

        it('rejects the first failing node', () => {
            return expect(
                new Race()
                    .add(new TimedPromiseResolver({ name: 'First', properties: { resolve: true, timeout: 200 } }))
                    .add(new TimedPromiseResolver({ name: 'Second', properties: { resolve: false, timeout: 100 } }))
                    .add(new TimedPromiseResolver({ name: 'Third', properties: { resolve: true, timeout: 300 } }))
                    .execute()
            ).rejects.toEqual(new Error('TimedPromiseResolver: Second'));
        })
    });
});
