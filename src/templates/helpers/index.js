const createValue = function (price, discount) {
    const value = parseFloat(price) * (parseFloat(discount) / 100);
    return parseFloat(price) - value
}

exports.getValueFromDiscount = function (price, discount) {
    return createValue(price, discount).toFixed(2).toString();
}

exports.getDiscountPrice = function (price, discount, times) {
    const fullValue = parseFloat(price) * times
    const value = createValue(price, discount) * times;
    return (fullValue - value).toFixed(2).toString();
}