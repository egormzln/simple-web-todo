document.getElementById('add-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div class="task-buttons"> 
            <button class="complete"><i class="fa fa-check"></i></button>
            <button class="delete"><i class="fa fa-trash"></i></button>
            </div>
        `;

        li.querySelector('.complete').addEventListener('click', function() {
            const taskText = li.querySelector('.task-text');
            taskText.classList.toggle('completed');
            this.innerHTML = taskText.classList.contains('completed') 
                ? '<i class="fa fa-undo"></i>' 
                : '<i class="fa fa-check"></i>';
        });

        li.querySelector('.delete').addEventListener('click', function() {
            li.classList.add('fade-out');
            setTimeout(() => li.remove(), 300); // Плавное удаление
        });

        document.getElementById('todo-list').appendChild(li);
        taskInput.value = '';
    }
});
