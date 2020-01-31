import Axios from 'axios';

Axios.defaults.headers = {
    'Content-Type': 'application/json',
    //  xsrfCookieName: 'XSRF-TOKEN',
    //  xsrfHeaderName: 'X-XSRF-TOKEN',
    // 'Access-Control-Allow-Origin': '*',
    // 'withCredentials': true
    // 'Authorization': 'myspecialpassword'
};

const Http = {

    data() { 
        return { 
            apiUrl : 'http://bolderfest.ru/CONTROL_DB_INTERFACE/api.php',
            tokenName : 'jwt_token',
        }
    }, 

    methods: {

        http(url, method = 'get', data = null) {    

            url = this.apiUrl + url;

            return new Promise((resolve, reject) => {
                Axios[method](url, data)
                    .then(response => {
                        let result = this.httpResponseProcessing(response, url);
                        let respData = result.data;

                        switch (result.status) {
                            case 1:
                                reject(respData);
                                break;
                            case 2:
                                resolve(respData); 
                                break;
                        }

                    }).catch(error => {

                        let message = 'Http : "catch error" (код ответа не 200)';
                        this.errorShow(error, message);
                        throw error;

                    });
            })
        },

        httpResponseProcessing(response, url) {

            let result = {};
            let status = '';

            if (response.data.error) {
                let message = 'Http : "response.data.error" (Ошибка данных на сервере) ';
                this.errorShow( response.data.error, message);
                result = { status : 1 , data : response.data.error };
                status = 'data(error)';
            } 

            if (response.data.result instanceof Object) {
                status = 'data(OK)';
                result = { status : 2 , data : response.data.result };
            } else {
                status = 'data.result (Not Object)';
                let message = 'Http : "с сервера вернулась строка (должен json)" ';
                this.errorShow(response, message);
                result = { status : 3 , data : message };
            }  

            console.log('--- apiUrl ---:', url);
            console.log('--- HttpStatus ---:', status);

            return result;
        },

        errorShow(data, title = '') {
            let result = {};
            if(title) result = { title , data};
            else      result = data;   
            this.lg(result);
        },
        
        testHttpService() {
            alert('111111rtyyyy');
        },
      
    },      
}


export default Http;


