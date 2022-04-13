const labels = [

    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' ',
    ' '
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Amount of chess figures',

        backgroundColor: ['lightgreen','gold','red','beige','purple','wheat','lightseagreen','steelblue','orange','purple','salmon','sandybrown','indigo'],
        borderColor: 'black',
        borderWidth: 2,
        data: [1, 1, 0, 1, 1, 4, 1, 1, 1, 0, 1, 3, 15],
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);