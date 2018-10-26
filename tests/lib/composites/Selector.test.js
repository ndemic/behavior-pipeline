/* eslint-env jest */

import {
    Action,
    Composite,
    Selector
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

describe('Selector', () => {
    describe('constructor', () => {
        it('should be an instance of Composite', () => {
            expect(
                new Selector()
            ).toBeInstanceOf(Composite);
        });
    });

    describe('execute', () => {
        it('resolves a promise', () => {
            return expect(
                new Selector().execute()
            ).resolves.toEqual();
        });

        it('resolves a promise with params', () => {
            return expect(
                new Selector().execute({ a: 1, b: 'b' })
            ).resolves.toEqual({ a: 1, b: 'b' });
        });

        it('resolves the value of the first successful node (first)', () => {
            return expect(
                new Selector()
                    .add(new PromiseResolver({ name: 'First', properties: { resolve: true } }))
                    .add(new PromiseResolver({ name: 'Second', properties: { resolve: false } }))
                    .add(new PromiseResolver({ name: 'Third', properties: { resolve: false } }))
                    .execute()
            ).resolves.toEqual('PromiseResolver: First');
        });

        it('resolves the value of the first successful node (second)', () => {
            return expect(
                new Selector()
                    .add(new PromiseResolver({ name: 'First', properties: { resolve: false } }))
                    .add(new PromiseResolver({ name: 'Second', properties: { resolve: true } }))
                    .add(new PromiseResolver({ name: 'Third', properties: { resolve: false } }))
                    .execute()
            ).resolves.toEqual('PromiseResolver: Second');
        });

        it('resolves the value of the third successful node (third)', () => {
            return expect(
                new Selector()
                    .add(new PromiseResolver({ name: 'First', properties: { resolve: false } }))
                    .add(new PromiseResolver({ name: 'Second', properties: { resolve: false } }))
                    .add(new PromiseResolver({ name: 'Third', properties: { resolve: true } }))
                    .execute()
            ).resolves.toEqual('PromiseResolver: Third');
        });

        it('rejects with the last node error on failure', () => {
            return expect(
                new Selector()
                    .add(new PromiseResolver({ name: 'First', properties: { resolve: false } }))
                    .add(new PromiseResolver({ name: 'Second', properties: { resolve: false } }))
                    .add(new PromiseResolver({ name: 'Third', properties: { resolve: false } }))
                    .execute('Nothing Happened')
            ).rejects.toEqual(new Error('PromiseResolver: Third'));
        });
    });
});
