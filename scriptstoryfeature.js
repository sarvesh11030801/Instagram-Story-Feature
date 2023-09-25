var stories = document.querySelector("#stories")
var fullscr = document.querySelector("#fullscreen")

var arr = [
    {profpic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUO6gxLOWh_vEPqYKOXiiPehbYge5MtLyZw&usqp=CAU",
    story:"https://images.squarespace-cdn.com/content/v1/5944f4962e69cf526589c939/1514032488628-N4X7SYIYPQNJZ7XPLU5K/Denver+Shahrukh+Khan+%2819th+June+2017%29354951.jpg?format=2500w"},
    {profpic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00cn7CgOeLZrrzrmlt22pVbNG5dDLh5xE-w&usqp=CAU",
    story:"https://img.mensxp.com/media/content/2021/Aug/RTR2JSO9_6127a60bf2cfb.jpeg"},
    {profpic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRiArHVufqhwZeVg2yw6Bj3QDgwR-nb4YErQ&usqp=CAU",
    story:"https://www.pngkit.com/png/full/899-8998984_did-you-know-hrithik-roshan-images-download.png"},
    {profpic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MLEQfHl0OiHH4gQeI3Yp5KL-6I2SOLzElw&usqp=CAU",
    story:"https://e0.pxfuel.com/wallpapers/667/27/desktop-wallpaper-virat-kohli-full-screen-virat-kohli-mobile.jpg"},
    {profpic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2K7QmKO3FNLXR9UolhpJ3Yg-T-9QvdJanLVmNROYEY4E3kzx-dV90RF8CyrVq8Bi1LQ&usqp=CAU",
    story:"https://img.mensxp.com/media/content/2021/Sep/When-Salman-Khan-Almost-Got-Married-7_614c66aac673c.jpeg"},
    {profpic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYe-ZsZXPwRcqzvQ2FWUIXl5jVgkNpQ0RmRg&usqp=CAU",
    story:"https://www.behindwoods.com/hindi-actor/ranveer-singh/ranveer-singh-stills-photos-pictures-44.jpg"},
    {profpic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh78I_re1BdS62HDJ383xbxVsbSZRQbSISzw&usqp=CAU",
    story:"https://w0.peakpx.com/wallpaper/729/294/HD-wallpaper-alia-bhatt-thumbnail.jpg"},
    {profpic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNuz7v_dEuIGL05qRIAykX2qGJ-MNexyDV0TafrbA1r0wQczIxYfPvju1_41W37AnrxGU&usqp=CAU",
    story:"https://ridhimabhasin.com/cdn/shop/products/kiara-advani-in-embellished-3d-jacket_5.jpg?v=1656067394"},
    {profpic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-GpOb1ZumwwwSbtwjb0lWk_s2ZPf2KdfzMw&usqp=CAU",
    story:"https://filmfare.wwmindia.com/photogallery/2022/feb/deepikapadukone11643880747.jpg"},
]

var clutter = ""

arr.forEach(function(elem, idx){
    clutter += `<div class="ekekstory">
    <img id = "${idx}" src="${elem.profpic}" alt="">
</div>`
})

stories.innerHTML = clutter

stories.addEventListener("click", function(dets){
    // console.log(arr[dets.target.id].story)
    fullscr.style.display = "block"
    fullscr.style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        fullscr.style.display = "none"
    },3000)
})