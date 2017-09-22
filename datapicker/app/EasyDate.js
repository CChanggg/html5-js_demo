class EasyDate{
    constructor() {

    }
    static isLeapYear(year){
        if (year%100 ===0) {
            return year%400 === 0;
        }
        return year%4 === 0;
    }
    static isDate(string,format){
        format = format || defaultFormat;
        string = string.toString();
        let pos = [];
        let regexps = [/d+/gi, /y+/gi, /m+/gi];
        let origin = format;
        regexps.forEach( regexp => {
          format = format.replace(regexp, match => {
            pos.push(match.substr(0, 1));
            return '(\\d{' + match.length + '})';
          });
        });
        let regexp = new RegExp(`^${format}$`);
        let check = string.match(regexp);
        if (!check) {
          return check;
        }
        let result = { };
        ['y', 'm', 'd'].forEach(key => {
          let regexp = new RegExp(`${key}+`, 'gi');
          origin.replace(regexp, (match, i) => {
            result[key] = string.substr(i, match.length);
          });
        });
        return `${result.y}-${result.m}-${result.d}`;
    
    }
}
module.exports = EasyDate;