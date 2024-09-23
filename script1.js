const fromDateEle = document.querySelector('#pastDate');
const toDateEle = document.querySelector('#today');
const calBtnEle = document.querySelector('button');
const resultEle = document.querySelector('.result'); 

const calculateDate = () => {
    const fromDate = new Date(fromDateEle.value);
    const toDate = new Date(toDateEle.value);
    
    if (isNaN(fromDate.getTime) || isNaN(toDate.getTime)) {
        resultEle.textContent= 'Please select valid dates.';
        return;
    }
    if (fromDate >= toDate) {
        resultEle.textContent= '"From" date less than the "To" date.';
        return;
    }
    const FullYear = toDate.getFullYear() - fromDate.getFullYear();
    const Month = toDate.getMonth() - fromDate.getMonth();
    const Date = toDate.getDate() - fromDate.getDate();
    

}