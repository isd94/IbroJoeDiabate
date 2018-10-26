package m2gl.sn.hospital.services;

import java.util.List;

import m2gl.sn.hospital.model.Service;

import org.springframework.data.repository.CrudRepository;

public interface IServices extends CrudRepository<Service, Integer> {
	//@Override
	public List<Service> findAll();
	
}
