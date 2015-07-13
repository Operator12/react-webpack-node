export default function (data){
    if (typeof data !== "string"){
        return;
    }

    var words = data.split(" ").filter(function (word){
        return word !== "";
    });

    var date = words[2];
    var cardNumber = words[3];
    if (cardNumber === undefined){
        return;
    }
    var cardNumberMasked = cardNumber.substring(0, cardNumber.indexOf("-"));
    cardNumberMasked = cardNumberMasked.substring(0, 4) + "****" + cardNumberMasked.substring(cardNumberMasked.length-4, cardNumberMasked.length);
    var amount = words[6];
    var shopType = words[12];
    var shopAddress = words[13];
    if (shopAddress === undefined){
        return;
    }
    var shopAddressParts = shopAddress.split(",").filter(function (word){
        return word !== "";
    });
    var shopAddressComplete = shopAddressParts[0] + "," + shopAddressParts[1];
    return "Дата операции - " + date + ", карта - " + cardNumberMasked + ", сумма операции - " + amount + ", торговая точка - " + shopType + " " + shopAddressComplete;
}