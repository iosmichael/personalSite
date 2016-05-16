$(document).ready(function(){

	$.getJSON("data/articleIndex.json",function(data){
    	for (var i = data.length; i > 0; i--) {
    		$('.posts').append(createArticle(data[i-1]));
    	};
    	var viewMoreBtn = $('<div></div>').addClass('view-more-btn');
    	var link= $('<a></a>').attr('href','');
    	link.append("View More");
    	viewMoreBtn.append(link);
    	$('.posts').append(viewMoreBtn);
	});
	$(".blog,.gallery,.project").hover(
  		function () {
  		  $(this).find('img').transition({scale:1.4},300);
  	},
  		function () {
   		  $(this).find('img').transition({scale:1},300);
  	});

	
});

function createArticle(data){
	var date = data.date;
	var excerpt = data.excerpt;
	var article = data.article;
	var permalLink = data.permalLink;
	//create div files
	var articleBody = $('<article></article>');
	var articleWrapper = $('<div></div>').addClass('article-wrapper');
	var articleTitle = $('<div></div>').addClass('article-title');
	articleTitle.append(article);
	var articleExcerpt = $('<div></div>').addClass('article-excerpt');
	articleExcerpt.append(excerpt);
	var articleDate = $('<div></div>').addClass('article-date');
	date = "Post Date: "+date;
	articleDate.append(date);

	articleWrapper.append(articleTitle,articleExcerpt,articleDate);
	articleWrapper.attr('id',permalLink);
	articleBody.append(articleWrapper);
	return articleBody;
}
