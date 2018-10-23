/* eslint-env jest */

import {
    Action,
    Errors,
    Node
} from 'behavior-pipeline/lib';

describe('Action', () => {
    describe('constructor', () => {
        it('should be an instance of Node', () => {
            expect(
                new Action()
            ).toBeInstanceOf(Node);
        });
    });

    describe('add', () => {
        it('should throw a not implemented error', () => {
            expect(
                () => new Action().add()
            ).toThrow(new Error(Errors.NOT_AVAILABLE));
        });
    });

    describe('execute', () => {
        it('should reject with a not implemented error', () => {
            return expect(
                new Action().execute()
            ).rejects.toEqual(new Error(Errors.NOT_IMPLEMENTED));
        });
    });
});
