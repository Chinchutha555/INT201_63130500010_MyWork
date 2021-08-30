// ทดสอบเขียนโปรแกรมซื้อลอตเตอรี่

function lotto(lotto_number){

let correct = Math.floor(Math.random()*1000) 

console.log("เลขที่คุณซื้อคือ " + lotto_number)
console.log("เลขที่ออกคือ " + correct)

if (lotto_number == correct) {
    console.log("คุณถูกรางวัล")
}else {
    console.log("คุณไม่ถูกรางวัล")
}
}
(lotto(609))