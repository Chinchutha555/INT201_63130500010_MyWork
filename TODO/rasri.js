// ทดสอบเขียนโปรแกรมหาราศีเกิด

function rasri(year){
    let cha = year % 12
    switch(cha){
        case 11:
            cha ="sheep"
            break;
        case 10:
            cha ="horse"
            break;
        case 9:
            cha ="snake"
            break;
        case 8:
            cha ="dragon"
            break;
        case 7:
            cha ="rabbit"
            break;
        case 6:
            cha ="tiger"
            break;
        case 5:
            cha ="ox"
            break;
        case 4:
            cha ="rat"
            break;
        case 3:
            cha ="pig"
            break;
        case 2:
            cha ="dog"
            break;
        case 1:
            cha ="rooster"
            break;
        case 0:
            cha ="monkey"
            break;
    
    }return cha
}
console.log(rasri(1900))