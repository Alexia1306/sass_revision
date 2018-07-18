
$(document).ready(function(){









// for (var i = 0; i < catalog.length; i++) {


var product = `<div class="col-md-12 col-lg-6">\
                <section class="productImg">\
                    <ul class="slider">\
                    `+for (var i = 0; i < array.length; i++) {
                        `<li>\
                            <img class="mainPIC" src="` lasource  `.png" alt="pic">\
                        </li>`
                    }`
                    </ul>\
                </section>\
            </div>\
            <div class="col-md-12 col-lg-6 ">\
                <div class="row">\
                    <div class=" col-sm-12 col-md-6 col-lg-12 ">\
                        <h2>${Your product[i]}</h2>\
                        <section class="productDesc">\
                        <div class="row">\
                            <div class="col-lg-6 col-md-12">\
                                <ul class="listProduct">\
                                    <li> <p class="titleP">Price :</p> 350.56$</li>\
                                    <li><p class="d-inline titleP">Quantié</p>\
                                        <select class="" name="quantity">\
                                        <option value="1" selected="" >1</option>\
                                        `+for (var i = 0; i < array.length; i++) {
                                            `<option value="${i}">${i}</option>`
                                        }`
                                        </select>\
                                    </li>\
                                    <li><p class="titleP ">Disponibility :</p> ${Disponible}</li>\
                                </ul>\
                            </div>\
                            <div class="col-lg-6 col-md-12">\
                                <h3 class="titleP">Description :</h3>\
                                <p>${Description[0]}</p>\
                            </div>\
                        </div>\
                        <!-- <input id="nbQte" type="number" min="0" > -->\
                        <button type="button" name="btnAdd">Add to Cards</button>\
                    </section>\
                    </div>\
                    <div class="col-sm-12 col-md-6  col-lg-12">\
                        <h2>Comments</h2>\
                        <section class="comments ">\
                            <div class="media">\
                                  <img class="mr-3" src="https://picsum.photos/64x64" alt="Generic placeholder image">\
                                  <div class="media-body">\
                                    <h5 class="mt-0">Media heading</h5>\
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras\
                                  </div>\
                            </div>\
                            <div class="media">\
                                  <img class="mr-3" src="https://picsum.photos/64x64" alt="Generic placeholder image">\
                                  <div class="media-body">\
                                    <h5 class="mt-0">Media heading</h5>\
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras\
                                  </div>\
                            </div>\
                        </section>\
                    </div>\
                </div>\
            </div>`



            // $(".productSlot").append(product);

        }

















        })
