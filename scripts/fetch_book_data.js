async function fetchBookData(link) {
    try {
        // get the response from our json file stored on github
        const paper_response = await fetch(link);
        // convert the response into json format
        const paper_data = await paper_response.json();

        // Get the container the papers will be stored in
        const papers_div_container = document.querySelector("#papers-container");

        // The json data has 1 top level element (books) that all other elements are stored in, so we loop
        // on paper_data.books 
        for (let element of paper_data.books) {
            // For each new paper, create a div that displays flex column, and add the class individual-papers
            const temp_div = document.createElement('div');
            temp_div.style.display = "flex";
            temp_div.style.flexDirection = "column";
            temp_div.classList.add('individual-papers');

            // Create a title element for each paper
            const paper_title = document.createElement('h4');

            // const split_title_str = element.title.substring("-")
            // console.log(split_title_str);

            // Append the title stored in the json data to the newly created element title
            paper_title.textContent = element.title;

            // Create a p element for each paper
            const paper_pub_date = document.createElement('p');
            // Append the year the paper was created from the json data
            paper_pub_date.textContent = "Created: " + element.year;

            // Add a paperclip icon in place of where the actual paper would be
            // by creating an i element and adding the relavent fa classes
            const paper_icon = document.createElement('i');
            paper_icon.classList.add('fa-solid');
            paper_icon.classList.add('fa-paperclip');

            // Append all newly created elements in the order they will appear in the div
            temp_div.append(paper_title);
            temp_div.append(paper_icon);
            temp_div.append(paper_pub_date);

            // Append the div as a child of the papers div container
            papers_div_container.appendChild(temp_div);
        }
    // Catch any errors that may occur when attempting to process/acess the JSON file
    } catch (error) {
        console.log("Error importing data: ", error);
    }
}

fetchBookData('https://upadhayay.github.io/db.json');
