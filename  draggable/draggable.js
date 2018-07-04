//获取目标元素对象
var oElem = document.getElementById('target');

//保存鼠标初始位置
var startX = 0;
var startY = 0;

// 使用transform控制元素移动 先判断是否支持

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

// ie用currentStyle来获取元素样式 和其他的浏览器不同
function getStyle(elem, property) {
    return document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(elem, false)[property] : elem.currentStyle[property];
}

//获取元素初始化位置
function getTargetPos(elem) {
    var pos = {x: 0, y: 0};
    var transform = getTransform();
    if(transform) {
        var transformValue = getStyle(elem,transform);
        if(transformValue == 'none') {
            elem.style[transform] = 'translate(0, 0)';
            return pos;
        } else {
            var temp = transformValue.match(/-?d+/g);
            return pos = {
                x: parseInt(temp[4].trim()),
                y: parseInt(temp[5].trim())
            }
        }
    } else {
        if(getStyle(elem, 'position') == 'static') {
            elem.style.position = 'relative';
            return pos;
        } else {
            var x = parseInt(getStyle(elem, 'left') ? getStyle(elem, 'left') : 0);
            var y = parseInt(getStyle(elem, 'top') ? getStyle(elem, 'top') : 0);
            return pos = {
                x: x,
                y: y
            }
        }
    }
}

//设置目标位置
// pos = { x: 200, y: 100 }
function setTargetPos(elem, pos) {
    var transform = getTransform();
    if(transform) {
        elem.style[transform] = `translate(${pos.x}px, ${pos.y}px)`;
    } else {
        elem.style.left = `${pos.x}px`;
        elem.style.right = `${pos.y}px`;
    }
    return elem;
}

//绑定在mousedown上的回调
function start(event) {
    startX = event.pageX;
    startY = event.pageY;

    //获取初始位置
    var pos = getTargetPos(oElem);
    sourceX = pos.x;
    sourceY = pos.y;

    //绑定
    document.addEventListener('mousemove', move, false);
    document.addEventListener('mouseup', end, false);
}

function move(event) {
    // 获取鼠标当前位置
    var currentX = event.pageX;
    var currentY = event.pageY;

    //  计算差值
    var distanceX = currentX - startX;
    var distanceY = currentY - startY;

    //计算并设置元素当前位置
    setTargetPos(oElem,{
        x: (sourceX + distanceX).toFixed(),
        y: (sourceY + distanceY).toFixed()
    })
}

function end(event) {
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', move);
}