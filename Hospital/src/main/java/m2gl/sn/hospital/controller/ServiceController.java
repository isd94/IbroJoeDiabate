package m2gl.sn.hospital.controller;


import m2gl.sn.hospital.services.IServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="/service")
public class ServiceController {
	@Autowired
	private IServices iservice;
	@RequestMapping(value="/add")
	public String addService(){
		//Service srv = new Service();
		return"service";
	
	}
	 
	
}
