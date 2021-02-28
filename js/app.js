let all_cell = $("li");

let set_player_btn = $("#set_player");

const WEAPON = [
  {
    id: 1,
    url: './images/double_sword.png',
    name: 'Double Sword',
    category: 'Double Attack',
    points: '40',
    className: 'weapon'
  },
  {
    id: 2,
    url: './images/sword.png',
    name: 'Sword and Shield',
    category: 'Defend and Attack',
    points: '55',
    className: 'weapon'
  },
  {
    id: 3,
    url: './images/sword_and_shield.png',
    name: 'Single Sword',
    category: 'Attack',
    points: '30',
    className: 'weapon'
  },
  {
    id: 4,
    url: './images/diamond.png',
    name: 'Diamond',
    category: 'Energy',
    points: '120',
    className: 'weapon'
  }

]



const board_cell_array = Array.from(all_cell);

const dimBox = () => {
  for (let i = 0; i < 17; i++) {
    let random_ind = Math.floor(Math.random() * 72);
    if (
      board_cell_array[random_ind].style.backgroundImage == "" &&
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
      board_cell_array[random_ind].style.backgroundImage == ""
    ) {
      all_cell[random_ind].style.backgroundImage = `url(${WEAPON[i].url})`;

      all_cell[random_ind].classList = `${WEAPON[i].className}`;

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
        board_cell_array[random_ind].style.backgroundImage = "url('./images/player_1.png')";
        board_cell_array[random_ind].id = "player_1";
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
        board_cell_array[random_ind].style.backgroundImage = "url('./images/player_2.png')";
        board_cell_array[random_ind].id = "player_2";

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
