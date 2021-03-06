/**
 * Created by ggikko on 2016. 10. 22..
 */

import ggikko from '../../templates/ggikko.handlebars'

class YoutubeComponent {

    constructor() {
        let query = "https://apis.daum.net/search/image?apikey=68bb419bdb007bd752defe7dfcddbd21&q=%EB%8B%A4%EC%9D%8C%EC%B9%B4%EC%B9%B4%EC%98%A4&output=json";

        this.init(query);
    }

    init(query) {
        $.ajax({
            url: 'http://localhost:5000',
            method: "POST",
            data: {url: query},

        })
            .done(this.onSuccessRequest)
            .fail(this.onFail);
    };

    onSuccessRequest(res) {
        let json = JSON.parse(res.body);

        let items = json.channel.item;

        var element = document.getElementById('listWrapper');
        element.innerHTML = ggikko({
            url : items
            // item.image
        });

        // for (let item of items) {}
    }

    onFail(err) {
        console.log(err);
    }
}

export default YoutubeComponent;
