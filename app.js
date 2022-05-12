const btn = document.getElementById('btn');

btn.addEventListener('click', togglelight);

function togglelight() {
    var element = document.body;
    element.classList.toggle("light");

    var contain = document.getElementsByClassName("container")[0];
    contain.classList.toggle("light");

    var prof = document.getElementsByClassName("profile")[0];
    prof.classList.toggle("light");
}


// var bannerlink = [
//     'cover.png',
//     'https://i.pinimg.com/736x/8e/93/21/8e93216dcb9ff814d2414f96123934a3.jpg',
//     'https://i.pinimg.com/564x/7c/90/a1/7c90a1cb82e14e7615fe294144873574.jpg',
//     'https://i.pinimg.com/564x/95/14/a3/9514a3e2d0b49c2a481102d23321fdf4.jpg',
//     'https://i.pinimg.com/564x/89/aa/9c/89aa9cd8276a6f83d7e0456fd6f5e6df.jpg',
//     'https://i.pinimg.com/564x/2a/29/fe/2a29fecaa46fad00e723030cb1f2897f.jpg',
//     'https://i.pinimg.com/564x/b6/5a/9e/b65a9e2d0855f36da88ec53c20358cd4.jpg',
//     'https://thumbs.gfycat.com/AnnualBossyBighornsheep-size_restricted.gif',
//     'http://78.media.tumblr.com/580559793b9d675fdc12168bbd273e42/tumblr_p755y2PLUz1x78qg6o1_1280.gif',
// ];

var bannerlink = [
//     'https://pbs.twimg.com/profile_banners/1367526276995588096/1651046753/1500x500'
//     'https://cdn.discordapp.com/attachments/842248295351189506/974027991367708732/1500x500hh.jpeg'
//     'https://cdn.discordapp.com/attachments/842248295351189506/974028136230559834/hghhg.jpeg'
//     'https://cdn.discordapp.com/attachments/842248295351189506/974115866432122900/300.jpeg'
//     'https://cdn.discordapp.com/attachments/842248295351189506/974115950725070898/400.jpeg'
//     'https://cdn.discordapp.com/attachments/842248295351189506/974124068854964234/500.jpeg'
    'https://cdn.discordapp.com/attachments/842248295351189506/974129432988102666/550.jpeg'
];


var randomNumber = Math.floor(Math.random() * bannerlink.length);

var cvr = document.getElementsByClassName("cover-photo")[0];
link = bannerlink[randomNumber]
cvr.style.background = `url(${link})`;
