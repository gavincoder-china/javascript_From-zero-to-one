const tax = 0.08;
const price = 3000;
const max = 5000;
const add = 500;
var remain = prompt("请输入您的银行余额");
var sum = 0;

function print(sum, remain) {
    alert("您的余额还有" + "$" + remain + "，本次消费" + "$" + sum.toFixed(2));
}

function Tax(sum) {
    return sum + sum * tax;
}

while (sum < remain&&sum+price<remain) {
    sum = sum + price;
    if (sum < max) {
        sum = sum + add;
    }
    sum = Tax(sum);
    remain = remain - sum;
}

print(sum, remain);
