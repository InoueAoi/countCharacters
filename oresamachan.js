'use strict';
const doClear = document.getElementById('do-reset'),
      doCount = document.getElementById('do-count'),
      //doPaste = document.getElementById('do-paste'),
      stringResult = document.getElementById ('length-result'),
      stringTextArea = document.getElementById ('string');

/*
window.onkeypress = () => {
  console.log(event.key);
}
*/
doClear.onclick = () => {
  stringTextArea.value = null;
  stringResult.innerText = 'もっかい数えるのだね。いいとも。';
};
doCount.onclick = countStringLength;
stringTextArea.onkeypress = () => {
  if (event.key === 'Enter') {
    countStringLength();
    doCount.focus();
  }
};
/*
document.querySelector("#do-paste").addEventListener("click", paste);
*/

function countStringLength() {
  let bunsho = stringTextArea.value,
      mojisu = bunsho.length,
      count = 0;
  if (mojisu === 0 || mojisu === 'undefind') {
    return;
  }
  console.log('length = ' + mojisu);
  for(let i = 0; i < mojisu; i++) {
    let unicode = bunsho.charCodeAt(i);

    console.log('i = ' + i);
    console.log(unicode);
    
    count++;
    if ((0xD800 <= unicode && unicode <= 0xDBFF) && unicode === bunsho.charCodeAt(i - 2)) {
      console.log('OK');
      count--;
      i++;
    } else if ((0xD800 <= unicode && unicode <= 0xDBFF) && !(unicode === bunsho.charCodeAt(i-2))) {
      i++;
    } else if (unicode > 0xDFFF) {
      count--;
    }
  }
  stringResult.innerText = ('「' + bunsho + '」' + 'は' + count + '文字です。');
}
