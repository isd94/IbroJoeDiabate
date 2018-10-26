package m2gl.sn.hospital.services;

import m2gl.sn.hospital.model.Medecin;

import org.springframework.data.repository.CrudRepository;

public interface IMedecin extends CrudRepository<Medecin, Integer> {
	public Medecin findByMatricule (String matricule);
}
