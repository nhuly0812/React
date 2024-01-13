var age = 35;
age ="bala";
console.log(age);

//cách thông thường
        let arr = [1,2,3];
    //thêm phần tử thông thường
        arr[3] = "bala";
        console.log(arr[3]);
     //thêm phần tử theo ES6
        arr = [...arr,"coc"];
        console.log(arr);
//cách khác của ES6
        const [,,,str] = arr;
        console.log(str); //lấy ra đc bala
        const [item1, ...conlai] = arr;
        console.log('Giá trị 1:',item1,'Giá trị còn lại:',conlai);
        


let user = {
    name: "nhuly",
    age: 19,
    isMale: false,
}
//cách thêm của js 
user.phone = "0988344444";
//cách thêm của es6
user = {...user, phone:"0988344444"}
console.log(user);

//Arrow function ES6
const sumCal = (a,b) =>{
    return a+b;
};
console.log(sumCal(2,5));
console.log(sumCal("2","5")); 


