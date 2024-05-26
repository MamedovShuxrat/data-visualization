document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.title__btn-more');
    const dropdownMenu = button.querySelector('.dropdown-menu');

    button.addEventListener('click', (e) => {
        e.stopPropagation();
        button.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        button.classList.remove('active');
    });

    dropdownMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        if (e.target.tagName === 'LI') {
            const url = e.target.getAttribute('data-url');
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    updateChart(data);
                })
                .catch(error => {
                    console.error('Ошибка загрузки данных:', error);
                });
        }
    });

    const dataUrl = 'https://rcslabs.ru/ttrp1.json';

    fetch(dataUrl)
        .then(response => response.json())
        .then(data => {
            updateChart(data);
        })
        .catch(error => {
            console.error('Ошибка загрузки данных:', error);
        });
});

function updateChart(data) {
    document.getElementById('title').textContent = `Количество пройденных тестов "${data.title}"`;

    const chartContent = document.getElementById('chart-content');
    chartContent.innerHTML = '';

    const instances = ['dev', 'test', 'prod'];
    const components = ['front', 'back', 'db'];
    const maxChartHeight = 200;

    const maxValue = Math.max(
        ...instances.flatMap(instance => components.map(component => data[instance][component])),
        data.norm
    );

    const scaleFactor = maxChartHeight / maxValue;

    const instanceSums = {};

    instances.forEach((instance, index) => {
        let instanceHTML = '<div class="chart__lists">';
        let sum = 0;

        components.forEach(component => {
            const value = data[instance][component];
            sum += value;
            instanceHTML += `
                        <div class="chart__list chart__list-${component}" style="height: ${value * scaleFactor}px;">
                            ${value}
                        </div>`;
        });

        instanceHTML += `
                    <span class="chart__desc">${instance}</span>
                </div>`;

        chartContent.innerHTML += instanceHTML;
        instanceSums[instance] = sum;

        if (index < instances.length - 1) {
            const nextInstance = instances[index + 1];
            const nextSum = components.reduce((acc, component) => acc + data[nextInstance][component], 0);
            const diff = nextSum - sum;

            const differenceHTML = `
                        <div class="chart__difference ${diff < 0 ? 'orange' : 'green'}">
                            <div class="chart__arrow ${diff < 0 ? '' : 'rotate'}"></div>
                            <span>${diff > 0 ? '+' : ''}${diff}</span>
                        </div>`;

            chartContent.innerHTML += differenceHTML;
        }
    });

    const normHTML = `
                <div class="chart__lists">
                    <div class="chart__list chart__list-norm" style="height: ${data.norm * scaleFactor}px;">
                        <span class="chart__list-norm_content">${data.norm}</span>
                    </div>
                    <span class="chart__desc">Norm</span>
                </div>`;

    chartContent.innerHTML += normHTML;
}