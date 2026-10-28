window.onload = function() {

    fetch('posts.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            let div = document.createElement("div");
            div.className = "layout";
            let aside1 = document.createElement("aside");
            aside1.className = "side";
            div.append(aside1);
            let main = document.createElement("main");
            main.className = "feed";
            div.append(main);
            for (let i = 0; i < json.length; i++) {
                let article = document.createElement("article");
                article.className = "post";
               
                let header = document.createElement("header");
                header.className = "post-header";
                
                let profile = document.createElement("img");
                profile.src = json[i].profile_picture;
                profile.width = 25;
                profile.height = 25;
                profile.alt = "Avatar";
                header.append(profile);
                
                let time = document.createElement("time");
                let rawDate = json[i].date;
                time.dateTime = rawDate;

                const dateObj = new Date(rawDate);
                time.innerText = dateObj.toLocaleDateString('en-US', {
                    month: 'short', // "Oct"
                    day: 'numeric', // "4"
                    year: 'numeric' // "2026"
                });

                header.append(time);
                article.append(header);
               
                if (json[i].image != null) {
                    let img = document.createElement("img");
                    img.className = "post-photo";
                    img.src = json[i].image;
                    article.append(img);
                }
               
                let text = document.createElement("p");
                text.className = "post-text";
                text.innerText = json[i].text;
                article.append(text);
               
                let like_button = document.createElement("button");
                like_button.className = "like";
                like_button.textContent = '👍';
                article.append(like_button);
               
                main.append(article);
            }
            let aside2 = document.createElement("aside");
            aside2.className = "side";
            div.append(aside2);
            
            document.body.appendChild(div);
        })
}