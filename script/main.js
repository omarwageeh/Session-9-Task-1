var navList = $('.nav-list');
var mainView = $('.main-view');
var navMenu = $('.nav-menu');
var carousel = $('.owl-carousel');
var itemInfo = $('.item-info');
var sizeSelector = $('size-selector');
var colorSelector = $('color-selector');
var footer = $('footer');
var lastTab = 'women'
var numberOfItems = 0;
var totalPrice = 0;
var selectedItems = [];
var selectedItem = {
    img: '',
    title: '',
    material: '',
    price: 0,
    size: '',
    color: ''
};

var cartItemTemplate = '<div class="cart-item d-flex flex-column jus p-2"> <div class="d-flex align-items-start"> <img class="img-fluid w-25" src="./assets/img/Rectangle 344.png" alt="" /> <div> <p class="cart-item-title">MOHAN</p> <p class="cart-item-material"> Recycle Boucle Knit Cardigan Pink </p> <div class="cart-item-counter justify-content-center align-items-center" > <i class="fa fa-minus rounded-circle border-light border-1 border me-2 p-1 minus-btn pointer" onclick="removeItem()" ></i> <span class="me-2">NUMBER</span> <i class="fa fa-plus rounded-circle border-light border-1 border p-1 plus-btn pointer" onclick="addItem()" ></i> <p class="cart-item-price">120</p> </div> </div> </div> <div class="color-size d-flex justify-content-between align-items-center" > <div class="color-selector d-flex align-items-center"> <p class="item-color mb-0 me-2">Color</p> <div class="color-btn rounded-circle me-1 active" onclick="colorToggle(this)" ></div> <div class="color-btn rounded-circle me-1" onclick="colorToggle(this)" ></div> <div class="color-btn rounded-circle me-1" onclick="colorToggle(this)" ></div> </div> <div class="size-selector d-flex align-items-center"> <p class="item-size mx-2">Size</p> <p class="size-btn rounded-circle border border-1 border-dark bg-black text-white me-1" onclick="sizeToggle(this)" > S </p> <p class="size-btn rounded-circle border border-1 border-dark me-1" onclick="sizeToggle(this)" > M </p> <p class="size-btn rounded-circle border border-1 border-dark" onclick="sizeToggle(this)" > L </p> </div> </div> </div>';
var selectedColor = $('.color-btn.active').css("background-color");
var selectedSize = 'S';

function openCart() {
    $('.sub-total-number').text('')
    mainView.addClass('d-none');
    $('.cart-wrapper').removeClass('d-none');
    if (selectedItems.length > 0) {
        $('.cart-item-counter').find('span').text(selectedItems.length);
        $('.sub-total-wrapper').addClass('d-flex').removeClass('d-none')
        $('.sub-total-number').text('$' + totalPrice);
    }

}
function closeCart() {
    mainView.removeClass('d-none');
    $('.cart-wrapper').addClass('d-none')
}
function openMenu() {
    mainView.addClass('d-none');
    footer.addClass('d-none')
    navMenu.removeClass('d-none');
    showTab(lastTab);
}
function hideMenu() {
    mainView.removeClass('d-none');
    footer.removeClass('d-none')
    navMenu.addClass('d-none');
}
function showTab(tabToShow) {
    var lastButton = $('.' + lastTab);
    lastButton.removeClass('border border-top-0 border-start-0 border-end-0 border-black').addClass('border-0')
    var button = $('.' + tabToShow);
    button.addClass('border border-top-0 border-start-0 border-end-0 border-black').removeClass('border-0');
    lastTab = tabToShow;
    tabToShow += '-tab';
    var flag = 0;
    for (var i = 0; i < navList.length; i++) {
        for (var j = 0; j < navList[i].classList.length; j++) {
            if (navList[i].classList[j] == tabToShow)
                flag = 1;
        }
        if (flag) {
            navList.eq(i).removeClass('d-none');
            flag = 0;
        }
        else {
            navList.eq(i).addClass('d-none');
        }
    }
}
function colorToggle(element) {
    $('.color-btn.active').removeClass('active');
    $(element).addClass('active');
    selectedColor = $(element).css('background-color');
}
function sizeToggle(element) {
    $('.size-btn.border-dark.bg-black.text-white').removeClass('border-dark bg-black text-white').addClass('border-dark');
    $(element).removeClass('border-dark').addClass('border-dark bg-black text-white')
    selectedSize = element.innerText;
}
function addItem() {
    numberOfItems++;
    selectedItem.img = $('.item-img').attr('src');
    selectedItem.title = $('.item-title').text();
    selectedItem.material = $('.item-material').text();
    selectedItem.price = Number($('.item-price').text());
    selectedItem.size = selectedSize;
    selectedItem.color = selectedColor;
    selectedItems.push(selectedItem);
    if (numberOfItems == 1) {
        var cartItem = $(cartItemTemplate);
        cartItem.find('img').attr('src', './assets/img/Rectangle 344.png')
        cartItem.find('.cart-item-title').text(selectedItem.title);
        cartItem.find('cart-item-material').eq(1).text(selectedItem.material);
        cartItem.find('')
        $('.cart-items').append(cartItem);
    }
    totalPrice += Number(selectedItem.price);
    $('.sub-total-number').text('$' + totalPrice);
    $('.add-basket').addClass('d-none');
    $('.item-counter').removeClass('d-none').addClass('d-flex').find('span').text(selectedItems.length);
    $('.cart-item-counter').find('span').text(selectedItems.length);

}
function removeItem() {

    if (selectedItems.length) {
        numberOfItems--;
        var removedItem = selectedItems.pop();
        totalPrice -= removedItem.price;
        $('.sub-total-number').text('$' + totalPrice);
        $('.item-counter').find('span').text(selectedItems.length);
        $('.cart-item-counter').find('span').text(selectedItems.length);
        if (selectedItems.length == 0) {
            $('.add-basket').removeClass('d-none');
            $('.item-counter').removeClass('d-flex').addClass('d-none');
            $('.cart-item-counter').find('span').text(selectedItems.length);
        }
    }
}
$('document').ready(function () {

});

