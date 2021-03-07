const categoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${categoriesRef.length} категории`);



categoriesRef.forEach((
    category => {
        const categoryName = category.querySelector('h2');
        const elementsCount = category.querySelectorAll('li')

        console.log(`Категория: ${categoryName.textContent} Количество элементов: ${elementsCount.length}`)
    }
)); 
