/* eslint-env jest */

import {
    Action,
    Sequence,
    Selector
} from 'behavior-pipeline/lib';

class PromiseResolver extends Action {
    constructor(params) {
        super({ name: 'PromiseResolver', ...params });
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

class StringConcatenate extends Action {
    constructor(params) {
        super({ name: 'StringConcatenate', ...params });
    }

    execute(params = '') {
        return Promise.resolve(
            [params, this.properties.value].join(' ')
        );
    }
}

describe('Trees', () => {
    it('should execute a selector sequence (fail first)', () => {
        var tree = new Selector()
            .add(
                new PromiseResolver({ properties: { resolve: false }})
            )
            .add(
                new Sequence()
                    .add(new StringConcatenate({ properties: { value: 'Cow' }}))
                    .add(new StringConcatenate({ properties: { value: 'Jumped' }}))
                    .add(new StringConcatenate({ properties: { value: 'Over' }}))
                    .add(new StringConcatenate({ properties: { value: 'The' }}))
                    .add(new StringConcatenate({ properties: { value: 'Moon' }}))
            );

        return expect(
            tree.execute('The')
        ).resolves.toEqual('The Cow Jumped Over The Moon');
    });

    it('should execute a selector sequence (no fail)', () => {
        var tree = new Selector()
            .add(
                new PromiseResolver({ properties: { resolve: true }})
            )
            .add(
                new Sequence()
                    .add(new StringConcatenate({ properties: { value: 'Cow' }}))
                    .add(new StringConcatenate({ properties: { value: 'Jumped' }}))
                    .add(new StringConcatenate({ properties: { value: 'Over' }}))
                    .add(new StringConcatenate({ properties: { value: 'The' }}))
                    .add(new StringConcatenate({ properties: { value: 'Moon' }}))
            );

        return expect(
            tree.execute('The Cow...')
        ).resolves.toEqual('The Cow...');
    });

    it('should fail the tree when applicable', () => {
        var tree = new Selector()
            .add(
                new PromiseResolver({ properties: { resolve: false }})
            )
            .add(
                new Sequence()
                    .add(new StringConcatenate({ properties: { value: 'Cow' }}))
                    .add(new StringConcatenate({ properties: { value: 'Jumped' }}))
                    .add(new StringConcatenate({ properties: { value: 'Over' }}))
                    .add(new StringConcatenate({ properties: { value: 'The' }}))
                    .add(new StringConcatenate({ properties: { value: 'Moon' }}))
                    .add(new PromiseResolver({ properties: { resolve: false }}))
            );

        return expect(
            tree.execute('The Cow...')
        ).rejects.toEqual(new Error('PromiseResolver: Rejected'));
    });
});
