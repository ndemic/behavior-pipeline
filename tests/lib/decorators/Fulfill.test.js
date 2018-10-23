/* eslint-env jest */

import {
    Action,
    Decorator,
    Fulfill
} from 'behavior-pipeline/lib';

class PromiseResolver extends Action {
    constructor(params) {
        super(params);
    }

    execute(params) {
        return new Promise((resolve, reject) => {
            if (this.properties.resolve) {
                resolve(params);
            } else {
                reject(new Error('PromiseResolver: Rejected'));
            }
        })
    }
}

describe('Fulfill', () => {
    describe('constructor', () => {
        it('should be an instance of Decorator', () => {
            expect(
                new Fulfill()
            ).toBeInstanceOf(Decorator);
        });
    });

    describe('execute', () => {
        it('resolves a promise', () => {
            return expect(
                new Fulfill()
                    .add(new PromiseResolver({ properties: { resolve: true } }))
                    .execute()
            ).resolves.toEqual();
        });

        it('resolves a promise with params', () => {
            return expect(
                new Fulfill()
                    .add(new PromiseResolver({ properties: { resolve: true } }))
                    .execute({ a: 1, b: 'b' })
            ).resolves.toEqual({ a: 1, b: 'b' });
        });

        it('resolves the final value of a Fulfill of successful nodes', () => {
            return expect(
                new Fulfill()
                    .add(new PromiseResolver({ properties: { resolve: false } }))
                    .execute('The')
            ).resolves.toEqual('The');
        });
    });
});
