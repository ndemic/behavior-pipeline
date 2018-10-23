import {
    Composite
} from 'behavior-pipeline/lib';

const defaults = { name: 'Selector', children: [], properties: {} };

export class Selector extends Composite {
    constructor(params = defaults) {
        super({ ...defaults, ...params });
    }

    execute(params, blackboard) {
        const execute = (current, output) => {
            var child = this.children[current++];

            if (child) {
                return child.execute(output, blackboard).then(o => {
                    return o;
                }).catch(() => {
                    return execute(current, params)
                });
            }

            return Promise.resolve(output);
        };

        var index = 0;

        return execute(index, params).then(output => output);
    }
}
