//https://firebase.google.com/docs/storage/web/create-reference?hl=pt-br
//Obtendo os elementos

var uploader = document.getElementById('uploader')
var fileButton = document.getElementById('fileButton')

//Ouvir o evento change
fileButton.addEventListener('change', function(e){
    //obter o arquivo
    e.preventDefault();
    var file = e.target.files[0]

    //Referenciar o Storage
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var imagesRef = storageRef.child('arquivos');
    var spaceRef = storageRef.child('arquivos/'+file.name);

    //enviar o arquivo
    var task= spaceRef.put(file)

    //atualizar o Progress Bar
    task.on('state_changed',
        function progress(snapshot){
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            uploader = percentage
        },
        function error (err){
            console.log(err)
        },
        function completa(){
            alert('Envio Completo!!!')
        }
    )
})