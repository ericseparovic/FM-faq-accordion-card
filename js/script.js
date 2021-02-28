const htmlQuestions = document.querySelector('.questions');
htmlQuestions.addEventListener('click', showQuestion);


function showQuestion(e) {


    const answer1 = document.querySelector('.answer1');
    const answer2 = document.querySelector('.answer2');
    const answer3 = document.querySelector('.answer3');
    const answer4 = document.querySelector('.answer4');
    const answer5 = document.querySelector('.answer5');
    const questionDIV = e.target.parentElement.parentElement;
    const question = questionDIV.id;
    const h3 = questionDIV.parentElement.parentElement.querySelectorAll('h3');


    switch (question) {
        case 'question1':
            if (answer1.classList[1] === 'none') {
                answer1.classList.remove('none');
                answer2.classList.add('none');
                answer3.classList.add('none');
                answer4.classList.add('none');
                answer5.classList.add('none');

                h3[0].style.fontWeight = "600";
                h3[1].style.fontWeight = "100";
                h3[2].style.fontWeight = "100";
                h3[3].style.fontWeight = "100";
                h3[4].style.fontWeight = "100";

            } else {
                answer1.classList.add('none');
            }
            break;
        case 'question2':
            if (answer2.classList[1] === 'none') {
                answer2.classList.remove('none');
                answer1.classList.add('none');
                answer3.classList.add('none');
                answer4.classList.add('none');
                answer5.classList.add('none');

                h3[0].style.fontWeight = "100";
                h3[1].style.fontWeight = "600";
                h3[2].style.fontWeight = "100";
                h3[3].style.fontWeight = "100";
                h3[4].style.fontWeight = "100";
            } else {
                answer2.classList.add('none');
            }
            break;
        case 'question3':
            if (answer3.classList[1] === 'none') {
                answer3.classList.remove('none');
                answer2.classList.add('none');
                answer1.classList.add('none');
                answer4.classList.add('none');
                answer5.classList.add('none');

                h3[0].style.fontWeight = "100";
                h3[1].style.fontWeight = "100";
                h3[2].style.fontWeight = "600";
                h3[3].style.fontWeight = "100";
                h3[4].style.fontWeight = "100";
            } else {
                answer3.classList.add('none');
            }
            break;
        case 'question4':
            if (answer4.classList[1] === 'none') {
                answer4.classList.remove('none');
                answer2.classList.add('none');
                answer1.classList.add('none');
                answer3.classList.add('none');
                answer5.classList.add('none');

                h3[0].style.fontWeight = "100";
                h3[1].style.fontWeight = "100";
                h3[2].style.fontWeight = "100";
                h3[3].style.fontWeight = "600";
                h3[4].style.fontWeight = "100";
            } else {
                answer4.classList.add('none');
            }
            break;
        case 'question5':
            if (answer5.classList[1] === 'none') {
                answer5.classList.remove('none');
                answer2.classList.add('none');
                answer1.classList.add('none');
                answer4.classList.add('none');
                answer3.classList.add('none');

                h3[0].style.fontWeight = "100";
                h3[1].style.fontWeight = "100";
                h3[2].style.fontWeight = "100";
                h3[3].style.fontWeight = "100";
                h3[4].style.fontWeight = "600";
            } else {
                answer5.classList.add('none');
            }
            break;
    }
}