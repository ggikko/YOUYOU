/**
 * Created by ggikko on 2016. 10. 22..
 */

import youtube from './component/Youtube.js';
import css from '../css/style.css';

class App{

    constructor(){
        new youtube();
    }
}

export default App;

window.oApp = new App();