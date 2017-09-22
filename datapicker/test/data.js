// 测试驱动开发
// 先写测试 Data类 判断闰年 日期是否合格
// 构建功能点 不要的功能不要写 
// 功能点对待为测试点 TDD 
const should = require('should');
const EasyDate = require('../app/EasyDate');
//声明测试组
describe('Date', () => {
    describe('#isLeapYear',() => {
        // 断言
        it('是否为闰年',() => {
            // 程序运行和预期做比较，举例子 举例越多的时候越正确
            should(EasyDate.isLeapYear(2000)).be.True();
            should(EasyDate.isLeapYear(2004)).be.True(); 
            should(EasyDate.isLeapYear(2100)).be.False();    
            should(EasyDate.isLeapYear(2005)).be.False();                         
        });    
    })
    // TDD 核心开发需求，去写测试 测试驱动开发，校验日期格式
    describe('#isDate',() => {
        it('是否符合要求的日期',() => {
            let format = 'yyyy-mm-dd';
            // 测试用例 举的方法要全面
            should(EasyDate.isDate('2016-10-12',format)).be.True();
            should(EasyDate.isDate('2016-01-12',format)).be.True();
            should(EasyDate.isDate('2016-1-12',format)).be.False();            
            should(EasyDate.isDate('2016-1-1',format)).be.False();
            should(EasyDate.isDate('16-10-01',format)).be.False(); 
            should(EasyDate.isDate('2017-09-31',format)).be.False();                        
        })
    })
})

