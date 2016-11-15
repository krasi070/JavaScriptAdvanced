function attachEvents() {
    $('#btnAdd').on('click', addTown);
    $('#btnDelete').on('click', deleteTown);

    function addTown() {
        let townName = $('#newItem').val();
        if(townName != '') {
            $('#towns').append($('<option>').text(townName));
            $('#newItem').val('');
        }
    }
    
    function deleteTown() {
        $('#towns option:selected').remove();
    }
}