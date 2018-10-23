import {
    Node
} from './Node';

import {
    Errors
} from 'behavior-pipeline/lib';

const defaults = { name: 'Composite', properties: {} };

export class Composite extends Node {
    constructor(params = defaults) {
        super({ ...defaults, ...params });

        this.children = [];
    }

    add(child) {
        if (!(child instanceof Node)) {
            throw new Error(Errors.CHILD_INVALID);
        }

        this.children.push(child);

        return this;
    }

    execute() {
        return Promise.reject(new Error(Errors.NOT_IMPLEMENTED));
    }
}
