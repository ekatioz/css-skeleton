document.querySelector('.load').addEventListener('click', () => {
    const container = document.querySelector('.container');
    container.innerHTML='<div class="box"></div>';
    const box = document.querySelector('.box');
    box.innerHTML = '';
    setTimeout(() => {
        box.innerHTML = `
            <article>
                <h2>Lorem Burgers</h2>
                <p>Cheeseburgers are like a metaphor for life.</p>
                <p>All the good stuff is in the middle but the rest of it is necessary too.</p>    
                <p>Just like life, cheeseburgers are meant to be relished.</p>
            </article>
            <button>More Cheese</button>
        `
    }, 2000);
})
