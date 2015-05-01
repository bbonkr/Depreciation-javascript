$(function () {
    // datepicker 한글화
    $.datepicker.regional['ko'] = {
        closeText: '닫기',
        prevText: '이전달',
        nextText: '다음달',
        currentText: '오늘',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        weekHeader: 'Wk',
        dateFormat: 'yy-mm-dd',
        firstDay: 0,
        isRTL: false,
        duration: 200,
        showAnim: 'show',
        showMonthAfterYear: true,
        yearSuffix: '년',
        //yearRange: "-100:+0", // last hundred years
        yearRange: "1940:" + (new Date().getFullYear() + 10).toString(), // from 1940 to today after ten years
        showButtonPanel: true, //오늘, 닫기 버튼 보이기
        changeYear: true, //년도 선택 DDL
        changeMonth: true //월 선택 DDL
        //showOn: "button",
        //buttonText: "날짜선택", //날짜선택 이미지 버튼 - ALT 속성값
        //buttonImage: "/Common/Scripts/ExDatePicker/Picker.gif", //날짜선택 이미지 버튼 - URL /Common/Images/calendar.gif
        //buttonImageOnly: true //***달력선택은 마우스클릭으로 만 가능***
    };
    $.datepicker.setDefaults($.datepicker.regional['ko']);
});

function runDatepicker(selector) {
    if (isMobile()) {
        // mobile
        $(selector).attr('type', 'date');
    } 
    else if($.browser.chrome ){
        // chrome
        $(selector).attr('type', 'date');     
    }
    else {
        $(selector).datepicker();
    }
}