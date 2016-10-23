function solve() {
    $('#submit').on('click', function(event) {
        event.preventDefault();
        validateFields();
    });
    $('#company').on('change', function() {
        if ($('#company').is(':checked')) {
            $('#companyInfo').css('display', '');
        } else {
            $('#companyInfo').css('display', 'none');
        }
    });

    function validateFields() {
        let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        let emailPattern = /^.*@([^.]*\.[^.]*)+$/;
        let passwordPattern = /^\w{5,15}$/;
        let companyNumberPattern = /^[1-9][0-9]{3}$/;

        validateField('#username', usernamePattern);
        validateField('#email', emailPattern);
        validateField('#password', passwordPattern);
        validateField('#confirm-password', passwordPattern);
        if ($('#password').val() != $('#confirm-password').val()) {
            $('#password').css('border-color', 'red');
            $('#password').removeAttr('valid');
            $('#confirm-password').css('border-color', 'red');
            $('#confirm-password').removeAttr('valid');
        }

        if ($('#company').is(':checked')) {
            validateField('#companyNumber', companyNumberPattern);
        }

        if (($('#company').is(':checked') && $('input[valid="true"]').toArray().length == 5) ||
            (!$('#company').is(':checked') && $('input[valid="true"]').toArray().length == 4)) {
            $('#valid').css('display', '');
        } else {
            $('#valid').css('display', 'none');
        }
    }

    function validateField(id, pattern) {
        if ($(id).val().match(pattern)) {
            $(id).css('border-color', 'none');
            $(id).attr('valid', 'true');
        } else {
            $(id).css('border-color', 'red');
            $(id).removeAttr('valid');
        }
    }
}