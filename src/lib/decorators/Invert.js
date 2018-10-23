import {
    Decorator,
    Errors,
    Node
} from 'behavior-pipeline/lib';

export class Invert extends Decorator {
    constructor(params) {
        super(params);

        this.child = params.child;
    }

    execute(params, blackboard) {
        if (this.child && this.child instanceof Node) {
            return this.child.execute(params, blackboard)
                .then(() => {
                    throw new Error(Errors.DECORATOR_INVERTED);
                })
                .catch(error => {
                    if (error.message === Errors.DECORATOR_INVERTED) {
                        throw error;
                    }
                    
                    return params;
                });
        }

        return Promise.reject(new Error(Errors.CHILD_INVALID));
    }
}
