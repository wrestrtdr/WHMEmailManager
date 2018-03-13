<div class="modal fade" id="change_quota_modal" tabindex="-1" role="dialog" aria-labelledby="project-modal-label" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4><i class="fa fa-inbox"></i> Cambiar capacidad</h4>
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
			</div>
			<div class="modal-body row">
				<div class="col-md-8 form-group">
					<label for="quota_qty"> Cuenta </label>
					<div class="input-group">
						<input type="text" name="quota_user" id="quota_user" class="form-control" readonly>
						<div class="input-group-append">
							<span class="input-group-text domain"></span>
						</div>
					</div>					
				</div>
				<div class="col-md-4 form-group">
					<label for="quota_qty"> Nueva Capacidad </label>
					<input type="number" name="quota_qty" id="quota_qty" class="form-control" placeholder="(En MB)">
				</div>
				<div class="col-md-12 text-center">
					<button class="btn btn-info" id="change_quota"><i class="fa fa-download"></i> Guardar cambios</button>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- -->
<div class="modal fade" id="change_pass_modal" tabindex="-1" role="dialog" aria-labelledby="project-modal-label" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4><i class="fa fa-lock"></i> Cambiar contraseña</h4>
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
			</div>
			<div class="modal-body row">

				<div class="col-md-12 form-group">
					<label for="create_user"> Cuenta </label>
					<div class="input-group">
						<input type="text" name="pass_user" id="pass_user" class="form-control" readonly>
						<div class="input-group-append">
							<span class="input-group-text domain"></span>
						</div>
					</div>
				</div>

				<div class="col-md-6 form-group">
					<label for="create_pass_f"> Contraseña </label>
					<div class="input-group">
						<input type="password" name="pass_new_f" id="pass_new_f" class="form-control">
						<div class="input-group-append">
							<span class="input-group-text"><i class="fa fa-eye-slash" id="view_newpass_f"></i></span>
						</div>
					</div>
				</div>
				<div class="col-md-6 form-group">
					<label for="create_pass_s"> Repetir Contraseña </label>
					<div class="input-group">
						<input type="password" name="pass_new_s" id="pass_new_s" class="form-control">
						<div class="input-group-append">
							<span class="input-group-text"><i class="fa fa-eye-slash" id="view_newpass_s"></i></span>
						</div>
					</div>
				</div>

				<div class="col-md-12 text-center">
					<button class="btn btn-info" id="change_pass"><i class="fa fa-download"></i> Guardar cambios</button>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- -->
<div class="modal fade" id="change_status_modal" tabindex="-1" role="dialog" aria-labelledby="project-modal-label" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4><i class="fa fa-eject"></i> Cambiar estado de la cuenta</h4>
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
			</div>
			<div class="modal-body row">
				<div class="col-md-8 form-group">
					<label for="status_user"> Cuenta </label>
					<input type="text" name="status_user" id="status_user" class="form-control" readonly>
					<input type="hidden" id="new_status">
				</div>
				<div class="col-md-4 form-group text-center">
					<button class="btn btn-info" id="change_status"></button>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- -->
<div class="modal fade" id="delete_account_modal" tabindex="-1" role="dialog" aria-labelledby="project-modal-label" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4><i class="fa fa-trash"></i> Eliminar cuenta</h4>
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
			</div>
			<div class="modal-body row">
				<div class="col-md-8 form-group">
					<label for="delete_user"> Cuenta </label>
					<div class="input-group">
						<input type="text" name="delete_user" id="delete_user" class="form-control" readonly>
						<div class="input-group-append">
							<span class="input-group-text domain"></span>
						</div>
					</div>
				</div>
				<div class="col-md-4 form-group text-center">
					<button class="btn btn-danger" id="delete_account"><i class="fa fa-trash"></i> <br/> Eliminar cuenta</button>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- -->
<div class="modal fade" id="create_account_modal" tabindex="-1" role="dialog" aria-labelledby="project-modal-label" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4><i class="fa fa-plus-circle"></i> Crear cuenta</h4>
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times;</button>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-md-12 form-group">
						<label for="create_user"> Cuenta </label>
						<div class="input-group">
							<input type="text" name="create_user" id="create_user" class="form-control">
							<div class="input-group-append">
								<span class="input-group-text domain"></span>
							</div>
						</div>
					</div>

					<div class="col-md-6 form-group">
						<label for="create_pass_f"> Contraseña </label>
						<div class="input-group">
							<input type="password" name="create_pass_f" id="create_pass_f" class="form-control">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fa fa-eye-slash" id="view_pass_f"></i></span>
							</div>
						</div>
					</div>
					<div class="col-md-6 form-group">
						<label for="create_pass_s"> Repetir Contraseña </label>
						<div class="input-group">
							<input type="password" name="create_pass_s" id="create_pass_s" class="form-control" disabled>
							<div class="input-group-append">
								<span class="input-group-text"><i class="fa fa-eye-slash" id="view_pass_s"></i></span>
							</div>
						</div>
					</div>

					<div class="col-md-4 offset-4 form-group">
						<label for="create_quota"> Capacidad (MB) </label>
						<input type="number" name="create_quota" id="create_quota" class="form-control">
					</div>
					<div class="col-md-12 form-group text-center">
						<button class="btn btn-info" id="create_account"><i class="fa fa-plus"></i> Crear cuenta</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>