# Comprendre

Programmation asynchrone

Essayez de synthétiser en binôme votre compréhension de la notion que vous avez vue (s'il s'agissait de plusieurs notions, vous pouvez répéter ce paragraphe plusieurs fois) : 


Callback
- Quel est son rôle ? 
C'est la base de l'asynchrone en JS, plus vieille méthode. Fonction appelée en argument d'une autre fonction. Elle est invoquée à l'intérieur de la fonction externe pour accomplir une action.   

- Quel est son intérêt ? 
Exécuter un code de manière asynchrone et appeler les fonctions en prenant en compte les évènements. 

- A-t-elle des désavantages ? 
"callback hell" -> plus on cherche à récupérer de la data, plus cette méthode est compliauée à lire et à comprendre. On sd retrouve avec les fonctions callback imbriqu'és les unes dans les autres.

- Quelles sont les étapes importantes pour la mettre en place ? 
Il faut deux fonctions. Une fonction callback (A) qui va prendre en argument une autre fonction (B), la fonction B ne sera appelée que sous certaines conditons, possiblement en combinaison avec d'autres arguments (évenement par ex) de la fonction A.

- Quelles sont ses alternatives ? 
Promises, async/await (en JS)


Promesses
- Quel est son rôle ? 
C'est une promesse que le code va s'exécuter dans le future. Objet qui retourne un résultat (resolve), d'une opération asynchrone, ou une erreur (reject). 

- Quel est son intérêt ? 
Gestion des erreurs. Plus facile à lire et puissantes que les fonctions callback. L'autre gros avantge est que l'on peut enchainer les Promises, et transformer en nouvelle promise la valeur retournée.

- A-t-elle des désavantages ? 
Plus complexe que les callback.

- Y a-t-il plusieurs façons de s'en servir ? 
Oui, dans des varibles, des fonctions, en utilisant .catch() ou non. Avec Promise.all

- Quelles sont les étapes importantes pour la mettre en place ? 
Déclaration d'une const comprenant une promesse ayant pour argument resolve et reject, puis une fonction. Si la promesse est tenue la fonction renvois le statut resolve et rentre dans .then() sinon elle renvois le statut reject et execute .catch().

- Quelles sont ses alternatives ?
Callback et async/await.


This / Bind
- Quel est son rôle ? 
This est un opérateur utilisé pour faire référence à l'objet dans lequel il se trouve. 
Bind est une méthode qui permet de relier le contexte de "this" à l'extérieur de l'objet dans lequel il à été déclaré.

- Quel est son intérêt ? 
Donner un contexte à une fonction. Elargir la portée des données.

- Y a-t-il plusieurs façons de s'en servir ? 
This peut s'utiliser dans differents contexte : méthodes, fonctions, seul, évènements. 


Requête

XMLHttpRequest :
Objet de requête. Permet d'obtenir des données au format xlm, json ou html, sans avoir à rafraichir la page. → permet à une page web d'être mise à jour sans perturber le reste du code et les actions de l'utilisateur.

fetch():
Cette méthode permet de faire une requête dont la réponse est une promesse.

