import {
    Decorator,
    Errors,
    Node
} from 'behavior-pipeline/lib';

const defaults = { name: 'Fulfill', properties: {} };

export class Fulfill extends Decorator {
    constructor(params = defaults) {
        super({ ...defaults, ...params });
    }

    execute(params, blackboard) {
        if (this.child && this.child instanceof Node) {
            return this.child.execute(params, blackboard)
                .catch(() => {
                    return params;
                });
        }

        return Promise.reject(new Error(Errors.CHILD_INVALID));
    }
}
