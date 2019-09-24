  // 1. 获取textarea, button, blog的dom对象
    var textArea = document.getElementById('content');
    var send = document.getElementById('send');
    var blog = document.getElementById('blog');
    // 2. 给button添加点击事件
    send.onclick = function(){
        // 获取textarea的内容
        var txt = textArea.value;

        var header = createHeader();
        var footer = createFooter();
        var content = createContent(txt);
        // 创建div节点
        var div = document.createElement('div');
        // 把header, footer和content都添加到这个div里
        div.appendChild(header);
        div.appendChild(content);
        div.appendChild(footer);
        // 获取blog的第1个节点
        var children = blog.children;
        // 如果没有第1节点直接把div添加到blog中，如果有把div添加到blog的第1个节点之前
        /*if (children.length > 0){
            blog.insertBefore(div, children[0]);
        }else{
            blog.insertBefore(div, null);
        }*/
        blog.insertBefore(div, children.length>0?children[0]:null);
    };

    /**
     * 创建头部结构
     */
    function createHeader(){
        // 创建div节点
        var div = document.createElement('div');
        div.className = 'blog_header';
        // 创建img节点
        var img = document.createElement('img');
        // 设置img的src
       
        img.className = 'wenwu';
        // 创建用户名的文本节点
        var userNameNode = document.createElement('span');
        var userTN = document.createElement('TextNode');
        // 设置用户名
        userTN.innerText = 'hello World'
        userNameNode.appendChild(userTN);
        userNameNode.className = 'blog_username';
        // 创建时间节点
        var timeNode = document.createElement('span');
        var timeTN = document.createElement('TextNode');
        timeTN.innerText = '1分钟前';
        // 设置时间
        timeNode.appendChild(timeTN);
        timeNode.className = 'blog_time'
        // 创建from节点
        var fromNode = document.createElement('span');
        var fromTN = document.createElement('TextNode');
        fromTN.innerText = '来自　慕课imooc.com';
        // 设置from的内容
        fromNode.appendChild(fromTN);
        fromNode.className = 'blog_from'
        // 设置关闭节点
        var closeNode = document.createElement('span');
        var closeTN = document.createElement('TextNode');
        closeTN.innerHTML = '&bigotimes;'
        closeNode.appendChild(closeTN);
        closeNode.className = 'blog_close';
        // 给关闭节点添加点击事件
        closeNode.onclick = close;
        // 把以上所有节点都添加到div节点中
        div.appendChild(img);
        div.appendChild(userNameNode);
        div.appendChild(timeNode);
        div.appendChild(fromNode);
        div.appendChild(closeNode);
        
        // 返回div
        return div;
    }
    /**
     * 创建脚部结构
     */
    function createFooter(){
        // 定义数组，保存脚部的内容
        var arr = ['推广','转发','评论','赞'];
        // 创建ul节点
        var ul = document.createElement('ul');
        // 循环数组
        for (var i=0;i<arr.length;i++) {
            // 创建文本节点，添加数组的第i个数组到文本节点中
            var tn = document.createElement('TextNode');
            tn.innerText = arr[i];
            // 创建li节点
            var li = document.createElement('li');
            li.className = 'li';
            // li添加文本节点
            li.appendChild(tn);
            // ul添加li节点
            ul.appendChild(li);
        }
        // 返回ul
        return ul;
    }
    /**
     * 创建正文结构
     */
    function createContent(txt){
        // 创建文本节点
        var tn = document.createElement('TextArea');
        // 把textarea的内容设置到文本节点中
        tn.innerText = txt;
        // 创建div节点
        var div = document.createElement('div');
        // 给div节点设置class
        div.className = 'blog_content';
        // 把文本节点添加到div中
        div.appendChild(tn);
        // 返回div节点
        return div;
    }

    function close(){
        var parent = this.parentNode.parentNode;
        blog.removeChild(parent);
    }
