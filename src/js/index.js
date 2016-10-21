/**
 * Created by ggikko on 2016. 10. 22..
 */

import youtube from './component/Youtube.js'

class App{

    constructor(){
        new youtube();
    }
}

export default App;

window.oApp = new App();