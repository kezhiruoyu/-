	const customName = document.getElementById('customname');
	const randomBtn = document.getElementById('randomBtn');
	const story = document.querySelector('.story');

	function randomValueFromArray(array){
	  const random = Math.floor(Math.random() * array.length);
	  return array[random];
	}


    const storyText = '外边有34度，于是:inserta:出去遛弯。当走到:insertb:时他们被眼前的景象惊呆了，然后就:insertc:。李雷全程目睹但他并没有慌，因为:inserta:是一个270斤的胖子，天气又辣么热。';
    const insertA = ['怪兽威利', '大老爹', '圣诞老人'];
    const insertB = ['救助站', '迪士尼乐园', '白宫'];
    const insertC = ['自燃了', '在人行道化成了一坨泥', '变成一条鼻涕虫爬走了'];

	if(randomBtn == null) {
		alert("null");
	}
	randomBtn.addEventListener('click', generateJoke);

	function generateJoke() {
	  var newStory = storyText;

	  var aItem = randomValueFromArray(insertA);
	  var bItem = randomValueFromArray(insertB);
	  var cItem = randomValueFromArray(insertC);

	  newStory = newStory.replace(':inserta:', aItem);
	  newStory = newStory.replace(':insertb:', bItem);
	  newStory = newStory.replace(':insertc:', cItem);
	  newStory = newStory.replace(':inserta:', aItem);

	  if(customName.value !== '') {
		const name = customName.value;
		newStory = newStory.replace('李雷', name);
	  }

	  story.textContent = newStory;
	  story.style.visibility = 'visible';
	}
