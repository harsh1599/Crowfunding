$(() => {
    var fundPage = 1;
    var invPage = 1;

    $.ajax("/fundraiser/pagination/" + fundPage)
        .done(data => {
            data.forEach(fund => {
                $('#paginateFundraisersStudent').append(`
                    <div class="col-6 col-md-3">
                    <div class="card m-1">
                        <img src="${fund.images[0]}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${fund.title}</h5>
                            <p class="card-text">${fund.summary}</p>
                            <a href="/fundraiser/${fund._id}" class="btn btn-outline-primary">Read More</a>
                            <button class="btn btn-outline-danger likeBtn" id="${fund._id}"><i class="far fa-heart"></i></button>
                        </div>
                    </div>
                `);
            });
        });
    
    $.ajax("/investor/pagination/" + invPage)
        .done(data => {
            data.forEach(investor => {
                $('#paginateInvestorsStudent').append(`
                    <div class="col-6 col-md-3">
                    <div class="card m-1">
                        <img src="${investor.images}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${investor.username}</h5>
                            <p class="card-text">${investor.description}</p>
                            <a href="/investor/${investor._id}" class="btn btn-outline-primary">Read More</a>
                            <button class="btn btn-outline-danger likeBtn" id="${fund._id}"><i class="far fa-heart"></i></button>
                        </div>
                    </div>
                `);
            });
        });
    
    $('#prevFundraisersStudent').on("click", () => {
        fundPage = fundPage - 1;
        if(fundPage<=0){fundPage=1;}

        $('#paginateFundraisersStudent').html("<div class='loader'></div>");
        $.ajax("/fundraiser/pagination/" + fundPage)
            .done(data => {
                $('#paginateFundraisersStudent').html("");
                data.forEach(fund => {
                    $('#paginateFundraisersStudent').append(`
                        <div class="col-6 col-md-3">
                        <div class="card m-1">
                            <img src="${fund.images[0]}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${fund.title}</h5>
                                <p class="card-text">${fund.summary}</p>
                                <a href="/fundraiser/${fund._id}" class="btn btn-outline-primary">Read More</a>
                            <button class="btn btn-outline-danger likeBtn" id="${fund._id}"><i class="far fa-heart"></i></button>
                            </div>
                        </div>
                    `);
                });
            });
    });
    
    $('#nextFundraisersStudent').on("click", () => {
        fundPage = fundPage + 1;

        $('#paginateFundraisersStudent').html("<div class='loader'></div>");
        $.ajax("/fundraiser/pagination/" + fundPage)
            .done(data => {
                $('#paginateFundraisersStudent').html("");
                data.forEach(fund => {
                    $('#paginateFundraisersStudent').append(`
                        <div class="col-6 col-md-3">
                        <div class="card m-1">
                            <img src="${fund.images[0]}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${fund.title}</h5>
                                <p class="card-text">${fund.summary}</p>
                                <a href="/fundraiser/${fund._id}" class="btn btn-outline-primary">Read More</a>
                            <button class="btn btn-outline-danger likeBtn" id="${fund._id}"><i class="far fa-heart"></i></button>
                            </div>
                        </div>
                    `);
                });
            });
    });
    
    $('#prevInvestorsStudent').on("click", () => {
        invPage = invPage - 1;
        if(invPage<=0){invPage=1;}

        $('#paginateInvestorsStudent').html("<div class='loader'></div>");
        $.ajax("/investor/pagination/" + invPage)
            .done(data => {
                $('#paginateInvestorsStudent').html("");
                data.forEach(investor => {
                    $('#paginateInvestorsStudent').append(`
                        <div class="col-6 col-md-3">
                        <div class="card m-1">
                            <img src="${investor.images}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${investor.username}</h5>
                                <p class="card-text">${investor.description}</p>
                                <a href="/investor/${investor._id}" class="btn btn-outline-primary">Read More</a>
                            <button class="btn btn-outline-danger likeBtn" id="${fund._id}"><i class="far fa-heart"></i></button>
                            </div>
                        </div>
                    `);
                });
            });
    });
    
    $('#nextInvestorsStudent').on("click", () => {
        invPage = invPage + 1;

        $('#paginateInvestorsStudent').html("<div class='loader'></div>");
        $.ajax("/investor/pagination/" + invPage)
            .done(data => {
                $('#paginateInvestorsStudent').html("");
                data.forEach(investor => {
                    $('#paginateInvestorsStudent').append(`
                        <div class="col-6 col-md-3">
                        <div class="card m-1">
                            <img src="${investor.images}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${investor.username}</h5>
                                <p class="card-text">${investor.description}</p>
                                <a href="/investor/${investor._id}" class="btn btn-outline-primary">Read More</a>
                            <button class="btn btn-outline-danger likeBtn" id="${fund._id}"><i class="far fa-heart"></i></button>
                            </div>
                        </div>
                    `);
                });
            });
    }); 
    
    $(".col-xl-10").on("click", ".likeBtn", (e) => {
        const tag = $(e.target).is("button") ? $(e.target) : $(e.target).parent();
        
        if (tag.hasClass("btn-outline-danger")) {
            $.getJSON(`/student/like/${tag.attr("id")}`)
                .done((data) => {
                    if (data.done) {
                        tag.toggleClass("btn-danger");
                        tag.toggleClass("btn-outline-danger");
                    }
                });
        } else {
            $.getJSON(`/student/dislike/${tag.attr("id")}`)
                .done((data) => {
                    if (data.done) {
                        tag.toggleClass("btn-danger");
                        tag.toggleClass("btn-outline-danger");
                    }
                });
        }
    });
});