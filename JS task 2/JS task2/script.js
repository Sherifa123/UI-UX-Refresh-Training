 //converting into desired array
 var obj = {
	"Three": "15",
	"One": "22",
	"Two": "13",
	"Four": "42"
  };
  
  var arr = Object.values(obj);
  console.log(arr);
  
  //sorting the array by title value
  function sortByTitle(arr) {
	  arr.sort(function(a, b) {
		var titleA = a.title.toLowerCase();
		var titleB = b.title.toLowerCase();
		if (titleA < titleB) {
		  return -1;
		}
		if (titleA > titleB) {
		  return 1;
		}
		return 0;
	  });
	}
	
	var library =[
	  { author: 'Siva', title: 'Core Knowledge', libraryID: 3 },
	  { author: 'Ali', title: 'Pain In Insane', libraryID: 4 },
	  { author: 'Suhel', title: 'Love oF Monk', libraryID: 5 }];
   
	
	sortByTitle(library);
	console.log(library);
	
  // a string and a letter argument
  function countOccurrences(str, letter) {
	  var count = 0;
	  for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) === letter) {
		  count++;
		}
	  }
	  return count;
	}
	var str = 'hello.world';
	var letter = 'l';
	var occurrences = countOccurrences(str, letter);
	console.log(occurrences);
  
  // extracting data from json
  var json ={
    "status": "ok",
    "source": "the-next-web",
    "sortBy": "latest",
    "articles": [
        
		  {
			  "author": "Ryon Gosling",
			  "title": "La La Land",
			  "description": "After the success of The Notebook & Blue Valentine , ryon planned to act on la la land with emma stone , industry waiting for a big succees of this couples , expectations of Oscars
		  },
		  {
			  "author": "Baber Azam",
			  "title": "Power Of Pakistan",
			  "description": "New man in greens to save the pakistan cricket from the old gaints of bats and balls , a determined player who have succeded all forms of fame to pakistan and working really hard win battles for green.",
		  },
		  {
			  "author": "Nakul",
			  "title": "Soul of Songs",
			  "description": "Cute little boy started his career as a actor and slowly evolve into a musician , worked smart and did some soulful songs as a singer and composed some extraordinary musical feast for his core fans.",
			  }
	  ]
  }`;
  var data = JSON.parse(json);
  var articles = data.articles;
  var extractedData = articles.map(function(article) {
	return {
	  author: article.author,
	  title: article.title,
	  description: article.description
	};
  });
  
  console.log(extractedData);
  
  
	