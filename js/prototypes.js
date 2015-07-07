/*!
 * Copyright 2011-2015 Pon Cheol Ku 
 * Licensed under MIT (https://github.com/bbonkr/Depreciation-javascript/blob/master/LICENSE.md)
 */

String.prototype.padLeft = function(padChar, length){
    var tmp = this;
    var tmpLen = tmp.length;
    if(!padChar || padChar.length == 0){return tmp;}
    var pc = padChar.substring(0, 1);

    if(tmp.length >= length){return tmp;}
    
    while(tmpLen < length){
        tmp = padChar + tmp;
        tmpLen++;
    }

    return tmp;
};

Date.prototype.dateSeperator = '-';
Date.prototype.timeSeperator = ':';

Date.prototype.setDateSeperator=function(seperator){
    this.dateSeperator = seperator;
};

Date.prototype.getDateSeperator=function(){
    return this.dateSeperator;
};

Date.prototype.setTimeSeperator=function(seperator){
    this.timeSeperator = seperator;
};

Date.prototype.getTimeSeperator=function(){
    return this.timeSeperator;
};

Date.prototype.getDateString = function(){
    var d = this;
    var dateSeperator = d.dateSeperator;
    var datetime = '';

    datetime += d.getFullYear();
    datetime += dateSeperator;
     // january = 0
    datetime += (d.getMonth() + 1).toString().padLeft('0', 2);
    datetime += dateSeperator;
    datetime += d.getDate().toString().padLeft('0', 2);

    return datetime;
};

Date.prototype.getTimeString = function(){
    var d = this;
    var timeSeperator = d.timeSeperator;
    var datetime = '';

    datetime += d.getHours().toString().padLeft('0', 2);
    datetime += timeSeperator;
    datetime += d.getMinutes().toString().padLeft('0', 2);
    datetime += timeSeperator;
    datetime += d.getSeconds().toString().padLeft('0', 2);

    return datetime;
};

Date.prototype.getDateTimeString = function(){
    var d = this;
    var datetime = '';

    datetime += d.getDateString();
    datetime += ' ';
    datetime += d.getTimeString();

    return datetime;
};
