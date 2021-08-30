// ทดสอบเกมทายเลข 1-10

function guest(krok){
    let soom = Math.floor(Math.random()*10+1)
    console.log("เลขที่ออก : " + soom)
    console.log("เลขที่ทาย : " + krok)

    if (soom == krok) {
        console.log("You WIN!")
    }else if (krok>soom) {
        console.log("Too High")
    }else if (krok<soom) {
        console.log("Too Low")
}
}
guest(10)