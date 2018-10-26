package m2gl.sn.hospital.services;

import m2gl.sn.hospital.model.Specialite;

import org.springframework.data.repository.CrudRepository;

public interface ISpecialite extends CrudRepository<Specialite, Integer> {
	public Specialite findByLibelle (String libelle);
	

}
