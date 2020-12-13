# 340-Cipher

## Inspiration
On December 11th, 2020, only a few hours after Who Done It Hacks began, the F.B.I. announced that a coded message left by the infamous Zodiac Killer had finally been cracked, after 51 years of being a mystery. You can read the news article from the NY Times [here](https://www.nytimes.com/2020/12/11/us/zodiac-killer-code-broken.html). Given that the Zodiac Killer is one of America's most famous Who Done It cases, I was inspired to base my project around this groundbreaking news.

## What it does
Cipher-340 automatically decrypts and encrypts the "340 Cipher." Given that it has only been one day since the announcement that the "340 Cipher" was cracked, 340-Cipher appears to be the only Internet site currently offering automated encryption and decryption of the cipher. You can try my project out yourself at [340cipher.co](https://340cipher.co/), which was registered for free thanks to GoDaddy.

## How we built it
Based on this [YouTube video](https://www.youtube.com/watch?v=-1oQLPRE21o&ab_channel=DavidOranchak), published yesterday by David Oranchak, one of the codebreakers who cracked the cipher, I studied the decryption method of the 340 Cipher. Using jQuery and a simple HTML/CSS/Bootstrap frontend, I translated this algorithm into code using JavaScript. Once I implemented the logic behind encrypting and decrypting the cipher, I built out an interface for inputting each of the 73 symbols used by the Zodiac Killer in his ciphers. To make the site more user-friendly, I added a way of easily importing and exporting encrypted messages, since they cannot be easily copied in plaintext to the unique symbols.

## Challenges we ran into
Because this cipher was cracked so recently, there was very limited documentation to follow when developing my algorithm. I had to use a lot of trial-and-error to find an algorithm that consistently worked across a variety of messages, including the Zodiac Killer's message itself.

Additionally, the Zodiac message did not include very character in the English language, so I had to make decisions about how to handle unknown letters for users of the website wanting to encrypt their own messages.

## Accomplishments that we're proud of
I'm really proud that my site seems to be the first site offering an automated method of decrypting and encrypting the 340 Cipher. 

## What we learned
This was the most algorithmically complex hackathon project I have every implemented, so I felt I really improved my algorithm skills. Additionally, I learned a ton about cryptography that I never knew before.

## What's next for Cipher-340
I hope to further improve the algorithm to guess where spaces should be placed in the message to make it easier to read for the user. 

I hope that my website will encourage other codebreakers to join the community of Internet detectives trying to find a solution to the Zodiac Killer's final encrypted message, which many believe contains his real name.
