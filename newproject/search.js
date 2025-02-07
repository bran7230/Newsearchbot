document.getElementById("searchButton").addEventListener("click", function () {//actual function 
    const query = document.getElementById("searchval1").value;//sets the url value 

    if (query.trim() === "") {//if no one types 
        alert("Please enter a search query.");
        return;
    }

    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;// sets search params
    window.open(url); //opens the url 
    result.innerHTML = "You searched = " + query + "<br>" + "URL = "+url ; //output
});