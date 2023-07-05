let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else if (input.value.length > 255) {
    msg.innerHTML = "Post must be 255 characters or less";
    console.log("failure");
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  data["date"] = new Date().toLocaleString(); // Add the current date and time
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <p class="date">${data.date}</p> <!-- Display the date -->
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
  `;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
