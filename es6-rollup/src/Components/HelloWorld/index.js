import IndexTemplate from './index.html';

export default class HelloWord {
    constructor({
        name = 'Bob'
    } = {}) {
        document.write(IndexTemplate({ name }));
    }
}
