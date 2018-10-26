package m2gl.sn.hospital.controller;

import java.util.Optional;

import m2gl.sn.hospital.model.Medecin;
import m2gl.sn.hospital.model.Service;
import m2gl.sn.hospital.model.Specialite;
import m2gl.sn.hospital.services.IMedecin;
import m2gl.sn.hospital.services.IServices;
import m2gl.sn.hospital.services.ISpecialite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping(value="/medecin")
public class MedecinController {
	@Autowired
	private IMedecin iMedecin;
	@Autowired
	private IServices iServices;
	@Autowired
	private ISpecialite iSpecialite;
	
	@RequestMapping(value="/add")
	  public String addMedecin(Model model){
		Medecin m = new Medecin();
		m.setSpecialite(new Specialite());
		m.setService(new Service());
		model.addAttribute("medecin", m);
		Iterable<Service> services = iServices.findAll();
		model.addAttribute("lesservices", services);
		Iterable<Specialite> specialites = iSpecialite.findAll();
		model.addAttribute("lesspecialites", specialites);
		 return "medecin";
	}
	
	
	@RequestMapping(value="/liste")
	public String listeMedecin(Model model){
		Iterable<Medecin> medecins = iMedecin.findAll();
		model.addAttribute("lesmedecins", medecins);
		return "medecins";
	}
	
	@RequestMapping(value="/edit")
	public String editMedecin( @RequestParam("id") String id, Model model){
		Optional<Medecin> m = iMedecin.findById(Integer.parseInt(id));
		if(m.isPresent()){
			model.addAttribute("medecin", m.get());
			Iterable<Service> services = iServices.findAll();
			model.addAttribute("lesservices", services);
			Iterable<Specialite> specialites = iSpecialite.findAll();
			model.addAttribute("lesspecialites", specialites);
			return "medecin";
		}
		else
		{
			Iterable<Medecin> medecins = iMedecin.findAll();
			model.addAttribute("lesmedecins", medecins);
			return "medecins";
		}
		
	}
	
	@RequestMapping(value="/remove")
	public String removeMedecin( @RequestParam("id") String id, Model model){
		Optional<Medecin> m = iMedecin.findById(Integer.parseInt(id));
		if(m.isPresent()){
			iMedecin.delete(m.get());
		}
		Iterable<Medecin> medecins = iMedecin.findAll();
		model.addAttribute("lesmedecins", medecins);
		return "redirect:liste";
		
	}
	
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String addMedecin(@ModelAttribute("medecin") Medecin me, Model model){
	  if(me.getId()==0 && iMedecin.findByMatricule(me.getMatricule())!=null){
		  model.addAttribute("message", "Un medecin avec ce matricule existe déjà!");
		  Iterable<Medecin> medecins = iMedecin.findAll();
		  model.addAttribute("lesmedecins", medecins);
		  return "medecin";
		 }
	  iMedecin.save(me);
	  Iterable<Medecin> medecins = iMedecin.findAll();
	  model.addAttribute("lesmedecins", medecins);
		return "medecins"; 
	}
	
	
}
