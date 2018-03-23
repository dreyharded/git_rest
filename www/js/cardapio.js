var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="listar_cardapio"]', function (e) {
    firebase.database().ref('cardapio').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#usersList").empty();
    
        snapshot.forEach(function(item){
              var listHtml = '<div class="row">';
                //listHtml += '<td class="label-cell">'+item.key+'</td>';
                listHtml += '<div class="col-25">'+ item.val().Nome +'</div>';
                listHtml += '<div class="col-25">'+ item.val().Descricao +'</div>';
                listHtml += '<div class="col-25">'+ item.val().Preco +'</div>';
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#usersList").append(listHtml);
    
            
        })
    })
    
});
                
  
