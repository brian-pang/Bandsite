let commentData = [
  {
    name: "Micheal Lyons",
    date: "12/18/2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board.He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },
  {
    name: "Gary Wong",
    date: "12/12/2018",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },
  {
    name: "Theodore Duncan",
    date: "11 / 15 / 2018",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day.Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
];
console.log(commentData);
let commentOutput = document.querySelector(".display-comment");

function displayComment(obj) {
  var wrapper = document.createElement("div");
  wrapper.className = "comments__container";
  commentOutput.appendChild(wrapper);
  var heading = document.createElement("h4");
  heading.className = "comment__heading";
  heading.innerText = obj.name;

  var date = document.createElement("h4");
  date.className = "comment__date";
  date.innerText = obj.date;

  var content = document.createElement("p");
  content.className = "comment__content";
  content.innerText = obj.comment;

  wrapper.appendChild(heading);
  wrapper.appendChild(date);
  wrapper.appendChild(content);
}

for (var i = 0; i < commentData.length; i++) {
  displayComment(commentData[i]);
}

const form = document.querySelector(".comment_form");
form.addEventListener("submit", event => {
  event.preventDefault();
  let newComment = {
    name: event.target.name.value,
    comment: event.target.comment.value
  };
  console.log(newComment);
  commentData.unshift(newComment);
  console.log(commentData);
  commentOutput.innerText = "";
  for (var i = 0; i < commentData.length; i++) {
    displayComment(commentData[i]);
  }

  console.log("form submit");
});
