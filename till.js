var apples = { 
    name: "Apples",
    price:0.99
}

var products =["apples", "oranges", "bananas","mangoes","pears"]

for ( var productIndex = 0; productIndex < products.length; productIndex ++) {

    var buttonsContainer = document.getElementById('buttons')

    var product = products[productIndex]

      var buttonsHTML = '<div class="col-md-2">'
        buttonsHTML +=      '<div class="panel panel-default">'
        buttonsHTML +=        '<div class="panel-heading">'
        buttonsHTML +=          '<h3 class="panel-title">' + product.name + '</h3>'
        buttonsHTML +=        '</div>'
        buttonsHTML +=        '<div class="panel-body">'
        buttonsHTML +=          '<p>'
        buttonsHTML +=            '<strong>Price: </strong> £0.99'
        buttonsHTML +=          '</p>'
        buttonsHTML +=          '<button type="button" class="btn btn-primary" onclick="till.add(\'' + product.name + '\')">Add</button>'
        buttonsHTML +=        '</div>'
        buttonsHTML +=      '</div>'
        buttonsHTML +=    '</div>'

    buttonsContainer.innerHTML += buttonsHTML

}


