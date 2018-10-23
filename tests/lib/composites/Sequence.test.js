/* eslint-env jest */

import {
    Action,
    Composite,
    Sequence
} from 'behavior-pipeline/lib';

class StringConcatenate extends Action {
    constructor(params) {
        super(params);
    }

    execute(params = '') {
        return Promise.resolve(
            [params, this.properties.value].join(' ')
        );
    }
}

describe('Sequence', () => {
    describe('constructor', () => {
        it('should be an instance of Composite', () => {
            expect(
                new Sequence()
            ).toBeInstanceOf(Composite);
        });
    });

    describe('execute', () => {
        it('resolves a promise', () => {
            return expect(
                new Sequence().execute()
            ).resolves.toEqual();
        });

        it('resolves a promise with params', () => {
            return expect(
                new Sequence().execute({ a: 1, b: 'b' })
            ).resolves.toEqual({ a: 1, b: 'b' });
        });

        it('resolves the final value of a sequence of successful nodes', () => {
            return expect(
                new Sequence()
                    .add(new StringConcatenate({ properties: { value: 'Lazy' } }))
                    .add(new StringConcatenate({ properties: { value: 'Fox' } }))
                    .add(new StringConcatenate({ properties: { value: 'Slept' } }))
                    .execute('The')
            ).resolves.toEqual('The Lazy Fox Slept');
        });
    });
});
