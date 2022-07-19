//create users objects array
let usersArr = [
  {
    name: "kenny",
    lastname: "mac",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio ipsam, est natus fugit similique itaque sunt aliquid vero quod quisquam facere praesentium, quos inventore cupiditate nemo, eveniet unde ducimus!",
  },
  {
    name: "james",
    lastname: "bond",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio ipsam, est natus fugit similique itaque sunt aliquid vero quod quisquam facere praesentium, quos inventore cupiditate nemo, eveniet unde ducimus!",
  },
  {
    name: "john",
    lastname: "wick",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio ipsam, est natus fugit similique itaque sunt aliquid vero quod quisquam facere praesentium, quos inventore cupiditate nemo, eveniet unde ducimus!",
  },
];

function createRowOfCards() {
  document.getElementById("row1").innerHTML = ""; // will clear the old cols and cards
  for (let i = 0; i < usersArr.length; i++) {
    // will create new col and card
    // += will make the div to remember the cols and the cards that we want to display
    document.getElementById("row1").innerHTML += createColCard(
      i,
      usersArr[i].name,
      usersArr[i].desc
    );
  }
}

createRowOfCards(); // will create the cards for the first time

function createColCard(index, name, desc) {
  /*
    this function will generate single col with single card.
    this function will ask for index, name and desc.
    this function will use the index, name and desc
    and will integrate the index, name and desc in the html part.
    after this function will generate the col and card it will return
    the new col and card.
  */
  return `
    <div class="col" id="col${index}">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${desc}</p>
                <button href="#" class="btn btn-primary" onclick="handleDeleteCard(${index})">Go somewhere</button>
            </div>
        </div>
    </div>
    `;
}

function handleDeleteCard(selectedIndex) {
  /*
        when user click on delete btn to delete one card,
        this function will be calld.
        this function ask for the index to be deleted
    */
  console.log("your card deleted", selectedIndex);
  usersArr.splice(selectedIndex, 1); // will delete the selected index
  console.log("usersArr", usersArr);
  createRowOfCards(); // will clear the row from the previous cols and cards
  //will create new cols and cards without the deleted card
}
