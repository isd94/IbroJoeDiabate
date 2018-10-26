package m2gl.sn.hospital.controller;


import java.util.Optional;

import m2gl.sn.hospital.model.Specialite;
import m2gl.sn.hospital.services.ISpecialite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping(value="/specialite")
public class SpecialiteController {
	@Autowired
	private ISpecialite iSpecialite;
	@RequestMapping(value="/add")
	public String addSpecialite(Model model){
	  Specialite s = new Specialite();
	  model.addAttribute("specialite", s);
		return "specialite";
	}
	
	@RequestMapping(value="/liste")
	public String listeSpecialite(Model model){
		Iterable<Specialite> specialites = iSpecialite.findAll();
		model.addAttribute("lesspecialites", specialites);
		return "specialites";
	}
	
	@RequestMapping(value="/edit")
	public String editSpecialite( @RequestParam("id") String id, Model model){
		Optional<Specialite> s = iSpecialite.findById(Integer.parseInt(id));
		if(s.isPresent()){
			model.addAttribute("specialite", s.get());
			return "specialite";
		}
		else
		{
			Iterable<Specialite> specialites = iSpecialite.findAll();
			model.addAttribute("lesspecialites", specialites);
			return "specialites";
		}
		
	}
	
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String addSpecialite(@ModelAttribute("specialite") Specialite sp, Model model){
	  if(iSpecialite.findByLibelle(sp.getLibelle())!=null){
		  model.addAttribute("message", "Une spécialité avec ce libellé existe déjà!");
		   return "specialite";
		 }
	  iSpecialite.save(sp);
	  Iterable<Specialite> specialites = iSpecialite.findAll();
	  model.addAttribute("lesspecialites", specialites);
		return "specialites";
	}

}
