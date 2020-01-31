const Debug = {
    data () {
        return {}
    },  

    methods : { 

        lg(data) {
            var result = '-------- EMPTY DATA -------';
            if (data) result = this.debugPrintf(data); // --- формируем строку из массива
            this.debugOpenWindow(result);              // --- показываем результат в новом окне
        },
        
        debugOpenWindow(result, href = '') {
            var modal = window.open('', '', 'scrollbars=1');
            var style = 'button { padding:10px; margin:10px; border:0px grey solid; width:30%; cursor:ponter  }'
                + ' .lg-view-result { border:2px red solid; }';
            var html = '<!DOCTYPE html><head><style>' + style + '</style><head>'
                + '<p><button onclick="window.close();" >Close</button></p><hr>'
                + '<p class="lg-view-result" ><pre>' + result + '</pre></p>';
            modal.document.body.innerHTML = html;
        },

        debugPrintf(arr) {
            var strResult = '', deLimiter = ' => ';
            var typeObj = typeof (arr);
            if (typeObj == 'object') {
                for (var i in arr) {
    
                    var values = arr[i];
                    var subValues = '';
                    var li = deLimiter;
                    if (typeof (values) == 'object') {
                        subValues = this.debugPrintf(values);
                    } else {
                        li += values;
                    }
    
                    strResult += '<li>[' + i + ']' + li + '</li>' + subValues;
                }
            }
            else strResult = '<li>' + arr + '</li>';
    
            return '<ul>' + strResult + '</ul>';
        },
 
    },
};

export default Debug;