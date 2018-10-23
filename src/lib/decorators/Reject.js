import {
    Node,
    Decorator,
    Errors
} from 'behavior-pipeline/lib';

const defaults = { name: 'Reject', properties: {} };

export class Reject extends Decorator {
    constructor(params = defaults) {
        super({ ...defaults, ...params });
    }

    execute(params, blackboard) {
        if (this.child && this.child instanceof Node) {
            return this.child.execute(params, blackboard)
                .then(() => {
                    throw new Error(Errors.DECORATOR_REJECTED);
                });
        }

        return Promise.reject(new Error(Errors.CHILD_INVALID));
    }
}
