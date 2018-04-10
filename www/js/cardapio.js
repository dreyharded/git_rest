var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="lista_cardapio"]', function (e) {
    firebase.database().ref('cardapio').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#usersList").empty();
    
        snapshot.forEach(function(item){
              var listHtml = '<div class="row block block-strong">';
                //listHtml += '<td class="label-cell">'+item.key+'</td>';
                listHtml += '<div class="col-25">'+ item.val().nome +'</div>';
                listHtml += '<div class="col-25">'+ item.val().descricao +'</div>';
                listHtml += '<div class="col-25">'+ item.val().preco +'</div>';
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#usersList").append(listHtml);
    
        })
    })
    
});
                
  
