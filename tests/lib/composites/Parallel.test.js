/* eslint-env jest */

import {
    Action,
    Composite,
    Parallel
} from 'behavior-pipeline/lib';

class PromiseResolver extends Action {
    constructor(params) {
        super(params);
    }

    execute() {
        var output = `PromiseResolver: ${this.name}`;

        return new Promise((resolve, reject) => {
            if (this.properties.resolve) {
                resolve(output);
            } else {
                reject(new Error(output));
            }
        })
    }
}

describe('Parallel', () => {
    describe('constructor', () => {
        it('should be an instance of Composite', () => {
            expect(
                new Parallel()
            ).toBeInstanceOf(Composite);
        });
    });

    describe('execute', () => {
        it('resolves a promise', () => {
            return expect(
                new Parallel().execute()
            ).resolves.toEqual([]);
        });

        it('resolves a promise with params', () => {
            return expect(
                new Parallel().execute({ a: 1, b: 'b' })
            ).resolves.toEqual([]);
        });

        it('resolves an array of the values of each successful node', () => {
            return expect(
                new Parallel()
                    .add(new PromiseResolver({ name: 'First', properties: { resolve: true } }))
                    .add(new PromiseResolver({ name: 'Second', properties: { resolve: true } }))
                    .add(new PromiseResolver({ name: 'Third', properties: { resolve: true } }))
                    .execute()
            ).resolves.toEqual(['PromiseResolver: First', 'PromiseResolver: Second', 'PromiseResolver: Third']);
        });

        it('rejects the first failing node', () => {
            return expect(
                new Parallel()
                    .add(new PromiseResolver({ name: 'First', properties: { resolve: true } }))
                    .add(new PromiseResolver({ name: 'Second', properties: { resolve: false } }))
                    .add(new PromiseResolver({ name: 'Third', properties: { resolve: true } }))
                    .execute()
            ).rejects.toEqual(new Error('PromiseResolver: Second'));
        })
    });
});
