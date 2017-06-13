var SimpleHandler = function(){};
SimpleHandler.prototype = {
    request: function(method, url, callback) {
        var xhr = this.createXhrObejct();
        xhr.onreadystatechange = function(){
            if (xhr.readyState !== 4) {return;}
            (xhr.status === 200) ? callback.success(xhr.responseText) :
            callbacl.fail(xhr.status);
        };
        xhr.open(method, url, true);
        xhr.send();
    },
    createXhrObejct: function(){
        var methods = [
            function(){return new XMLHttpRequest();},
            function(){return new ActiveXObject('Msm12.XMLHTTP');},
            function(){return new ActiveXObject('Microsoft.XMLHTTP');},
        ];
        for (var i = 0, len = methods.length; i < len; i++) {
            try {
                methods[i];
            } catch(e) {
                continue;
            }
            this.createXhrObejct = methods[i];
            return methods[i]();
        }
        throw new Error('SimpleHandler: Could not create an XHR object');
    }
}

var myHandler = new SimpleHandler();
var callback = {
    success: function(res) {console.log('Success', res)},
    fail: function(status) {console.log('Fail', status)}
};
myHandler.request('get', url, callback);