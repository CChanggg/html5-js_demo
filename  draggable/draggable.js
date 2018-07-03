// 使用transform控制元素移动

function getTransform() {
    var transform = '',
    divStyle = document.createElement('div').style,
    transformArr = ['transform','webkitTransform','MozTransform','msTransform','OTransform'],
    i = 0,
    len = transformArr.length;
    for(;i < len; i++) {
        if(transformArr[i] in divStyle) {
            return transform = transformArr[i];
        }
    }
    return transform;
}