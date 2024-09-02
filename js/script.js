data = new Date();
// alert (`Horal local:${dat.getHours()}`);
// alert (`Horal universal:${data.getUTCHours()}`);
dias=["domingo","segunda","terça","qurta",
"quinta","sexta","sabado"];
alert(data.getHours());
alert(data.getMinutes());
alert(data.getMilliseconds());
alert(data.getDate());
alert(dias[data.getDay()]);
alert(data.getMonth());
alert(data.getFullYear());