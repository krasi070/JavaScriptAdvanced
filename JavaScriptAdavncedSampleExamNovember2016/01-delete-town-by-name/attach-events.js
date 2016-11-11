function attachEvents() {
    $('#btnDelete').on('click', deleteTown);
    function deleteTown() {
        let townName = $('#townName').val();
        let towns = $('#towns option').toArray();
        let prevLength = towns.length;
        let townToDelete = towns.filter(t => $(t).val() == townName);
        if (townToDelete.length > 0) {
            $(townToDelete).remove();
            $('#result').text(townName + ' deleted.');
        } else {
            $('#result').text(townName + ' not found.');
        }
    }
}