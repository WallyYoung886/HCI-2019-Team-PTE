let position, newCommudata, newFindings, newComments;
let commuArray = [];

$(document).ready( function() {

    firstLoad();
    createPosts();
    createFindings();
    createComments();
    autoReply();

    $("#notification-float").hide();
    $("#my-comment").hide();


    $("#home-button").click(function(e){
        e.preventDefault();
        if(position!=0) {
            resetNav();
            $(this).attr("src","imgs/home-hi.png");
            $("#home-page").show();
            $("#nav-title").text("Home");
            position = 0;
        }
    });

    $("#bell-btn").click(function(e){
        $("#notification-float").toggle();
    });

    $("#commu-button").click(function(e){
        e.preventDefault();
        if(position!=1) {
            resetNav();
            $(this).attr("src","imgs/commu-hi.png");
            $("#community").show();
            $("#nav-title").text("Community");
            position = 1;
        }
    });

    $("#history-button").click(function(e){
        e.preventDefault();
        if(position!=2) {
            resetNav();
            $(this).attr("src","imgs/history-hi.png");
            $("#history").show();
            $("#nav-title").text("History");
            position = 2;
        }
    });

    $("#commu-body article").click(function(){
        let title = $(this).find("h3").text();
        for(let i=0;i<newCommudata.length;i++){
            if(title == newCommudata[i].title){
                window.location.href=`post-detail.html?id=${i}`;
            }
        }
    });

    $("#myfin").click(function(){
        $("#myfin").removeClass("hi-li");
        $("#mycom").addClass("hi-li");
        $("#my-finding").show();
        $("#my-comment").hide();
    });
    $("#mycom").click(function(){
        $("#myfin").addClass("hi-li");
        $("#mycom").removeClass("hi-li");
        $("#my-finding").hide();
        $("#my-comment").show();
    });

});

const firstLoad = () => {
    resetNav();
    $("#home-button").attr("src","imgs/home-hi.png");
    $("#home-page").show();
    position = 0;
    //set for post data
    if(!localStorage.getItem("founditData")){
        localStorage.setItem("founditData",JSON.stringify(commudata));
    }
    newCommudata = JSON.parse(localStorage.getItem("founditData"));
    
    //set for history data
    if(!localStorage.getItem("founditHistory")){
        localStorage.setItem("founditHistory",JSON.stringify(myfindings));
    }
    newFindings = JSON.parse(localStorage.getItem("founditHistory"));
    
    if(!localStorage.getItem("founditComment")) {
        localStorage.setItem("founditComment",JSON.stringify(mycomments));
    }
    newComments = JSON.parse(localStorage.getItem("founditComment"));

}

function resetNav(){
    $("#home-button").attr("src","imgs/home.png");
    $("#commu-button").attr("src","imgs/commu.png");
    $("#history-button").attr("src", "imgs/history.png");

    $("#home-page").hide();
    $("#community").hide();
    $("#history").hide();
}

function createPosts() {
    let commu = document.getElementById("commu-body");
    newCommudata.forEach(function(post){
        let article = createOnePost(post);
        commu.appendChild(article);
        commuArray.push(article);
    });
}

function createOnePost(post) {
    let article = document.createElement("article");
    let textBox = document.createElement("section");
    let title = document.createElement("h3");
    let detail = document.createElement("p");
    let infoBlock = document.createElement("div");
    let poster = document.createElement("p");
    let timestamp = document.createElement("p");
    title.innerHTML = post.title;
    detail.innerHTML = post.description;
    poster.innerHTML = post.source;
    timestamp.innerHTML = post.time;
    textBox.appendChild(title);
    textBox.appendChild(detail);
    infoBlock.appendChild(poster);
    infoBlock.appendChild(timestamp);
    infoBlock.setAttribute("class","post-info");
    textBox.appendChild(infoBlock);
    article.appendChild(textBox);

    if(post.pic){
        let picData = post.pic;
        let pic = document.createElement("img");
        if(picData=="photoImg"){
            pic.src = localStorage.getItem("photoImg");
        }
        else if(picData == "drawImg"){
            pic.src = localStorage.getItem("drawImg");
        }
        else {
            pic.src = picData;
        }
        pic.setAttribute("style","border-radius:5px;");
        article.appendChild(pic);
    }
    return article;
}

function createFindings(){
    let histprySec = document.getElementById("my-finding");
    newFindings.forEach(item => {
        histprySec.appendChild(createSingleFinding(item));
    });
}

function createComments(){
    let histComm = document.getElementById("my-comment");
    newComments.forEach(item => {
        histComm.appendChild(createSingleFinding(item));
    });
}

function createSingleFinding(item) {
    let linkA = document.createElement("a");
    let findingTemp = document.createElement("section");
    let findImg = document.createElement("img");
    let findP = document. createElement("p");
    let findTime = document.createElement("p");
    let picData = item.pic;
    if(picData=="photoImg"){
        findImg.src = localStorage.getItem("photoImg");
        linkA.href = `result-revisit.html?type=pic&link=${item.link}`;
    }
    else if(picData == "drawImg"){
        findImg.src = localStorage.getItem("drawImg");
        linkA.href = `result-revisit.html?type=draw&link=${item.link}`;
    }
    else {
        findImg.src = "imgs/text-search.png";
        linkA.href = `result-revisit.html?type=n&link=${item.link}`;
    }
    
    findP.innerHTML = item.title;
    findTime.innerHTML = item.date;

    findingTemp.className = ("finding");
    findingTemp.appendChild(findImg);
    findingTemp.appendChild(findP);
    findingTemp.appendChild(findTime);
    findTime.className = "time";
    linkA.appendChild(findingTemp);
    return linkA;
}

function autoReply(){
    let posted = localStorage.getItem("posted");
    let visited = localStorage.getItem("visited");

    if(posted=="true" && visited=="true"){
        let noti = document.getElementById("notification-float");
        
        if ( noti.hasChildNodes() ){
            while (noti.childNodes.length >= 1) {
                noti.removeChild(noti.firstChild);
            }
        }

        autoreplys.forEach(item => {
            let linkA = document.createElement("a");
            let div=document.createElement("div");
            let user = document.createElement("p");
            let content = document.createElement("p");
            linkA.href = `post-detail.html?id=${newCommudata.length-1}`;
            linkA.className = "noti-item";
            user.innerHTML = item.poster;
            content.innerHTML = item.content;
            div.appendChild(user);
            div.appendChild(content);
            linkA.appendChild(div);
            noti.appendChild(linkA);

            newCommudata[newCommudata.length-1].comments.push(item);
            
        });
        $("#bell-btn").attr("src","imgs/bell-hi.png");
        localStorage.setItem("founditData",JSON.stringify(newCommudata));
        localStorage.setItem("posted",false);
        localStorage.setItem("visited",false);
    }
}