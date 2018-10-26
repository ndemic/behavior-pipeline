import {
    Composite
} from 'behavior-pipeline/lib';

const defaults = { name: 'Race', properties: {} };

export class Race extends Composite {
    constructor(params = defaults) {
        super({ ...defaults, ...params });
    }

    execute(params, blackboard) {
        if (this.children.length === 0) {
            return Promise.resolve([]);
        }

        return Promise.race(
            this.children.map(child => child.execute(params, blackboard))
        );
    }
}
