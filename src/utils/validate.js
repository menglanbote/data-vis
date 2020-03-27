//账号
export function isUsername  (rule, value, callback)  {
    if (value === '') {
      callback(new Error('账号不能为空'));
    } else {
      if (value !== '') { 
        var reg=/^[a-zA-Z0-9][a-zA-Z0-9_]{4,15}$/;
        if(!reg.test(value)){
          callback(new Error('请输入5-15位的正确的账号'));
        }
      }
      callback();
    }
  };

