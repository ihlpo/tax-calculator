function calculate_salaries(salary){
   let weeklyPay = document.getElementById("weekly-pay");
   let monthlyPay = document.getElementById("monthly-pay")
   let annuallyPay = document.getElementById("annually-pay");

   weeklyPay.innerHTML = `$ ${(salary / 52).toFixed(2)}`;
   monthlyPay.innerHTML = `$ ${(salary / 12).toFixed(2)}`;
   annuallyPay.innerHTML = `$ ${(salary / 1).toFixed(2)}`;
}

function calculate_tax(){
   let salary = document.getElementById("payinput").value;
   let output = document.getElementById("taxoutput");
   let salary_frequecy = document.getElementById("payfreq").value;
      
   if (salary < 0){
      salary = 0;
   }

   if (salary_frequecy == "weekly"){
      salary = salary * 52;
   }
   else if (salary_frequecy == "monthly"){
      salary = salary * 12;
   }

   calculate_salaries(salary);

   if (salary <= 18200){
      output.innerHTML = `$ 0`;
   }
   else if (salary >= 18201 && salary <= 45000){
      let total = (salary - 18200) * 0.19;
      output.innerHTML = `$ ${total.toFixed(2)}`;
   }
   else if (salary >= 45001 && salary <= 120000){
      let total = ((salary - 45000) * 0.325) + 5092;
      output.innerHTML = `$ ${total.toFixed(2)}`;
   }
   else if (salary >= 120001 && salary <= 180000){
      let total = ((salary - 120000) * 0.37) + 29467;
      output.innerHTML = `$ ${total.toFixed(2)}`;
   }
   else{
      let total = ((salary - 180000) * 0.45) + 51667;
      output.innerHTML = `$ ${total.toFixed(2)}`;
   }
}


document.getElementById("payinput").addEventListener("input", calculate_tax);
document.getElementById("payfreq").addEventListener("change", calculate_tax);