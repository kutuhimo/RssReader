function newkwDisp() {
  state.innerHTML = "処理中です・・・<br />\n";
  var url = "../php/newkw.php";
  var paramList = "";

  new Ajax.Request(url,
    {
      method: 'get',
      onSuccess: getData,
      onFailure: showErrMsg,
      parameters: paramList
  });

  function getData(data){
    var rdf ="http://www.w3.org/1999/02/22-rdf-syntax-ns#";
    var response;

    if(document.all){
      response = data.responseXML.getElementsByTagName('rdf:RDF');
    }else{
      response = data.responseXML.getElementsByTagNameNS(rdf,'RDF');
    }

    var item = response[0].getElementsByTagName('item');
    var tmpHtml="";

    for(i = 0; i < item.length; i++){
      var title = item[i].getElementsByTagName('title');
      var titleValue = title[0].firstChild.nodeValue;

      var link = item[i].getElementsByTagName('link');
      var linkValue = link[0].firstChild.nodeValue;

      var dc ="http://purl.org/dc/elements/1.1/";
      var dcDate;

      if(document.all){
        dcDate = item[i].getElementsByTagName('dc:date');
      }else{
        dcDate = item[i].getElementsByTagNameNS(dc,'date');
      }

      var dcDateValue = dcDate[0].firstChild.nodeValue;

      tmpHtml += dcDateValue + "　:"
      tmpHtml += "<a href='" + linkValue + "' target='_blank'>" + titleValue + "</a>";
      tmpHtml += "<br />\n";
    }

    result.innerHTML = tmpHtml;
    state.innerHTML = "データを取得しました。<br />\n";

  }

  function showErrMsg(){
    clearDisp();
    state.innerHTML = "データを取得できませんでした。<br />\n";
  }

}