const colors = [
  '#eb4034',
  '#de8983',
  '#4ebab3',
  '#20918a',
  '#207a91',
  '#07beed',
  '#07ed0f',
  '#51f556',
  '#f5f051',
  '#d63aa7',
  '#FFE4E1',
];

const COL_COUNT = 300;
const COL_WIDTH = 30;
const ROW_COUNT = 80;
const ROW_HEIGHT = 25;

const elementRows = [];

document.querySelector('#reorderBtn').addEventListener('click', function () {
  elementRows.reverse();
  elementRows.forEach(function (elementRow, rowIndex) {
    elementRow.style.transform =
      'translate3d(0, ' + rowIndex * ROW_HEIGHT + 'px, 0)';
  });
});

function layoutGrid() {
  const elementContainer = document.querySelector('#elementContainer');
  elementContainer.style.width = COL_COUNT * COL_WIDTH + 'px';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let rowIndex = 0; rowIndex < ROW_COUNT; rowIndex++) {
    const elementRow = document.createElement('div');
    elementRow.classList.add('row');
    elementRow.style.transform =
      'translate3d(0, ' + rowIndex * ROW_HEIGHT + 'px, 0)';
    elementRow.style.backgroundColor = colors[rowIndex % colors.length];

    for (let colIndex = 0; colIndex < COL_COUNT; colIndex++) {
      const elementcell = document.createElement('div');
      elementcell.classList.add('cell');
      elementcell.style.left = colIndex * COL_WIDTH + 'px';
      elementcell.innerHTML = characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
      elementRow.appendChild(elementcell);
    }

    elementRows.push(elementRow);

    elementContainer.appendChild(elementRow);
  }
}

layoutGrid();
