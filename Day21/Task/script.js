

const addbtn = document.getElementById("addBtn");
const inputTask = document.getElementById("inputData");
const taskId = document.getElementById('taskId');

function addTask(){
  const taskText = inputTask.value;
  const li = document.createElement('li');
  const dltButton = document.createElement('button');

  li.textContent = taskText;
  dltButton.textContent = "Delete";

  li.appendChild(dltButton);
  taskId.appendChild(li);

  dltButton.addEventListener('click', function(){
    taskId.removeChild(li);
  });
  inputTask.value = '';
}
