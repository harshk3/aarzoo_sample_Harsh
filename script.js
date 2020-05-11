
$(document).ready(function()){

var myquery ;

var url='https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20110101&end_date=20200101&%20&api-key=xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei';
$('#Box').click(function (){
console.log("check");
  myquery=$("#article");
url += '&q='+myquery;

  loadJSON(url,gotData);

}
function gotData(data){
  var article = data.response.docs;
  console.log(article)
  for (var i=0; i<10;i++){
    createElement('h2', article[i].pub_date);
    createElement('h3', articlei[i].abstract);
    createElement('h4', article[i].source);
    createElement('h1',article[i].headline.main);
    createElement('h5', article[i].web_url);
    $('.final').append();
}

});
});
