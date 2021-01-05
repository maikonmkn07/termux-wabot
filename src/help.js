const help = (prefix) => {
	return `> *Sticker Comandos* <

╠➣𝗖𝗼𝗺𝗮𝗻𝗱𝗼: *${prefix}sticker* or *${prefix}stiker*
║ Descrição : converter imagem / gif / vídeo em adesivo
║ Uso : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n

╠➣𝗖𝗼𝗺𝗮𝗻𝗱𝗼: *${prefix}sticker nobg* or *${prefix}stiker nobg*
║ Descrição : converter imagem em adesivo removendo o fundo
║ Uso : reply image, or send image with caption\n

╠➣𝗖𝗼𝗺𝗮𝗻𝗱𝗼: *${prefix}toimg*
║ Descrição : converter adesivo em imagem
║ Uso : reply sticker\n

╠➣𝗖𝗼𝗺𝗮𝗻𝗱𝗼: *${prefix}tsticker* or *${prefix}tstiker*
║ Descrição : converter texto em adesivo
║ Uso : *${prefix}tsticker text in here*\n


> *Meme Comandos* <

╠➣𝗖𝗼𝗺𝗮𝗻𝗱𝗼: *${prefix}meme*
║ Descrição : imagens aleatórias de meme [english]
║ Uso : just send the command\n

╠➣𝗖𝗼𝗺𝗮𝗻𝗱𝗼: *${prefix}memeindo*
║ Descrição : imagens aleatórias de meme [indo]
║ Uso : apenas envie o comando\n


> *Outros Comandos* <

╠➣𝗖𝗼𝗺𝗮𝗻𝗱𝗼: *${prefix}gtts*
║ Descrição : converter texto em fala / áudio
║ Uso : *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts ja On2-chan*\n

╠➣𝗖𝗼𝗺𝗮𝗻𝗱𝗼: *${prefix}loli*
║ Descrição : imagens aleatórias de loli
║ Uso : apenas envie o comando\n

╠➣𝗖𝗼𝗺𝗮𝗻𝗱𝗼: *${prefix}nsfwloli*
║ Descrição : imagens aleatórias de nsfw loli
║ Uso: basta enviar o comando\n

╠➣𝗖𝗼𝗺𝗮𝗻𝗱𝗼: *${prefix}url2img*
║ Descrição : take web screenshots
║ Uso : *${prefix}url2img [tipe] [url]*\n

╠➣𝗖𝗼𝗺𝗮𝗻𝗱𝗼: *${prefix}simi*
║ Descrição : sua mensagem será respondida por simi
║ Uso : *${prefix}simi yourmessage*\n

╠➣𝗖𝗼𝗺𝗮𝗻𝗱𝗼: *${prefix}ocr*
║ Descrição : pegue o texto na foto
║ Uso : responder imagem ou enviar imagem com legenda\n

╠➣𝗖𝗼𝗺𝗮𝗻𝗱𝗼: *${prefix}wait*
║ Descrição : search anime with image [ What Anime Is This/That ]
║ Uso : responder imagem ou enviar imagem com legendan\n

╠➣𝗖𝗼𝗺𝗮𝗻𝗱𝗼: *${prefix}setprefix*
║ Descrição : substituir prefixo
║ Uso : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
║ Note : This command can only be used by the bot owner\n


> *Groupos Comandos* <

╠➣𝗖𝗼𝗺𝗮𝗻𝗱𝗼: *${prefix}linkgroup*
║ Descrição : pegue o link do grupo
║ Uso : just send the command\
║ Note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n

╠➣𝗖𝗼𝗺𝗮𝗻𝗱𝗼: *${prefix}tagall*
║ Descrição : marca todos os membros do grupo, incluindo administradores também
║ Uso : apenas envie o comando
║ Note : Este comando pode ser usado se você for um administrador do grupo\n

╠➣𝗖𝗼𝗺𝗮𝗻𝗱𝗼: *${prefix}simih*
║ Descrição : ative o modo simi no grupo
║ Uso : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* para desativar o modo simi
║ Note : Este comando pode ser usado se você for um admin\n`
}

exports.help = help
