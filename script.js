let dropdown = $('#dog-breed');
let breed;
let allowSubmit = true;

$.get("https://dog.ceo/api/breeds/list/all", (data)=>{
    let dogBreeds = data.message;
    for (let breed in dogBreeds) {
       dropdown.append('<option value="' + breed + '">' + breed + '</option>');
    }
});

dropdown.change(()=>{
    allowSubmit = true;
});

$('form button').click((e)=>{
    e.preventDefault();
    if(allowSubmit){
        breed = dropdown.val();
        displayDog(breed);
        allowSubmit = false;
    }
});

$(".box button").click((e)=>{
    e.preventDefault();
    if(breed && !allowSubmit){
        displayDog(breed);
    }
})


const displayDog = (breed)=>{
    $('.dog-img img').remove();
    $.get("https://dog.ceo/api/breed/" + breed + "/images/random" , (data)=>{
        $('.dog-img').append('<img src="'+ data.message +'" alt="'+ breed +'">');
    });
}
