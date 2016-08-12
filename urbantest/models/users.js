//login
exports.login = function(req, fn){
	
	var get = JSON.parse(JSON.stringify(req.body));
	
	req.getConnection(function (err, connection){
		
		var query = connection.query("select ID FROM t_m_pasien WHERE username = ? && password = ?", [get.username, get.password], function(err, rows)
		{
			if(err){
				console.log("Error Updating : %s ",err );
				return fn(false, err);
			}else{
				return fn(true, rows);
			}
		});
	});	
}

//get data user from db
exports.list = function(req, fn){

	req.getConnection(function(err,connection){

		var query = connection.query('SELECT * FROM t_m_pasien', function(err, rows, fields) {
		  if (err){
		        console.log("Error Updating : %s ",err );
		        return fn(false, err);
		  }
		  else{
		  	return fn(true, rows,'Data Pasien Tampil');
		  }
		});
	});

};

//delete data user from db
exports.delete = function(req, fn){
	
	var get = JSON.parse(JSON.stringify(req.params.uid));

	req.getConnection(function (err, connection){
		connection.query("DELETE FROM t_m_pasien WHERE id = ? ", [get], function(err, rows){
			if(err){
				console.log("Error Updating : %s ",err );
				return fn(false, err);
			}else{
				return fn(true, "Data Pasien Telah Di Hapus");
			}
		});
	});
};

//save to database
exports.insert = function(req, fn){
	
	var get = JSON.parse(JSON.stringify(req.body));

	req.getConnection(function (err, connection){
		
		var tambah = {
				ID:get.id,
				Name:get.nama,
				Username:get.username,
				Password:get.password,
				Phone:get.phone,
				Gender:get.gender,
				Address:get.address,
				Kelurahan:get.kelurahan,
				RTRW:get.rtrw
			};
		connection.query("INSERT INTO t_m_pasien set ? ", tambah, function(err, rows)
		{
			if(err){
				console.log("Error Updating : %s ",err );
				return fn(false, err);
			}else{
				return fn(true, "Pasien Baru Telah Di Tambahkan");
			}
		});
	});
}

//select pasien by ID
exports.getpasien = function(req, fn){

	var get = JSON.parse(JSON.stringify(req.params.uid));

	req.getConnection(function(err,connection){

		var query = connection.query('SELECT * FROM t_m_pasien WHERE ID = ?', [get], function(err, rows, fields) {
		  if (err){
		        console.log("Error Updating : %s ",err );
		        return fn(false, err);
		  }
		  else{
		  	return fn(true, rows,'Data Pasien Tampil');
		  }
		});
	});
}

//update data pasien
exports.update = function(req, fn){

	var get = JSON.parse(JSON.stringify(req.body));
	
	req.getConnection(function (err, connection){
		
		var update = {
				ID:get.id,
				Name:get.nama,
				Username:get.username,
				Password:get.password,
				Phone:get.phone,
				Gender:get.gender,
				Address:get.address,
				Kelurahan:get.kelurahan,
				RTRW:get.rtrw
			};
		
		connection.query("UPDATE t_m_pasien set ? WHERE id = ?", [update, get.id], function(err, rows)
		{
			if(err){
				console.log("Error Updating : %s ",err );
				return fn(false, err);
			}else{
				return fn(true, "Pasien Baru saja Di Perbaharui");
			}
		});
	});
}