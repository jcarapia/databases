

USE chat;

CREATE TABLE messages (
  
 `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` text NOT NULL,
  `message` text NOT NULL,
  `roomname` text NOT NULL,  
  PRIMARY KEY (`id`)
)


