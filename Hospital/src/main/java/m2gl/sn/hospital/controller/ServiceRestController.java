package m2gl.sn.hospital.controller;



import m2gl.sn.hospital.model.Service;
import m2gl.sn.hospital.services.IServices;






import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ServiceRestController {

	@Autowired
	private IServices iServices;
	
	@RequestMapping(value="/listeServ")
	public Iterable<Service> retournList(){
		Iterable<Service> services = iServices.findAll();
		
		return services;
	}
	
	

}
