"use sсtrict";

const bodyNews = [
    {
        newsTitle : "Осень - время пить тыквенный латте!",
        newsAutor: "Максим Иванов",
        newsData: "13 Сентября 2022",
        newsImg: "https://images.unsplash.com/photo-1572373696785-e8bd92718f65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
        newsContext: "Поспешите, во всех кофейнях города появился сезонный напиток. Чем еще нас порадует осень."
    },
    {
        newsTitle : "Редкий сорт кофе снова в продаже",
        newsAutor: "Василий Петров",
        newsData: "14 августа 2022",
        newsImg: "https://images.unsplash.com/photo-1607681034540-2c46cc71896d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        newsContext: "Арабика Эфиопия Иргачефф в нашей экслюзивной обжарке. Узнайте о наших новинках."
    },
    {
        newsTitle : "Пришла жара!",
        newsAutor: "Василий Петров",
        newsData: "15 Июня 2020",
        newsImg: "https://images.unsplash.com/photo-1533000759984-0d977d715f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        newsContext: "Скидка 30% на холодный кофе. О нашей новой системе скидок!"
    },
    {
        newsTitle : "Введение абонементов на кофе",
        newsAutor: "Василий Петров",
        newsData: "5 Мая 2022",
        newsImg: "https://images.unsplash.com/photo-1612346903007-b5ac8bb135bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        newsContext: "С ним каждая шестая кружка теперь будет бесплатно! О новой программе лояльности."
    },
    {
        newsTitle : "Кофе спасает маленьких поросят",
        newsAutor: "Василий Петров",
        newsData: "1 февраля 2022",
        newsImg: "https://images.unsplash.com/photo-1544931733-7ee200c8ca3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        newsContext: "Весь февраль вы покупаете кофе и 5% оплаты идет на покупку домиков для маленьких поросят!"
    },
];


function NewsToHtml(news,count) { 
    /* Вытащили код старых новостей по селектору блока */
    const newsList = document.querySelector('.news');
    /* Удалили их все */
    newsList.innerHTML = "";
    /* Вставили новые не более 5 */
    for (let i=0; i< (count > news.lenght ? news.lenght : count); i++) {
        newsList.innerHTML += `
            <article>
                <a href="#">
                    <h2>${news[i].newsTitle}</h2>
                </a>
                <div class="article-meta">
                    Опубликовано <a href="#">${news[i].newsAutor}</a>
                    ${news[i].newsData}
                </div>
                <img src="${news[i].newsImg}">
                <p>${news[i].newsContext}</p>
            </article>
        `;
    }

/*    news.forEach(element => {
        newsList.innerHTML += `
            <article>
                <a href="#">
                    <h2>${element.newsTitle}</h2>
                </a>
                <div class="article-meta">
                    Опубликовано <a href="#">${element.newsAutor}</a>
                    ${element.newsData}
                </div>
                <img src="${element.newsImg}">
                <p>${element.newsContext}</p>
            </article>
        `;
    }); */

}

NewsToHtml(bodyNews, 6);