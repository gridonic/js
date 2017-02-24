import IndexTemplate from './index.html';

export default class HelloWord {
    constructor({
        name = 'Bob'
    } = {}) {
        console.log(IndexTemplate({ name }));
    }
}
