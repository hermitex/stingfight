let all_cell = $("li");

let set_player_btn = $("#set_player");
console.log(set_player_btn);

// set_player_btn.addEventListener("click", () => {
//   console.log("hello");
// });

// set_player_btn.addEventListener("click", () => {
//   let player_1_name = $("#player_1_name").textContent;
//   let player_2_name = $("#player_2_name").textContent;
// });

const board_cell_array = Array.from(all_cell);

const dimBox = () => {
  for (let i = 0; i < 11; i++) {
    let random_ind = Math.floor(Math.random() * 72);
    if (
      board_cell_array[random_ind].textContent == "" &&
      !all_cell[random_ind].classList.contains("bg-primary")
    ) {
      all_cell[random_ind].classList = "bg bg-primary";
    }
  }
};

const placeWeapon = () => {
  for (let i = 0; i < 4; i++) {
    let random_ind = Math.floor(Math.random() * 72);
    if (
      !all_cell[random_ind].classList.contains("bg-primary") &&
      board_cell_array[random_ind].textContent == ""
    ) {
      all_cell[random_ind].textContent = "weapon";
    }
  }
};

window.onload = () => {
  class Player {
    constructor(name, score, live, board_position, current_weapon) {
      (this.name = name),
        (this.score = score),
        (this.live = live),
        (this.board_position = board_position),
        (this.current_weapon = current_weapon);
    }

    attack() {
      alert("I am attacking");
    }
    defend() {
      alert("I am defending");
    }
  }

  class Player_1 extends Player {
    constructor() {
      super();
    }
    position() {
      let random_ind = Math.floor(Math.random() * 72);
      if (
        board_cell_array[random_ind].textContent == "" &&
        !all_cell[random_ind].classList.contains("bg-primary")
      ) {
        board_cell_array[random_ind].textContent = "player_1";
      }
    }
  }

  class Player_2 extends Player {
    constructor() {
      super();
    }
    position() {
      let random_ind = Math.floor(Math.random() * 72);
      if (
        board_cell_array[random_ind].textContent == "" &&
        !all_cell[random_ind].classList.contains("bg-primary")
      ) {
        board_cell_array[random_ind].textContent = "player_2";
      }
    }
  }

  const player_1 = new Player_1();
  const player_2 = new Player_2();

  player_1.position();
  player_2.position();

  dimBox();
  placeWeapon();
};
