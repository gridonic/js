import HelloWorld from './Components/HelloWorld';

class App {
    constructor() {
        new HelloWorld({
            name: 'Richie'
        });
    }
}

window.App = new App();
