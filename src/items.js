(function($) {

    $(function(){ 
    var album = {
        "items":[
        {
            "albumId": "1",
            "id": "1",
            "title": "Background Games",
            "url": "https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/58675129_274784446738537_1584118401305935872_n.jpg?_nc_cat=1&_nc_ht=scontent.fntr3-1.fna&oh=1f7a42940a5807d0d6d4a4bf89b63d9a&oe=5D2A097C",
            "thumbnailUrl":"https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/58675129_274784446738537_1584118401305935872_n.jpg?_nc_cat=1&_nc_ht=scontent.fntr3-1.fna&oh=1f7a42940a5807d0d6d4a4bf89b63d9a&oe=5D2A097C"
        },
        {   
            "albumId": "1",
            "id": "2",
            "title": "Background Harry Potter",
            "url": "https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/58372949_274790520071263_6320645190449102848_n.jpg?_nc_cat=1&_nc_ht=scontent.fntr3-1.fna&oh=4e15b515c1806becf6d57db69da93433&oe=5D361F21",
            "thumbnailUrl": "https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/58372949_274790520071263_6320645190449102848_n.jpg?_nc_cat=1&_nc_ht=scontent.fntr3-1.fna&oh=4e15b515c1806becf6d57db69da93433&oe=5D361F21"
        },
        {   
            "albumId": "1",
            "id": "3",
            "title": "Background Marvel",
            "url": "https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/58442451_274784493405199_6582470807744675840_n.jpg?_nc_cat=1&_nc_ht=scontent.fntr3-1.fna&oh=94260dca109cda285cc029b63fbf747b&oe=5D3363A5",
            "thumbnailUrl": "https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/58442451_274784493405199_6582470807744675840_n.jpg?_nc_cat=1&_nc_ht=scontent.fntr3-1.fna&oh=94260dca109cda285cc029b63fbf747b&oe=5D3363A5"
        },
        {   
            "albumId": "1",
            "id": "4",
            "title": "Background DC",
            "url": "https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/58461186_274784553405193_1750655006589059072_n.jpg?_nc_cat=1&_nc_ht=scontent.fntr3-1.fna&oh=97e395173d965611ad860df75db29fd6&oe=5D309EB8",
            "thumbnailUrl": "https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/58461186_274784553405193_1750655006589059072_n.jpg?_nc_cat=1&_nc_ht=scontent.fntr3-1.fna&oh=97e395173d965611ad860df75db29fd6&oe=5D309EB8"
        },
        {   
            "albumId": "1",
            "id": "5",
            "title": "Background Star Wars",
            "url": "https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/57774912_274784653405183_1535196090989543424_n.jpg?_nc_cat=1&_nc_ht=scontent.fntr3-1.fna&oh=afb38cd145a463b1f613e779b38a73e0&oe=5D29A5C6",
            "thumbnailUrl": "https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/57774912_274784653405183_1535196090989543424_n.jpg?_nc_cat=1&_nc_ht=scontent.fntr3-1.fna&oh=afb38cd145a463b1f613e779b38a73e0&oe=5D29A5C6"
        },
        {   
            "albumId": "1",
            "id": "6",
            "title": "Background Dragon Ball",
            "url": "https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/58377611_274784693405179_3873389536906051584_n.jpg?_nc_cat=1&_nc_ht=scontent.fntr3-1.fna&oh=29bfa10f6d6fa1349a10c625e3b3674b&oe=5D6FF9F2",
            "thumbnailUrl": "https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-9/58377611_274784693405179_3873389536906051584_n.jpg?_nc_cat=1&_nc_ht=scontent.fntr3-1.fna&oh=29bfa10f6d6fa1349a10c625e3b3674b&oe=5D6FF9F2"
        }
        ]
    },data=album.items,
    target=$('#target'),
    html;

    $.each(data, function(key,val)
    {
        html = '<div class="image-list">';
        html += '<a href="'+val.thumbnailUrl +'"><img src ="' + val.url + '" class="image-styles" height="300" width="520" /></a>';
        html += '<p class="image-title">' + val.title + '</p>';
        html += '</div>';
        target.append(html);
    });
}); 

}(jQuery));