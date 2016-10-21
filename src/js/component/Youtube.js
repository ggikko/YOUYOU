/**
 * Created by ggikko on 2016. 10. 22..
 */

class YoutubeComponent {

    constructor() {
        let query = "https://apis.daum.net/search/image?apikey=68bb419bdb007bd752defe7dfcddbd21&q=%EB%8B%A4%EC%9D%8C%EC%B9%B4%EC%B9%B4%EC%98%A4&output=json";

        this.init(query);
    }

    init(query) {
        $.ajax({
            method: "GET",
            url: query,
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        })
            .done(this.onSuccessRequest)
            .fail(this.onFail);
    };

    onSuccessRequest(res){
        console.log(res);
    }

    onFail(err){
        console.log(err);
    }
}

export default YoutubeComponent;
