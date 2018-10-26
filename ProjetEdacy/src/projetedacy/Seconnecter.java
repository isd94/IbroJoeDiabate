/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package projetedacy;

import com.mysql.jdbc.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author Ibro_Joe_DIABATE
 */
public class Seconnecter {
    Connection cnx;
    public Seconnecter (){
    try{
       Class.forName("com.mysql.jdbc.Driver");
    
    }catch(ClassNotFoundException e){
      System.err.println(e);
      // Cela affiche l'erreur de connection.
    }
    try{
        cnx = (Connection) DriverManager.getConnection("jdbc:mysql://localhost:3306/bd_projetedacy", "root", "");
    
    }catch(SQLException e){System.err.println(e);}
    }
    Connection obtenirconnexion(){
    
        return cnx;
    
    }
    
}
