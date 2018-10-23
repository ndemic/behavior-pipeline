import {
    Errors
} from 'behavior-pipeline/lib';

const defaults = { name: 'Node', properties: {} };

export class Node {
    constructor(params = defaults) {
        params = {
            ...defaults,
            ...params
        };

        this.name = params.name;
        this.properties = params.properties;
    }

    add() {
        throw new Error(Errors.NOT_IMPLEMENTED);
    }

    execute() {
        return Promise.reject(new Error(Errors.NOT_IMPLEMENTED));
    }
}
