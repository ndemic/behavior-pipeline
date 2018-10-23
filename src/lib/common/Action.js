import {
    Node
} from './Node';

import {
    Errors
} from 'behavior-pipeline/lib';

export class Action extends Node {
    constructor(params) {
        super(params);
    }

    add() {
        throw new Error(Errors.NOT_AVAILABLE);
    }

    execute() {
        return Promise.reject(new Error(Errors.NOT_IMPLEMENTED));
    }
}
