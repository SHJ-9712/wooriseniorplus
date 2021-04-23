$('#agree_chk3').on('click', function(){
    $('#agree_chk1, #agree_chk2').prop('checked', this.checked);
});
$('#agree_chk1, #agree_chk2').on('click', function(){
    if(!this.checked) {
        $('#agree_chk3').prop('checked', false);
    }
});
function nextJoin() {
    if(!$('#agree_chk1').is(':checked')) {
        alert('서비스이용약관에 동의해 주세요');
    } else if(!$('#agree_chk2').is(':checked')) {
        alert('개인정보 수집 및 이용에 동의해 주세요');
    } else {
        $('#joinForm').submit();
    }
}