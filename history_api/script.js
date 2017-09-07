(function() {
    function createState($content) {
        var state = {
            content: $content.find('.content').html(),
            photo: $content.find('.phone').attr('src'),
            title: $content.find('.title').text()
        }
        return state
        console.log(
            $content.find('.comntent').html()
        )
    }

    function displayContent(state, reverse) {
        //太直接
        //切换
        //clone 省内存 没有克隆就要重新构造
        // 与性能优化有关 
        var $clone = $('.wrapper').clone()
        $clone.find('.content').html(state.content)
        $clone.find('.phone').attr('src', state.photo)
        $('.wrapper').addClass((!reverse) ? 'transition-out' : 'transition-in')
            .after($clone.addClass((!reverse) ? 'transition-in' : 'transition-out'))
            .one('webkitTransitionEnd', function() {
                $(this).remove()
            })
        setTimeout(function() {
            $clone.removeClass((!reverse) ? 'transition-in' : 'transition-out')
        }, 200)
    }
    $(document).on('click', 'a', function(evt) {
        //禁止默认页面跳转
        evt.preventDefault()
            // ajax 主动拉取 ，无刷新
            // 传统的MVC需要刷新页面是因为要获得新的http请求
            // vue-router import component 提前导入了组件 是在内存之中
        var req = $.ajax(this.href)
        req.done(function(data) {
            console.log(data)
                // 当前的浏览路径状态
            var state = createState($(data))
            displayContent(state)
                //主角 页面标题 URL都要换  this.href也能得到
            history.pushState(state, state.title, evt.target.href) // 入栈
        })
        req.fail(function() {
            // 直接刷页面
            document.location = evt.target.href
        })
    })
    window.onpopstate = function(evt) {
        if (evt.state) {
            displayContent(evt.state, true)
        }
    }
    var state = createState($('title,body'))
    history.replaceState(state, document.title, document.location.href)
})()