function toggleDetails(card){

  let details = card.querySelector(".details");

  if(details.style.display === "block"){
    details.style.display = "none";
  }
  else{
    details.style.display = "block";
  }

}

function searchCourses(){

  let input = document.getElementById("courseSearch").value.toLowerCase();

  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    let text = card.innerText.toLowerCase();

    if(text.includes(input)){
      card.style.display = "block";
    }
    else{
      card.style.display = "none";
    }

  });

}
