/**
 *	Cargar lista de dominios
 **/
$(window).on('load', function() {
	$.ajax({type: 'POST',
		datatype: 'json',
		url: 'inc/php/WHM_actions.php',
		data: JSON.stringify({'action': 'get_domains'})
	}).done(function(json) {
		if (json.success) {
			$('#domain').html(json.html);
			$('#domain').prop('disabled', false);
		} else {
			swal('', 'Hubo un problema al listar los dominios. Verifique los datos del cP_config.php', 'warning');
		}		
	}).fail(function (xhr, textStatus, errorThrown) {
		alert("XML: " + XMLHttpRequest + " -- Status: " + textStatus + " -- Error: " + errorThrown);
	});
});

/**
 *	Actions al seleccionar un dominio
 **/
$('#domain').on('change', function() {
	$('#email-table-container').removeClass('hidden');
	$('#email_nav').removeClass('hidden');
	$('#no-domain').addClass('hidden');
	$('.domain').html('@'+$('#domain').val());

	list_emails();
});


/**
 *	Listar cuentas de correo
 **/
function list_emails() {
	$.ajax({type: 'POST',
		datatype: 'json',
		url: 'inc/php/WHM_actions.php',
		data: JSON.stringify({
			'action':	'get_emails',
			'cP_user':	$('#domain option:selected').attr('cp_user'),
			'domain':	$('#domain').val()
		})
	}).done(function(json) {
		if (json.success) {
			$('#email_list').html(json.html);
		} else {
			swal('', json.msg, 'error');
		}		
	}).fail(function (xhr, textStatus, errorThrown) {
		alert("XML: " + XMLHttpRequest + " -- Status: " + textStatus + " -- Error: " + errorThrown);
	});
}

/**
 *	Abrir modal-> crear cuenta
 **/
function create_modal() {
	$('#create_account_modal').modal('show');
}

/**
 *	Crear cuenta
 **/
$('#create_account').on('click', function() {
	if( $('#create_user').val() != '' || $('#create_pass_f').val() != '' || $('#create_pass_s').val() != '' || $('#create_quota').val() != '' ) {

		$('#create_account').html('Por favor espere...');
		$('#create_account').prop('disabled', true);

		$.ajax({type: 'POST',
			datatype: 'json',
			url: 'inc/php/WHM_actions.php',
			data: JSON.stringify({
				'action':		'new_account',
				'cP_user':		$('#domain option:selected').attr('cp_user'),
				'email_domain':	$('#domain').val(),
				'email_name': 	$('#create_user').val(),
				'email_pass': 	$('#create_pass_f').val(),
				'email_quota':	$('#create_quota').val()
			})
		}).done(function(json) {
			if (json.success) {
				swal('', json.msg, 'success');
				list_emails();
				$('#create_account_modal').modal('hide');
				$('#create_account').html('<i class="fa fa-plus"></i> Crear cuenta');
				$('#create_account').prop('disabled', false);
				$('#create_user').val('');
				$('#create_pass').val('');
				$('#create_quota').val('');
			} else {
				swal('', json.msg, 'error');
				$('#create_account').prop('disabled', false);
			}		
		}).fail(function (xhr, textStatus, errorThrown) {
			alert("XML: " + XMLHttpRequest + " -- Status: " + textStatus + " -- Error: " + errorThrown);
		});
	} else {
		swal('', 'Por favor complete todos los campos.', 'warning');
	}
});

/**
 *	modal->crear [ver pass_f]
 **/
$('#view_pass_f').on('click', function() {
	if( $('#create_pass_f').attr('type') == 'password') {
		$('#view_pass_f').addClass('fa-eye');
		$('#view_pass_f').removeClass('fa-eye-slash');		
		$('#create_pass_f').attr('type', 'text');
	} else {
		$('#view_pass_f').addClass('fa-eye-slash');
		$('#view_pass_f').removeClass('fa-eye');		
		$('#create_pass_f').attr('type', 'password');
	}
});

/**
 *	modal->crear [ver pass_s]
 **/
$('#view_pass_s').on('click', function() {
	if( $('#create_pass_s').attr('type') == 'password') {
		$('#view_pass_s').addClass('fa-eye');
		$('#view_pass_s').removeClass('fa-eye-slash');		
		$('#create_pass_s').attr('type', 'text');
	} else {
		$('#view_pass_s').addClass('fa-eye-slash');
		$('#view_pass_s').removeClass('fa-eye');		
		$('#create_pass_s').attr('type', 'password');
	}
});

/**
 * Control password
 **/
$('#create_pass_f').on('keyup', function() {
	if($('#create_pass_f').val().length > 0 ) {
		$('#create_pass_f').addClass('form-control-success');
		$('#create_pass_s').prop('disabled', false);
	} else {
		$('#create_pass_f').removeClass('form-control-success');
		$('#create_pass_s').prop('disabled', true);
	}

});

/**
 * Control password (validation f+s)
 **/
$('#create_pass_s').on('keyup', function() {
	if( $('#create_pass_f').val() == $('#create_pass_s').val() ) {
		$('#create_pass_s').addClass('form-control-success');
		$('#create_pass_s').removeClass('form-control-error');
	} else {
		$('#create_pass_s').addClass('form-control-error');
		$('#create_pass_s').removeClass('form-control-success');
	}
});

/**
 *	Abrir modal-> cambio de capacidad
 **/
function quota_modal(user) {
	$('#change_quota_modal').modal('show');
	$('#quota_user').val(user);
}

/**
 *	Cambiar capacidad de la cuenta
 **/
$('#change_quota').on('click', function() {
	if($('#quota_qty').val() != '') {

		$('#change_quota').html('Por favor espere...');
		$('#change_quota').prop('disabled', true);

		$.ajax({type: 'POST',
			datatype: 'json',
			url: 'inc/php/WHM_actions.php',
			data: JSON.stringify({
				'action':	'change_quota',
				'cP_user':	$('#domain option:selected').attr('cp_user'),
				'domain':	$('#domain').val(),
				'user':		$('#quota_user').val(),
				'quota':	$('#quota_qty').val()
			})
		}).done(function(json) {
			if (json.success) {
				swal('', json.msg, 'success');
				list_emails();
				$('#change_quota_modal').modal('hide');
				$('#change_quota').html('<i class="fa fa-download"></i> Guardar cambios');
				$('#change_quota').prop('disabled', false);
				$('#quota_user').val('');
				$('#quota_qty').val('');
			} else {
				swal('', json.msg, 'error');
				$('#change_quota').prop('disabled', false);
			}		
		}).fail(function (xhr, textStatus, errorThrown) {
			alert("XML: " + XMLHttpRequest + " -- Status: " + textStatus + " -- Error: " + errorThrown);
		});
	} else {
		swal('', 'Por favor ingrese la nueva capacidad para la cuenta.', 'warning');
	}
});

/**
 *	Abrir modal-> cambio de contraseña
 **/
function pass_modal(user) {
	$('#change_pass_modal').modal('show');
	$('#pass_user').val(user);
}


/**
 *	modal->crear [ver pass_f]
 **/
$('#view_newpass_f').on('click', function() {
	if( $('#pass_new_f').attr('type') == 'password') {
		$('#view_newpass_f').addClass('fa-eye');
		$('#view_newpass_f').removeClass('fa-eye-slash');		
		$('#pass_new_f').attr('type', 'text');
	} else {
		$('#view_newpass_f').addClass('fa-eye-slash');
		$('#view_newpass_f').removeClass('fa-eye');		
		$('#pass_new_f').attr('type', 'password');
	}
});

/**
 *	modal->crear [ver pass_s]
 **/
$('#view_newpass_s').on('click', function() {
	if( $('#pass_new_s').attr('type') == 'password') {
		$('#view_newpass_s').addClass('fa-eye');
		$('#view_newpass_s').removeClass('fa-eye-slash');		
		$('#pass_new_s').attr('type', 'text');
	} else {
		$('#view_newpass_s').addClass('fa-eye-slash');
		$('#view_newpass_s').removeClass('fa-eye');		
		$('#pass_new_s').attr('type', 'password');
	}
});

/**
 * Control password
 **/
$('#pass_new_f').on('keyup', function() {
	if($('#pass_new_f').val().length > 0 ) {
		$('#pass_new_f').addClass('form-control-success');
		$('#pass_new_s').prop('disabled', false);
	} else {
		$('#pass_new_f').removeClass('form-control-success');
		$('#pass_new_s').prop('disabled', true);
	}

});

/**
 * Control password (f+s)
 **/
$('#pass_new_s').on('keyup', function() {
	if( $('#pass_new_f').val() == $('#pass_new_s').val() ) {
		$('#pass_new_s').addClass('form-control-success');
		$('#pass_new_s').removeClass('form-control-error');
	} else {
		$('#pass_new_s').addClass('form-control-error');
		$('#pass_new_s').removeClass('form-control-success');
	}
});

/**
 *	Cambiar contraseña de la cuenta
 **/
$('#change_pass').on('click', function() {
	if( $('#pass_new_f').val() == $('#pass_new_s').val() ) {

		$('#change_pass').html('Por favor espere...');
		$('#change_pass').prop('disabled', true);

		$.ajax({type: 'POST',
			datatype: 'json',
			url: 'inc/php/WHM_actions.php',
			data: JSON.stringify({
				'action':	'change_pass',
				'cP_user':	$('#domain option:selected').attr('cp_user'),
				'domain':	$('#domain').val(),
				'user':		$('#pass_user').val(),
				'password':	$('#pass_new_f').val(),
			})
		}).done(function(json) {
			if (json.success) {
				swal('', json.msg, 'success');
				list_emails();
				$('#change_pass_modal').modal('hide');
				$('#pass_user').val('');
				$('#pass_new_f').val('');
				$('#pass_new_s').val('');
				$('#change_pass').html('<i class="fa fa-download"></i> Guardar cambios');
				$('#change_pass').prop('disabled', false);
			} else {
				swal('', json.msg, 'error');
				$('#change_pass').prop('disabled', false);
			}		
		}).fail(function (xhr, textStatus, errorThrown) {
			alert("XML: " + XMLHttpRequest + " -- Status: " + textStatus + " -- Error: " + errorThrown);
		});
	} else {
		swal('', 'Las contraseñas no coinciden.', 'warning');
	}
});

/**
 *	Abrir modal-> cambio estado de la cuenta
 **/
function status_modal(user, status) {
	$('#change_status_modal').modal('show');
	$('#status_user').val(user+'@'+$('#domain').val());

	if(status == 1 ) {
		$('#change_status').html('<i class="fa fa-play"></i> <br/> Reactivar <br/> Cuenta</i>');
		$('#new_status').val('0');
	} else {
		$('#change_status').html('<i class="fa fa-pause"></i> <br/> Suspender <br/> Cuenta</i>');
		$('#new_status').val('1');
	}
}

/**
 *	Cambiar estado de la cuenta
 **/
$('#change_status').on('click', function() {

	$('#change_status').prop('disabled', true);

	$.ajax({type: 'POST',
		datatype: 'json',
		url: 'inc/php/WHM_actions.php',
		data: JSON.stringify({
			'action':		'change_status',
			'cP_user':		$('#domain option:selected').attr('cp_user'),
			'user':			$('#status_user').val(),
			'new_status':	$('#new_status').val(),
		})
	}).done(function(json) {
		if (json.success) {
			swal('', json.msg, 'success');
			list_emails();
			$('#change_status_modal').modal('hide');
			$('#status_user').val('');
			$('#new_status').val('');
			$('#change_status').prop('disabled', false);
		} else {
			swal('', json.msg, 'error');
			$('#change_status').prop('disabled', false);
		}		
	}).fail(function (xhr, textStatus, errorThrown) {
		alert("XML: " + XMLHttpRequest + " -- Status: " + textStatus + " -- Error: " + errorThrown);
	});
});

/**
 *	Abrir modal-> eliminar cuenta
 **/
function delete_modal(user) {
	$('#delete_account_modal').modal('show');
	$('#delete_user').val(user);
}

/**
 *	Eliminar cuenta
 **/
$('#delete_account').on('click', function() {
	swal({
		title: "Atención",
		text: "Este proceso es irreversible. ¿Seguro que desea continuar?",
		icon: "info",
		buttons: {
			cancel: {
				text: "Cancelar",
				value: false,
				visible: true,
				className: 'btn-info'
			},
			confirm: {
				text: "Eliminar",
				value: true,
				visible: true,
				className: 'btn-danger'
			}
		}
	}).then(okay => {
		if (okay) {
			$('#delete_account').prop('disabled', true);
			$.ajax({type: 'POST',
				datatype: 'json',
				url: 'inc/php/WHM_actions.php',
				data: JSON.stringify({
					'action':	'delete_email',
					'cP_user':	$('#domain option:selected').attr('cp_user'),
					'user':		$('#delete_user').val(),
					'domain':	$('#domain').val()
				})
			}).done(function(json) {
				if (json.success) {
					swal('', json.msg, 'success');
					list_emails();
					$('#delete_account_modal').modal('hide');
					$('#delete_user').val('');
					$('#delete_account').prop('disabled', false);
				} else {
					swal('', json.msg, 'error');
					$('#delete_account').prop('disabled', false);
				}		
			}).fail(function (xhr, textStatus, errorThrown) {
				alert("XML: " + XMLHttpRequest + " -- Status: " + textStatus + " -- Error: " + errorThrown);
			});
		}
	})
});