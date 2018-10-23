/* eslint-env jest */

import {
    Errors
} from 'behavior-pipeline/lib';

import {
    Node
} from 'behavior-pipeline/lib/common/Node';

describe('Node', () => {
    describe('constructor', () => {
        it ('assigns defaults if no parameters exist', () => {
            expect(
                new Node()
            ).toEqual({ name: 'Node', properties: {} });
        });

        it('accepts a name as a parameter', () => {
            expect(
                new Node({ name: 'test' })
            ).toEqual({ name: 'test', properties: {} });
        });

        it('accepts properties as a parameter', () => {
            expect(
                new Node({ properties: 'foo' })
            ).toEqual({ name: 'Node', properties: 'foo' });
        });
    });

    describe('add', () => {
        it('should throw a not implemented error', () => {
            expect(
                () => new Node().add()
            ).toThrow(new Error(Errors.NOT_IMPLEMENTED));
        });
    });

    describe('execute', () => {
        it('should reject with a not implemented error', () => {
            return expect(
                new Node().execute()
            ).rejects.toEqual(new Error(Errors.NOT_IMPLEMENTED));
        });
    });
});
