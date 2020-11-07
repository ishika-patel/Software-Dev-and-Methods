var counter = 0;

function addCard(id) {
	counter++;
	var i_id = id + "" + counter;
	var tweet = $('<div id="' + i_id + '" class="card" style="width: 18rem"><button onclick="deleteCard(\'' + i_id + '\')" type="button" class="btn btn-danger btn-circle btn-sm">-</button><img class="card-img-top" src="https://logodix.com/logo/1005877.gif" alt="twitter logo" height="100%" width="100%"></img><div class="card-body"><h4 class="card-title">Tweet</h4><p class="card-text">Sample Tweet Text</p></div></div>');
	tweet.appendTo(document.getElementById(id));
	console.log(i_id);
}

function deleteCard(id) {
	console.log(id);
	document.getElementById(id).remove();
}