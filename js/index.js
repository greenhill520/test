$(function() {
    $('#navigation').hover(
        function () {
            $('#nav',$(this)).stop().animate({'marginLeft':'-500px'},200);
        },
        function () {
            $('#nav',$(this)).stop().animate({'marginLeft':'-640px'},200);
        }
    );
});
$.setupJMPopups({
    screenLockerBackground: "#565d64",
    screenLockerOpacity: "0.6"
});
function openStaticPopup(num) {
    if( num == 1 ) {
        $.openPopupLayer({
            name: "myStaticPopup",
            width: 820,
            target: "myHiddenDiv"
        });
    }
    else if( num == 2 ) {
        $.openPopupLayer({
            name: "myStaticPopup",
            width: 820,
            target: "myHiddenDiv2"
        });
    }
    else if( num == 3 ) {
        $.openPopupLayer({
            name: "myStaticPopup",
            width: 820,
            target: "myHiddenDiv3"
        });
    }
    else if( num == 4 ) {
        $.openPopupLayer({
            name: "myStaticPopup",
            width: 820,
            target: "myHiddenDiv4"
        });
    }
}