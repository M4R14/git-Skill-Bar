
	$.ajaxSetup({
	    async: false
	});
	$(function(){
		total_all = 0;
		data_skill = [];
		var prog = document.createElement("progress");

		var div = $('#gitSkillBar')[0];
		user = div.attributes.user.value;

		var item = $('#gitSkillBar li');
		for (var i =  0; i < item.length; i++) {
			li = item[i];
			language = li.attributes.language.value;
			getTotal_all(user,language)
		}
		// console.log(data_skill)

		for (var i =  0; i < item.length; i++) {
			li = item[i];
			language = li.attributes.language.value;
			presen = data_skill[language]*100/total_all;

			progress = li.firstElementChild;
			progress.setAttribute("max",100);
			progress.setAttribute("value",presen);
		}    
	});

	function getTotal_all(user,language) {
		strUrl = 'https://api.github.com/search/code?q=user:'+ user +'+language:'+language;
		$.getJSON(strUrl, function(data) {
			data_skill[language] = data['total_count'];
			total_all = total_all + data['total_count'];
		});
	}
