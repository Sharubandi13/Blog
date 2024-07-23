const commentForm = document.getElementById('comment-form');
const commentsContainer = document.getElementById('comments');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const commentHTML =`
        <p><strong>${name}</strong>: ${message}</p>
    `;
    commentsContainer.innerHTML += commentHTML;
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
});