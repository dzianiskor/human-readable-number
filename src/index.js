const units = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
const dozens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero'
    }
    let num = ('000000000' + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    let str = '';
    str += (num[1] != 0) ? (units[Number(num[1])] || dozens[num[1][0]] + ' ' + units[num[1][1]]) : '';
    str += (num[2] != 0) ? (units[Number(num[2])] || dozens[num[2][0]] + ' ' + units[num[2][1]]) : '';
    str += (num[3] != 0) ? (units[Number(num[3])] || dozens[num[3][0]] + ' ' + units[num[3][1]]) + 'thousand ' : '';
    str += (num[4] != 0) ? (units[Number(num[4])] || dozens[num[4][0]] + ' ' + units[num[4][1]]) + 'hundred ' : '';
    str += (num[5] != 0) ? ((str != '') ? '' : '') + (units[Number(num[5])] || dozens[num[5][0]] + ' ' + units[num[5][1]]) : '';

    return str.trim();
}
