let all_cell = document.querySelectorAll("li");
// let weapon = {
//   id: 1,
//   weapon_name: bee_sting,

// }

const dimBox = () => {
  for (let i = 0; i < 11; i++) {
    let random_num = Math.floor(Math.random() * 72);
    all_cell[random_num].classList = "bg bg-primary";
  }
};

const placeWeapon = () => {
  for (let i = 0; i < 4; i++) {
    let random_num = Math.floor(Math.random() * 72);
    if (all_cell[random_num].classList != "bg bg-primary") {
      all_cell[random_num].textContent = "weapon";
    }
  }
};

const placePlayer = () => {
  for (let i = 0; i < 3; i++) {
    let random_num = Math.floor(Math.random() * 72);
    if (
      all_cell[random_num].classList != "bg bg-primary" &&
      all_cell[random_num].textContent == ""
    ) {
      if (removeExtraPlayer()) {
        return 0;
      } else {
        all_cell[random_num].textContent = "player";
      }
    }
  }
};

const removeExtraPlayer = () => {
  let count = 0;
  console.log("yes");
  all_cell.forEach((cell) => {
    if (cell.textContent == "player") {
      console.log(count);
      if (count === 2) {
        return true;
      } else {
        count += 1;
      }
    }
  });
};

class Player {
  constructor(name, score, live, board_position, current_weapon) {
    (this.name = name),
      (this.score = score),
      (this.live = live),
      (this.board_position = board_position),
      (this.current_weapon = current_weapon);
  }
}

const Player_1 = new Player();
const Player_2 = new Player();

dimBox();
placeWeapon();
placePlayer();
