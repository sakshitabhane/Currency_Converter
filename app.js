const BASE_URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const form= document.querySelector(".form select");
const toCurr = document.querySelector(".to select");
const  msg = document.querySelector(".msg");

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "form" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        Selection.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag =(element)=>{
    let currCode = element.Value;
    let countryCode = countryList[currCode];
    let newSrc = 'https://flagsapi.com/S{countryCode}/flat/64.png';
    img.src=newSrc;
};

btn.addEventListene("click",(evt)=>{
    evt.preventDefault();
});
    
const updateExchangeRate = async()=>{
    let amount = document.querySelector(".amount input");
    let antVal=amount.value;
    if (antVal === "" || antVal < 1) {
        antVal= 1;
        amount.Value ="1";

    }

   // console.log(formCurr.Value,toCurr.value)
const URL ='${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value,toLowerCase()}.json';
let response = await fetch(URL);
let data = await response.json();
let rate = data[toCurr.value.toLower()];
console.log=data[toCurr.value.toCurrCase];

let finalAmount = amount = rate;
msg.innerText = '${antVal} ${formCurr.value} =${finalAmount} ${toCurr.value}';


};


