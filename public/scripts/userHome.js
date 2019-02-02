$(() => {
    var fundPage = 1;
    var invPage = 1;

    $.ajax("/fundraiser/pagination/" + fundPage)
            .done(data => {
                data.forEach(fund => {
                    $('#paginateFundraisers').append(`
                        <div class="col-6 col-md-3">
                        <div class="card m-1">
                            <img src="${fund.images[0]}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${fund.title}</h5>
                                <p class="card-text">${fund.summary}</p>
                                <a href="/fundraiser/${fund._id}" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    `);
                });
            });
    
    $.ajax("/investor/pagination/" + invPage)
            .done(data => {
                data.forEach(investor => {
                    $('#paginateInvestors').append(`
                        <div class="col-6 col-md-3">
                        <div class="card m-1">
                            <img src="${investor.images}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${investor.username}</h5>
                                <p class="card-text">${investor.description}</p>
                                <a href="/investor/${investor._id}" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    `);
                });
            });
    
    $('#prevFundraisers').on("click", () => {
        fundPage = fundPage - 1;
        if(fundPage<=0){fundPage=1;}
        $.ajax("/fundraiser/pagination/" + page)
            .done(data => {
                $('#paginateFundraisers').html("");
                data.forEach(fund => {
                    $('#paginateFundraisers').append(`
                        <div class="col-6 col-md-3">
                        <div class="card m-1">
                            <img src="${fund.images[0]}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${fund.title}</h5>
                                <p class="card-text">${fund.summary}</p>
                                <a href="/fundraiser/${fund._id}" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    `);
                });
            });
    });
    
    $('#nextFundraisers').on("click", () => {
        fundPage = fundPage + 1;
        $.ajax("/fundraiser/pagination/" + fundPage)
            .done(data => {
                $('#paginateFundraisers').html("");
                data.forEach(fund => {
                    $('#paginateFundraisers').append(`
                        <div class="col-6 col-md-3">
                        <div class="card m-1">
                            <img src="${fund.images[0]}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${fund.title}</h5>
                                <p class="card-text">${fund.summary}</p>
                                <a href="/fundraiser/${fund._id}" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    `);
                });
            });
    });
    
    $('#prevInvestors').on("click", () => {
        invPage = invPage - 1;
        if(invPage<=0){invPage=1;}
        $.ajax("/investor/pagination/" + invPage)
            .done(data => {
                $('#paginateInvestors').html("");
                data.forEach(investor => {
                    $('#paginateInvestors').append(`
                        <div class="col-6 col-md-3">
                        <div class="card m-1">
                            <img src="${investor.images}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${investor.username}</h5>
                                <p class="card-text">${investor.description}</p>
                                <a href="/investor/${investor._id}" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    `);
                });
            });
    });
    
    $('#nextInvestors').on("click", () => {
        invPage = invPage + 1;
        $.ajax("/investor/pagination/" + invPage)
            .done(data => {
                $('#paginateInvestors').html("");
                data.forEach(investor => {
                    $('#paginateInvestors').append(`
                        <div class="col-6 col-md-3">
                        <div class="card m-1">
                            <img src="${investor.images}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${investor.username}</h5>
                                <p class="card-text">${investor.description}</p>
                                <a href="/investor/${investor._id}" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    `);
                });
            });
    });
    
})