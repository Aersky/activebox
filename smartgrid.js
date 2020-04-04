module.exports = {
    columns: 12,
    offset: "30px",
    //mobileFirst: true,
    container: {
        maxWidth: "1200px",
        fields: "30px" // поля у обертки, паддинги у wrapper
                       // не меньше половины offset
    },
    breakPoints: {
        md: {
            width: "920px",
            fields: "20px",
            offset: "20px"
        },
        sm: {
            // width: "720px",
            width: "768px",
            offset: "15px"
        },
        xs: {
            width: "576px",
            fields: "10px",
            offset: "10px"
        },
        xxs: {
            width: "420px",
            fields: "5px",
            offset: "5px"
            /*
            offset: "10px",
            fields: "5px"

            можно, но необходимо продублировать в
            css .size-xxs(10), чтобы правильно
            пересчиталась ширина.
            */
        }
    },
    //detailedCalc: true
};

/* .col() - это колонка, для отступов друг от друга
* это половина offset. Т.е. чтобы не получить горизонтального
* скрола нужно правильно указать. Филдзы минимун половина offset
* offcet/2 = fields - минимум */

/*.u-row-flex(@offset){
    display: flex;
    flex-wrap: wrap;
    margin-left: (@offset / -2);
    margin-right: (@offset / -2);
}

.u-col(@offset){
    box-sizing: border-box;
    word-wrap: break-word;
    margin-left: (@offset / 2);
    margin-right: (@offset / 2);
}

.u-size(@n, @columns, @offset){
    width: ~"calc(100% / @{columns} * @{n} - @{offset})";
}*/