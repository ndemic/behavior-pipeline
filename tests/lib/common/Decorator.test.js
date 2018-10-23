/* eslint-env jest */

import {
    Action,
    Decorator,
    Errors,
    Node,
} from 'behavior-pipeline/lib';

describe('Decorator', () => {
    describe('constructor', () => {
        it('should be an instance of Node', () => {
            expect(
                new Decorator()
            ).toBeInstanceOf(Node);
        });
    });

    describe('add', () => {
        it('should assign the child to this.child', () => {
            expect(
                new Decorator()
                    .add(new Action())
                    .child
            ).toBeInstanceOf(Action);
        });

        it('should throw an error if the child has been set already', () => {
            expect(
                () => new Decorator().add(new Action()).add(new Action())
            ).toThrow(new Error(Errors.CHILD_EXISTS));
        });

        it('should throw an error if the child is not a Node', () => {
            expect(
                () => new Decorator().add({})
            ).toThrow(new Error(Errors.CHILD_INVALID));
        });
    });

    describe('execute', () => {
        it('should reject with a not implemented error', () => {
            return expect(
                new Decorator().execute()
            ).rejects.toEqual(new Error(Errors.NOT_IMPLEMENTED));
        });
    });
});
