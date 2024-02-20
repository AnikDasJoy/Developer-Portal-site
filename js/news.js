const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategories(data))
}

const displayCategories = (categories) => {
    const newsContainer = document.getElementById('news-container');
    // console.log(categories.data.news_category);


    for (let i = 0; i < 8; i++) {
        // console.log(categories.data.news_category[i]);

        const category = categories.data.news_category[i];
        // console.log(category);

        // display no phones found
        const noData = document.getElementById('no-found-message');
        if (categories.data.news_category[3].length === 6) {
            noData.classList.remove('d-none');
        }
        else {
            noData.classList.add('d-none');
        }


        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('col');
        // categoryDiv.classList.add('d-flex');
        categoryDiv.innerHTML = `
                    <div class="card">
                        <div class="card-body fs-6 fw-bold">
                            <p onclick="categoryDetails('${category.category_id}')" class="card-title"> ${category.category_name}</p>

                        </div>
                    </div>
                `;
        newsContainer.appendChild(categoryDiv);
    }
}

const categoryDetails = id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayNewCategory(data))
}


const displayNewCategory = (newCategory) => {
    const displayContainer = document.getElementById('new-category')
    console.log(newCategory.data);

    // <div>
    //     // <div class="container border p-3  rounded ">
    //     // <h2 class="fst-normal fs-6"> ${newCategory.data[0].title}</h2>
    //     // <p>${newCategory.data[0].details.slice(0, 500)}</p>
    //     // <br>
    //     // <h2 class="fst-normal fs-6"> ${newCategory.data[1].title}</h2>
    //     // <p>${newCategory.data[1].details.slice(0, 500)}</p>
    // </div>
    displayContainer.innerHTML = `
        <div>
            <div class="card mb-3" style="max-width: 1500px;">
                <div class="row g-0">
                    <div class="col-md-4 container border p-3  rounded ">
                    <img src=${newCategory.data[0].thumbnail_url} class="img-thumbnail img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="fst-normal fs-4 fw-bold"> ${newCategory.data[0].title}</h2>
                        <p>${newCategory.data[0].details.slice(0, 500)}</p>                       
                    </div>

                    <div class="d-flex justify-content-between p-4">                       
                        <div class="ms-3 d-flex">
                        <img src=${newCategory.data[0].image_url} class="img-small img-thumbnail d-block img-fluid rounded-start" alt="...">
                            <div class="ms-2">
                            <p class="m-0 fw-semibold">${newCategory.data[0].author.name ? newCategory.data[0].author.name : 'No Name'}</p>
                            <p class="text-secondary">${newCategory.data[0].author.published_date ? newCategory.data[0].author.published_date : 'No Date Found'}</p>
                            </div>
                        </div>
                        <div class="component">
                            <i class="fa-regular fa-eye text-secondary fw-bold"><span>  </span>${newCategory.data[0].total_view}</i>                         
                        </div>
                        <div>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-secondary"></i>
                            <i class="fa-solid fa-star"></i>                           
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div>
                            <button class="border-0"><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <div class="card mb-3" style="max-width: 1500px;">
                <div class="row g-0">
                    <div class="col-md-4 container border p-3  rounded ">
                    <img src=${newCategory.data[1].image_url} class="img-thumbnail img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="fst-normal fs-4 fw-bold"> ${newCategory.data[1].title}</h2>
                        <p>${newCategory.data[1].details.slice(0, 500)}</p>                       
                    </div>

                    <div class="d-flex justify-content-between p-4">                       
                        <div class="ms-3 d-flex">
                        <img src=${newCategory.data[1].thumbnail_url} class="img-small img-thumbnail d-block img-fluid rounded-start" alt="...">
                            <div class="ms-2">
                            <p class="m-0 fw-semibold">${newCategory.data[1].author.name ? newCategory.data[1].author.name : 'No Name'}</p>
                            <p class="text-secondary">${newCategory.data[1].author.published_date ? newCategory.data[1].author.published_date : 'No date Found'}</p>
                            </div>
                        </div>
                        <div class="component">
                            <i class="fa-regular fa-eye text-secondary fw-bold"><span>  </span>${newCategory.data[1].total_view}</i>                         
                        </div>
                        <div>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-secondary"></i>
                            <i class="fa-solid fa-star"></i>                           
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div>
                            <button class="border-0"><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <div class="card mb-3" style="max-width: 1500px;">
                <div class="row g-0">
                    <div class="col-md-4 container border p-3  rounded ">
                    <img src=${newCategory.data[2].image_url} class="img-thumbnail img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="fst-normal fs-4 fw-bold"> ${newCategory.data[2].title}</h2>
                        <p>${newCategory.data[2].details.slice(0, 500)}</p>                       
                    </div>

                    <div class="d-flex justify-content-between p-4">                       
                        <div class="ms-3 d-flex">
                        <img src=${newCategory.data[2].thumbnail_url} class="img-small img-thumbnail d-block img-fluid rounded-start" alt="...">
                            <div class="ms-2">
                            <p class="m-0 fw-semibold">${newCategory.data[2].author.name ? newCategory.data[2].author.name : 'No Name'}</p>
                            <p class="text-secondary">${newCategory.data[2].author.published_date ? newCategory.data[2].author.published_date : 'No date Found'}</p>
                            </div>
                        </div>
                        <div class="component">
                            <i class="fa-regular fa-eye text-secondary fw-bold"><span>  </span>${newCategory.data[2].total_view}</i>                         
                        </div>
                        <div>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-secondary"></i>
                            <i class="fa-solid fa-star"></i>                           
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div>
                            <button class="border-0"><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="card mb-3" style="max-width: 1500px;">
                <div class="row g-0">
                    <div class="col-md-4 container border p-3  rounded ">
                    <img src=${newCategory.data[3].thumbnail_url} class="img-thumbnail img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="fst-normal fs-4 fw-bold"> ${newCategory.data[3].title}</h2>
                        <p>${newCategory.data[3].details.slice(0, 500)}</p>                       
                    </div>

                    <div class="d-flex justify-content-between p-4">                       
                        <div class="ms-3 d-flex">
                        <img src=${newCategory.data[3].thumbnail_url} class="img-small img-thumbnail d-block img-fluid rounded-start" alt="...">
                            <div class="ms-2">
                            <p class="m-0 fw-semibold">${newCategory.data[3].author.name ? newCategory.data[3].author.name : 'No Name'}</p>
                            <p class="text-secondary">${newCategory.data[3].author.published_date ? newCategory.data[3].author.published_date : 'No Date Found'}</p>
                            </div>
                        </div>
                        <div class="component">
                            <i class="fa-regular fa-eye text-secondary fw-bold"><span>  </span>${newCategory.data[3].total_view}</i>                         
                        </div>
                        <div>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-secondary"></i>
                            <i class="fa-solid fa-star"></i>                           
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div>
                            <button class="border-0"><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        


        <div>
            <div class="card mb-3" style="max-width: 1500px;">
                <div class="row g-0">
                    <div class="col-md-4 container border p-3  rounded ">
                    <img src=${newCategory.data[4].image_url} class="img-thumbnail img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="fst-normal fs-4 fw-bold"> ${newCategory.data[4].title}</h2>
                        <p>${newCategory.data[4].details.slice(0, 500)}</p>                       
                    </div>

                    <div class="d-flex justify-content-between p-4">                       
                        <div class="ms-3 d-flex">
                        <img src=${newCategory.data[4].thumbnail_url} class="img-small img-thumbnail d-block img-fluid rounded-start" alt="...">
                            <div class="ms-2">
                            <p class="m-0 fw-semibold">${newCategory.data[4].author.name ? newCategory.data[4].author.name : 'No Name'}</p>
                            <p class="text-secondary">${newCategory.data[4].author.published_date ? newCategory.data[4].author.published_date : 'No Date Found'}</p>
                            </div>
                        </div>
                        <div class="component">
                            <i class="fa-regular fa-eye text-secondary fw-bold"><span>  </span>${newCategory.data[4].total_view}</i>                         
                        </div>
                        <div>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-secondary"></i>
                            <i class="fa-solid fa-star"></i>                           
                            <i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div>
                            <button class="border-0"><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

loadCategories();

