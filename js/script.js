let btns = document.querySelectorAll('.btn')
let result = document.getElementById('result')

let clickResult = ""

for (item of btns) {


    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;

        if (btnText == 'X') {
            btnText = '*'
            clickResult += btnText
            result.value = clickResult

        } else if (btnText == 'C') {
            clickResult = ""
            result.value = clickResult

        } else if (btnText == '=') {
            result.value = eval(clickResult)
        } else {
            clickResult += btnText
            result.value = clickResult
        }


        console.log(btnText)
    })
}

