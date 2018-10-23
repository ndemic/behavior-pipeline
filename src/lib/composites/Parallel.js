import {
    Composite
} from 'behavior-pipeline/lib';

const defaults = { name: 'Parallel', children: [], properties: {} };

export class Parallel extends Composite {
    constructor(params = defaults) {
        super({ ...defaults, ...params });
    }

    execute(params, blackboard) {
        return Promise.all(
            this.children.map(child => child.execute(params, blackboard))
        )
    }
}
