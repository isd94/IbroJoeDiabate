<?php
// Connexion à la base de données
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}

   if (isset($_POST['speudo']) AND $_POST['speudo'] ==  NULL) 
    {
		echo '<p>Veuillez remplir le champ pseudo please!</p>';
			
    
    }
    else if (isset($_POST['message']) AND $_POST['message'] ==  NULL) 
    {
		echo '<p>Veuillez ecire votre message please!</p>';
			
    
    }
    else
    {
		  // Insertion du message à l'aide d'une requête préparée
		$req = $bdd->prepare('INSERT INTO minichat (speudo, message) VALUES(?, ?)');
		$req->execute(array($_POST['speudo'], $_POST['message']));

		// Redirection du visiteur vers la page du minichat
		header('Location: minichat.php');
    }


?>