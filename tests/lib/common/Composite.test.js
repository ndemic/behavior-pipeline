/* eslint-env jest */

import {
    Action,
    Composite,
    Errors,
    Node
} from 'behavior-pipeline/lib';

describe('Composite', () => {
    describe('constructor', () => {
        it('should be an instance of Node', () => {
            expect(
                new Composite()
            ).toBeInstanceOf(Node);
        });
    });

    describe('add', () => {
        it('should assign the child to this.children', () => {
            expect(
                new Composite()
                    .add(new Action())
                    .children[0]
            ).toBeInstanceOf(Action);
        });

        it('should throw an error if the child is not a Node', () => {
            expect(
                () => new Composite().add({})
            ).toThrow(new Error(Errors.CHILD_INVALID));
        });
    });

    describe('execute', () => {
        it('should reject with a not implemented error', () => {
            return expect(
                new Composite().execute()
            ).rejects.toEqual(new Error(Errors.NOT_IMPLEMENTED));
        });
    });
});
