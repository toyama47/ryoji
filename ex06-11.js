
var cnt = document.timer1.moji1.value.length;
//文字が全部表示されているか確認
if ( cnt < 11 ) { 
//現在より1文字多く切り出して表示
document.timer1.moji1.value = str.substr(0,cnt+1); } else {
//全て表示されたら、空文字に戻す
document.timer1.moji1.value = ""; }  
//setTimeout()を含む関数を呼び出す
setTimeout("hyoji1()",1000); }
