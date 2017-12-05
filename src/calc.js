/*
** signe: '*', '+', '-', '/'
** gauche: un nombre non negatif
** droite: un nombre plus petit que 430
**
** La fonction renvoie le resultat du calcul
**
** La fonction renvoie null en cas d'erreur
*/
function calculatrice(signe, gauche, droite) {
    var result = null;

	if (gauche != null && signe != null && droite != null)
	{
		result = gauche + '' + signe + '' + droite ;
	}
	if (gauche != null && signe != null && droite = null)
	{
		result = gauche;
	}
	if(gauche != null && signe == '/' && droite == '0') 
	{
		result = gauche;
	}
	if(gauche = null)
	{
		result =null;
	}
	else
	{
		result = gauche;
	}	

    return result;
}
 
module.exports = calculatrice;
