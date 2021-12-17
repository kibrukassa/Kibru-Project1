let reimbursementSubmitButton = document.querySelector('#sub-reimb-btn');
reimbursementSubmitButton.addEventListener('click', submitReimbursement);

async function submitReimbursement() {
    let AmountInput = document.querySelector('#ramt');
    let reimb_typeInput = document.querySelector('#rtype');
    let DescriptionInput = document.querySelector('#rdes');
    let ReceiptInput = document.querySelector('#rfile');

    const file = ReceiptInput.files[0];


    let formData = new FormData();
    formData.append('Amount', AmountInput.value);
    formData.append('reimb_type', reimb_typeInput.value);
    formData.append('Description', DescriptionInput.value);
    formData.append('Receipt', file);



    let res = await fetch('http://localhost:8080/reimbursements', {
        method: 'POST',
        credentials: 'include',
        body: formData
    });

    if (res.status === 201) { //successful update
        window.location.href = 'employee-homepage.html';
    } else if (res.status === 400) {
        let submitReimbursementForm = document.querySelector('#reimbursement-submit-form');

        let data = await res.json();

        let pTag = document.createElement('p');
        pTag.innerHTML = data.message;
        pTag.style.color = 'red';

        submitReimbursementForm.appendChild(pTag);
    }


}