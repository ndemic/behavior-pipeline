import {
    Node
} from './Node';

import {
    Errors
} from 'behavior-pipeline/lib';

const defaults = { name: 'Decorator', properties: {} };

export class Decorator extends Node {
    constructor(params = defaults) {
        super({ ...defaults, ...params });
    }

    add(child) {
        if (this.child) {
            throw new Error(Errors.CHILD_EXISTS);
        }

        if (!(child instanceof Node)) {
            throw new Error(Errors.CHILD_INVALID);
        }

        this.child = child;

        return this;
    }

    execute() {
        return Promise.reject(new Error(Errors.NOT_IMPLEMENTED));
    }
}
