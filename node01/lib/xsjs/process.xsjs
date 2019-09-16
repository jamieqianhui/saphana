var METHOD = $.request.method;

function doProcess(){
	var call = "{CALL \"TEST01_HDI_DB01_1\".\"test01.db01::text_flow_SP\"()}";
	var archive_call = "{CALL \"TEST01_HDI_DB01_1\".\"test01.db01::FE_SIN_TEXT_EXEC\"( PATH => 'C:\\usr\\sap\\dataprovagent\\workspace\\archive_file.bat', PARAM => '', FLAG => 8,PARAM_3 => ?)}"
	try{
		
		var conn = $.db.getConnection();
		var pc = conn.prepareCall(call);
		
		pc.execute();
		pc.close();
		
		var pc2 = conn.prepareCall(archive_call);
		
		pc2.execute();
		pc2.close();
		
		conn.close();
		
		$.response.contentType = "text/plain";
		$.response.setBody("success");
	}catch(error){
		$.response.setBody("failed to trigger the procedure. <br> Error Message : " + error);
		$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	}
}

switch (METHOD) {
  case $.net.http.GET:
  	doProcess();
    break;
  default:
      $.response.status = $.net.http.BAD_REQUEST;
      $.response.setBody('Invalid Command');
}