function drawChess(){
    let mainBlock = document.querySelector('.main-block');
    let block;
    let flag = true;

    // let figures = {
    //     0 : ['-263px -19px', '-484px -22px', '-372px -17px', '-41px -16px', '-150px -16px','-372px -17px', '-484px -22px','-263px -19px'],
    //     1 : ['-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px','-595px -19px', '-595px -19px','-595px -19px'],
    //     6 : ['-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px','-595px -116px', '-595px -116px','-595px -116px'],
    //     7 : ['-263px -116px', '-484px -116px', '-372px -116px', '-41px -116px', '-150px -116px','-372px -116px', '-484px -116px','-263px -116px'],
    // };
    let myFigures = {
        0 : [null, null, null, '-41px -16px', null, null, '-263px -19px', null],
        1 : ['-595px -19px', null, null, null, '-484px -22px', null, null,'-595px -19px'],
        2 : [null, null, null, '-484px -116px', '-372px -116px', '-150px -116px', null, null],
        3 : [null, null, null, null, '-595px -19px', null, null, null],
        4 : [null, null, null, null, '-595px -116px', null, null, null],
        5 : ['-595px -116px', null, null, null, null, null, null, null],
        6 : [null, '-595px -116px', null, '-41px -116px', null, '-595px -116px', '-150px -16px', null],
        7 : [null, null, null, null, null, null, null, null]
    };
    for (let i = 0; i<8; i++){
        for (let j = 0; j<8; j++){
            if (j==0) flag = !flag;

            block = document.createElement('div');

            if (flag) block.className = 'block black';
            else block.className = 'block white';
            //

            if (myFigures[i]!==undefined && myFigures[i][j]!==null){
                if (j==0)
                    block.textContent = i.toString();
                block.style.backgroundImage = 'url(сhess_symbols_set_.png)';
                block.style.backgroundPosition = myFigures[i][j];
            }
            //
            mainBlock.appendChild(block);
            flag = !flag;
        }
    }

}
drawChess();

// .main-block{
//     width: 560px;
//     height: 560px;
//     margin: 30px;
//     border: 1px solid black;
// }
// .block{
//     width: 70px;
//     height: 70px;
//     float: left;
// }
// .black {
//     background: #000;
// }
// .white {
//     background: #fff;
// }
// .myLink{
//     text-underline-mode: true;
//     background: blue;
//     color: olivedrab;
//     text-decoration-color: blue;
//     border: 3px;
// }
