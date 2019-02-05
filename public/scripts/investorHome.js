$(() => {
    var fundPage = 1;
    var invPage = 1;

    $.ajax("/fundraiser/pagination/" + fundPage)
        .done(data => {
            data.forEach(fund => {
                $('#paginateFundraisersInvestor').append(`
                    <div class="col-6 col-md-3">
                    <div class="card m-1">
                        <img src="${fund.images[0]}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${fund.title}</h5>
                            <p class="card-text">${fund.summary}</p>
                            <a href="/fundraiser/${fund._id}" class="btn btn-outline-primary">Read More</a>
                            <a href="#" class="btn btn-outline-danger"><i class="far fa-heart"></i></a>
                        </div>
                    </div>
                `);
            });
        });
    
    $.ajax("/investor/pagination/" + invPage)
        .done(data => {
            data.forEach(investor => {
                $('#paginateInvestorsInvestor').append(`
                    <div class="col-6 col-md-3">
                    <div class="card m-1">
                        <img src="${investor.images}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${investor.username}</h5>
                            <p class="card-text">${investor.description}</p>
                            <a href="/investor/${investor._id}" class="btn btn-outline-primary">Read More</a>
                            <a href="#" class="btn btn-outline-danger"><i class="far fa-heart"></i></a>
                        </div>
                    </div>
                `);
            });
        });
    
    $('#prevFundraisersInvestor').on("click", () => {
        fundPage = fundPage - 1;
        if(fundPage<=0){fundPage=1;}

        $('#paginateFundraisersInvestor').html("<div class='loader'></div>");
        $.ajax("/fundraiser/pagination/" + fundPage)
            .done(data => {
                $('#paginateFundraisersInvestor').html("");
                data.forEach(fund => {
                    $('#paginateFundraisersInvestor').append(`
                        <div class="col-6 col-md-3">
                        <div class="card m-1">
                            <img src="${fund.images[0]}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${fund.title}</h5>
                                <p class="card-text">${fund.summary}</p>
                                <a href="/fundraiser/${fund._id}" class="btn btn-outline-primary">Read More</a>
                            <a href="#" class="btn btn-outline-danger"><i class="far fa-heart"></i></a>
                            </div>
                        </div>
                    `);
                });
            });
    });
    
    $('#nextFundraisersInvestor').on("click", () => {
        fundPage = fundPage + 1;

        $('#paginateFundraisersInvestor').html("<div class='loader'></div>");
        $.ajax("/fundraiser/pagination/" + fundPage)
            .done(data => {
                $('#paginateFundraisersInvestor').html("");
                data.forEach(fund => {
                    $('#paginateFundraisersInvestor').append(`
                        <div class="col-6 col-md-3">
                        <div class="card m-1">
                            <img src="${fund.images[0]}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${fund.title}</h5>
                                <p class="card-text">${fund.summary}</p>
                                <a href="/fundraiser/${fund._id}" class="btn btn-outline-primary">Read More</a>
                            <a href="#" class="btn btn-outline-danger"><i class="far fa-heart"></i></a>
                            </div>
                        </div>
                    `);
                });
            });
    });
    
    $('#prevInvestorsInvestor').on("click", () => {
        invPage = invPage - 1;
        if(invPage<=0){invPage=1;}

        $('#paginateInvestorsInvestor').html("<div class='loader'></div>");
        $.ajax("/investor/pagination/" + invPage)
            .done(data => {
                $('#paginateInvestorsInvestor').html("");
                data.forEach(investor => {
                    $('#paginateInvestorsInvestor').append(`
                        <div class="col-6 col-md-3">
                        <div class="card m-1">
                            <img src="${investor.images}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${investor.username}</h5>
                                <p class="card-text">${investor.description}</p>
                                <a href="/investor/${investor._id}" class="btn btn-outline-primary">Read More</a>
                            <a href="#" class="btn btn-outline-danger"><i class="far fa-heart"></i></a>
                            </div>
                        </div>
                    `);
                });
            });
    });
    
    $('#nextInvestorsInvestor').on("click", () => {
        invPage = invPage + 1;

        $('#paginateInvestorsInvestor').html("<div class='loader'></div>");
        $.ajax("/investor/pagination/" + invPage)
            .done(data => {
                $('#paginateInvestorsInvestor').html("");
                data.forEach(investor => {
                    $('#paginateInvestorsInvestor').append(`
                        <div class="col-6 col-md-3">
                        <div class="card m-1">
                            <img src="${investor.images}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${investor.username}</h5>
                                <p class="card-text">${investor.description}</p>
                                <a href="/investor/${investor._id}" class="btn btn-outline-primary">Read More</a>
                            <a href="#" class="btn btn-outline-danger"><i class="far fa-heart"></i></a>
                            </div>
                        </div>
                    `);
                });
            });
    });    
})