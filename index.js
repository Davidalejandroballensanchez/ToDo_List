(function(){
    const input = document.querySelector('#itnew');
    const form = document.querySelector('#formitnew');
    const selectList = document.querySelector('#slist');
    const listsContainer = document.querySelector('#lists');

    let todos = [];
    let lists = [
        {id: '200618', text: 'Colegio', count: 0},
        {id: '200618', text: 'Casa', count: 0},
        {id: '200618', text: 'Desarrollo Personal', count: 0}
    ];

    document.addEventListener('DOMContentLoaded', e =>{
        refreshUI();
        lists.forEach( list => {
            selectList.innerHTML += `<option value="${list.id}">${list.text}</option>`;
        });
    });

    function Todo(id, text, list, completed){
        return{id:id, text:text, list:list, completed:completed};
    };

    form.addEventListener('submit', e =>{
        e.preventDefault();
        const text = input.value.trim();
        const listId =selectList.value;

        if(text === '') return false;

        const newTodo = new Todo(id= '200618', text, listId, false);
        todos.push(newTodo);
        input.value = '';

        refreshUI();
    });
    
    function refreshUI(){
        renderTodos();
        renderLists();
    };

    function renderTodos(){
        const todosContainer = document.querySelector('#todos');
        todosContainer.innerHTML = '';

        todos.forEach(todo => {
            todosContainer.innerHTML += renderTodo(todo);
        });

        document.querySelectorAll('.todo label input').forEach(item => {
            item.addEventListener('click', e =>{
                console.log('hopla xd');
            });
        });
    };

    function renderTodo(todo){
        return `
            <div class="todo" data-id="${todo.id}">
                <label class="checkbox-container">${todo.text}
                    <input type="checkbox" ${(todo.completed)? 'checked="checked"': ''} />
                    <span class="checkmark"></span>           
                </label>
            </div>
        `;
    };

    function renderLists(){};
})();