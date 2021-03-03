let all_cell = $('li');

let set_player_btn = $('#set_player');

const WEAPON = [
  {
    id: 1,
    url: './images/double_sword.png',
    name: 'Double Sword',
    category: 'Double Attack',
    points: '40',
    className: 'weapon',
  },
  {
    id: 2,
    url: './images/sword.png',
    name: 'Sword and Shield',
    category: 'Defend and Attack',
    points: '55',
    className: 'weapon',
  },
  {
    id: 3,
    url: './images/sword_and_shield.png',
    name: 'Single Sword',
    category: 'Attack',
    points: '30',
    className: 'weapon',
  },
  {
    id: 4,
    url: './images/diamond.png',
    name: 'Diamond',
    category: 'Energy',
    points: '120',
    className: 'weapon',
  },
];

/**
 * The grids on which weapons, players and diimed boxes are
 * @param grid
 */
const grid = Array.from(all_cell);

const dimBox = () => {
  for (let i = 0; i < 17; i++) {
    let random_ind = Math.floor(Math.random() * 72);
    if (
      grid[random_ind].style.backgroundImage == '' &&
      !all_cell[random_ind].classList.contains('bg-primary')
    ) {
      all_cell[random_ind].classList = 'bg bg-primary occupied';
    }
  }
};

const placeWeapon = () => {
  for (let i = 0; i < 4; i++) {
    let random_ind = Math.floor(Math.random() * 72);
    if (
      !all_cell[random_ind].classList.contains('bg-primary') &&
      grid[random_ind].style.backgroundImage == ''
    ) {
      all_cell[random_ind].style.backgroundImage = `url(${WEAPON[i].url})`;

      all_cell[random_ind].classList = `${WEAPON[i].className} occupied`;
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
      alert('I am attacking');
    }
    defend() {
      alert('I am defending');
    }
  }

  class Player_1 extends Player {
    constructor() {
      super();
    }
    position() {
      let player_1_position = 0;
      let random_ind = Math.floor(Math.random() * 72);
      if (
        grid[random_ind].textContent == '' &&
        !all_cell[random_ind].classList.contains('bg-primary')
      ) {
        grid[random_ind].style.backgroundImage = "url('./images/player_1.png')";
        grid[random_ind].id = 'player_1';
        player_1_position = $('#player_1').position();
      }
      return player_1_position;
    }
  }

  class Player_2 extends Player {
    constructor() {
      super();
    }
    position() {
      let random_ind = Math.floor(Math.random() * 72);

      if (
        grid[random_ind].textContent == '' &&
        !all_cell[random_ind].classList.contains('bg-primary')
      ) {
        grid[random_ind].style.backgroundImage = "url('./images/player_2.png')";
        grid[random_ind].id = 'player_2';
        grid[random_ind].classList = 'player_2';
      }
    }
  }

  const highlightAvailableCells = (position) => {
    let player_2_position = 0;
    let count = 1;
    let player_2_sibling;
    let next_first_cell;
    let next_second_cell;
    let next_third_cell;
    player_2_position = $('#player_1').position();
    next_first_cell = player_2_sibling = $('#player_1').next();
    next_second_cell = next_first_cell.next();
    next_third_cell = next_second_cell.next();

    prev_first_cell = player_2_sibling = $('#player_1').prev();
    prev_second_cell = prev_first_cell.prev();
    prev_third_cell = prev_second_cell.prev();

    let top_cell = $('#player_1').offset();

    console.log(top_cell);
    while (count < 4) {
      if (
        next_first_cell.classList == 'occupied' &&
        next_second_cell.classList == 'occupied' &&
        next_third_cell.classList == 'occupied'
      ) {
        break;
      } else {
        next_first_cell.addClass('bg-dark');
        next_second_cell.addClass('bg-dark');
        next_third_cell.addClass('bg-dark');
      }
      count++;
    }

    count = 0;
    while (count < 4) {
      if (
        prev_first_cell.classList == 'occupied' &&
        prev_second_cell.classList == 'occupied' &&
        prev_third_cell.classList == 'occupied'
      ) {
        break;
      } else {
        prev_first_cell.addClass('bg-dark');
        prev_second_cell.addClass('bg-dark');
        prev_third_cell.addClass('bg-dark');
      }
      count++;
    }
  };

  const player_1 = new Player_1();
  const player_2 = new Player_2();

  player_1.position();
  player_2.position();

  dimBox();
  placeWeapon();
  highlightAvailableCells();
};
