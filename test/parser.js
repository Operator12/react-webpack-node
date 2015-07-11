var example = "138469 P10 10/07/2015 5168742327989343-0        5.92 840      128.01 D EPAY 020010000008298 DNI00002 20700B SHOP EVA-12A,DNEPROPETROVS,DNEPROPETROVS,UA";
function process(data){
    var words = data.split(" ").filter(function (word){
        return word !== "";
    });

    var date = words[2];
    var cardNumber = words[3];
    var cardNumberMasked = cardNumber.substring(0, cardNumber.indexOf("-"));
    cardNumberMasked = cardNumberMasked.substring(0, 4) + "****" + cardNumberMasked.substring(cardNumberMasked.length-4, cardNumberMasked.length);
    var amount = words[6];
    var shopType = words[12];
    var shopAddress = words[13];
    var shopAddressParts = shopAddress.split(",").filter(function (word){
        return word !== "";
    });
    var shopAddressComplete = shopAddressParts[0] + "," + shopAddressParts[1];
    return "Дата операции - " + date + ", карта - " + cardNumberMasked + ", сумма операции - " + amount + ", торговая точка - " + shopType + " " + shopAddressComplete;
}

console.log(process(example));