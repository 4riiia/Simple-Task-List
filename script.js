// JavaScript لتنفيذ التفاعل مع المهام

// مصفوفة الألوان
const colors = ['#6A5ACD', '#4682B4', '#B0C4DE', '#5F9EA0', '#FF6347', '#FFDAB9', '#E6E6FA', '#FFFACD'];

document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();

    // التحقق من أن المستخدم قد أدخل اسم المهمة
    if (taskName === "") {
        alert('يرجى إدخال اسم المهمة');
        return;
    }

    // اختيار لون عشوائي من المصفوفة
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // إنشاء عنصر جديد للمهمة
    const listItem = document.createElement('li');
    listItem.classList.add('task-item', 'list-group-item');
    listItem.style.backgroundColor = randomColor; // تطبيق اللون العشوائي

    // إضافة نص المهمة
    const taskText = document.createElement('span');
    taskText.textContent = taskName;
    listItem.appendChild(taskText);

    // إضافة زر الحذف
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
    deleteBtn.textContent = 'حذف';
    deleteBtn.addEventListener('click', function() {
        const confirmDelete = confirm('هل أنت متأكد أنك تريد حذف هذه المهمة؟');
        if (confirmDelete) {
            listItem.remove();
        }
    });

    // إضافة زر علامة صح
    const checkBtn = document.createElement('button');
    checkBtn.classList.add('btn', 'btn-success', 'btn-sm');
    checkBtn.textContent = '✔';
    checkBtn.addEventListener('click', function() {
        if (listItem.style.textDecoration === 'line-through') {
            listItem.style.textDecoration = 'none';
            checkBtn.textContent = '✔';
            checkBtn.classList.remove('btn-success');
            checkBtn.classList.add('btn-outline-success');
        } else {
            listItem.style.textDecoration = 'line-through';
            checkBtn.textContent = '✓';
            checkBtn.classList.remove('btn-outline-success');
            checkBtn.classList.add('btn-success');
        }
    });

    // إضافة الأزرار إلى العنصر
    listItem.appendChild(checkBtn);
    listItem.appendChild(deleteBtn);

    // إضافة المهمة إلى القائمة
    document.getElementById('taskList').appendChild(listItem);

    // إعادة تعيين حقل الإدخال بعد إضافة المهمة
    taskInput.value = "";
});
