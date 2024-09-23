const fromDateEle = document.querySelector('#pastDate');
const toDateEle = document.querySelector('#today');
const calBtnEle = document.querySelector('button');
const resultEle = document.querySelector('.result'); // Ensure the <p> element has the class 'result'

const calculateDate = () => {
    const fromDate = new Date(fromDateEle.value);
    const toDate = new Date(toDateEle.value);

    if (isNaN(fromDate.getTime()) || isNaN(toDate.getTime())) {
        resultEle.textContent = 'Please select valid dates.';
        return;
    }

    if (fromDate >= toDate) {
        resultEle.textContent = '"From" date less than the "To" date.';
        return;
    }

    const years = toDate.getFullYear() - fromDate.getFullYear();
    const months = toDate.getMonth() - fromDate.getMonth();
    const days = toDate.getDate() - fromDate.getDate();

    let finalYears = years;
    let finalMonths = months;
    let finalDays = days;

    if (finalDays < 0) {
        finalMonths--;
        finalDays += new Date(toDate.getFullYear(), toDate.getMonth(), 0).getDate();
    }

    if (finalMonths < 0) {
        finalYears--;
        finalMonths += 12;
    }

    // Constructing the result based on the conditions
    let resultText = '';
    if (finalYears > 0) {
        resultText += `${finalYears} years, `;
    }
    if (finalMonths > 0 || finalYears > 0) {
        resultText += `${finalMonths} months, `;
    }
    resultText += `${finalDays} days.`;

    // If only days are displayed (no years and months), adjust the output
    if (finalYears === 0 && finalMonths === 0) {
        resultText = `${finalDays} days.`;
    } else if (finalYears === 0) {
        resultText = `${finalMonths} months, ${finalDays} days.`;
    }

    resultEle.textContent = resultText;
};

calBtnEle.addEventListener('click', () => calculateDate());

window.addEventListener('load', () => {
    const today = new Date().toISOString().split('T')[0];
    toDateEle.value = today;
});
