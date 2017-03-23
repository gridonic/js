import HelloWorld from './Components/HelloWorld';

class App {
    constructor() {
        new HelloWorld({
            name: 'Gridonic'
        });
    }
}

window.App = new App();
