//in a separate file to avoid mixed JS and HTML
function cardify(obj){
return `<div class="card show-tweet">
    <div class="span tweet-options">
        <i class="fa fa-remove tool float-right"></i>
        <i class="fa fa-check tool float-right"></i>
    </div>
    <h1> You Said: </h1>
    <blockquote class="twitter-tweet" data-lang="en"><p lang="und" dir="ltr">${obj.body}</p>&mdash; ${obj.username} (@${obj.handle}) <a href="${obj.url}" >${obj.date}</a></blockquote>
    <div class="card-footer">
        ${obj.date} Days Ago
    </div>
</div>`;
}
