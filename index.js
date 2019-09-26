(function () {
	function onload(data) {
		const container = document.getElementById("plugin-container");

		let node = document.createElement("h1");
		node.append(document.createTextNode("It works!"));
		container.appendChild(node);
	
		node = document.createElement("pre");
		node.append(document.createTextNode(JSON.stringify(data)));
		container.appendChild(node);
	}
	
	registerWOPlugin("SecuritiesRecommendationEngine", () => onload(WOPortfolioProvider.isins()));
})();
