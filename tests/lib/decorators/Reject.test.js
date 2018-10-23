/* eslint-env jest */

import {
    Action,
    Decorator,
    Errors,
    Reject
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

describe('Reject', () => {
    describe('constructor', () => {
        it('should be an instance of Decorator', () => {
            expect(
                new Reject()
            ).toBeInstanceOf(Decorator);
        });
    });

    describe('execute', () => {
        it('rejects with the decorator reject error on fulfill', () => {
            return expect(
                new Reject()
                    .add(new PromiseResolver({ properties: { resolve: true } }))
                    .execute()
            ).rejects.toEqual(new Error(Errors.DECORATOR_REJECTED));
        });

        it('rejects with the original error on reject', () => {
            return expect(
                new Reject()
                    .add(new PromiseResolver({ properties: { resolve: false } }))
                    .execute({ a: 1, b: 'b' })
            ).rejects.toEqual(new Error('PromiseResolver: Rejected'));
        });
    });
});
