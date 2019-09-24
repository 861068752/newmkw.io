var regBtn = document.querySelector('#zhuce');
var mask = document.querySelector('.mask');
var form = document.querySelector('.form');
 regBtn.onclick = function(){
  
  mask.style.display = 'block';
  form.style.display = 'block';
  
  
}
const loginBtn = document.querySelectorAll("input[type=button]")[0];
    //注册按钮
    const registerBtn = document.querySelectorAll("input[type=button]")[1];
    const closeBtn = document.querySelectorAll("input[type=button]")[2];
    //用户名输入框
    const userInp = document.querySelector("input[type=text]");
    //密码输入框
    const passwordInp = document.querySelector("input[type=password]");
    
    var t1 =document.getElementsByClassName('t1')[0];
    var t2 =document.getElementsByClassName('t2')[0];
    
    //你想存成什么格式：
    //key:register
    //value:[{name:"",password:""},{name:"",password:""}]
    //需要有一个数组，里面存放所有用户的信息，初始值为[]
    closeBtn.onclick = function(){
      
      mask.style.display = 'none';
       form.style.display = 'none';
      
      
    }
    
    
     var arr = document.querySelectorAll('input');
    arr[0].onblur = function (){
       
//     var span = this.nextSibling || this.nextElementSibling;
        if (/^[\u3040-\u309F\u4e00-\u9fa5\uf900-\ufa2d]{2,4}$/.test(this.value)){
            t1.innerHTML = '用户名可用';
            t1.className = 'success';
        }else{
            t1.innerHTML = '用户名不符合要求';
            t1.className = 'error';
        }
    };
      
    
   arr[1].onblur = function (){
     
      
//     var span = this.nextSibling || this.nextElementSibling;
        if (/^[\da-zA-Z]{6,18}$/.test(this.value)){
            t2.innerHTML = '密码格式正确';
            t2.className = 'success';
        }else{
            t2.innerHTML = '只允许使用英文字母和数字，范围6~18';
            t2.className = 'error';
        }
    };
      
    
    
    let userArray = window.localStorage.getItem("zhuce")||"[]";
    userArray = JSON.parse(userArray);
    //注册流程
    registerBtn.onclick=()=>{
        let username = userInp.value;
        let password = passwordInp.value;
        let user = {name:username,password:password};
        //重名不允许注册
        for(let i=0;i<userArray.length;i++){
            if(userArray[i].name==username){
                alert("该用户名以被占用,请重新输入");
                return;
            }else{
               alert("注册成功，请登录！");
              
            }
        }
        userArray.push(user);
        window.localStorage.setItem("zhuce",JSON.stringify(userArray))
    }
    //登录流程
    loginBtn.onclick=()=>{
        let username = userInp.value;
        let password = passwordInp.value;
        //如果用户名和密码相同则登录成功
        for(let i=0;i<userArray.length;i++){
            if(userArray[i].name==username){
                if(userArray[i].password==password){
                    alert("恭喜你登录成功！3秒后跳转回首页...")
                }
                return;
            }
        }
    }
