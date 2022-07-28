import "./listMovie.css";
import Header from "../../component/header/header.jsx";
import Footer from "../../component/footer/footer.jsx";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import readApi from "../../config/readApi.jsx";

const listMovie = [
  {
    id: 7,
    name: "Minions: The Rise of Gru",
    discription:
      "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
    image: "https://image.tmdb.org/t/p/w500//a4decOGsC1Z0KqJsP0cUr11jzZR.jpg",
    link: "https://www.youtube.com/embed/HhIl_XJ-OGA",
    createdAt: "2022-07-18T10:47:01.000Z",
    updatedAt: "2022-07-18T10:47:01.000Z",
    slug: "Minions-The-Rise-of-Gru",
  },
  {
    id: 10,
    name: "Doctor Strange in the Multiverse of Madness",
    discription:
      "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    image: "https://image.tmdb.org/t/p/w500//9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    link: "https://www.youtube.com/embed/ZhER40Kkmbk",
    createdAt: "2022-07-19T02:00:45.000Z",
    updatedAt: "2022-07-19T02:00:45.000Z",
    slug: "Doctor-Strange-in-the-Multiverse-of-Madness",
  },
  {
    id: 11,
    name: "9 Bullets",
    discription:
      "A former burlesque dancer turned author discovers a second chance at life and redemption when she risks everything to rescue her young neighbor after he witnesses his parents’ murder. Now on the run from the local crime boss, who happens to be her longtime ex, she makes a desperate attempt to get the boy to safety.",
    image: "https://image.tmdb.org/t/p/w500//cuFPxoFopAjFUz4oIMUzpzeTA8I.jpg",
    link: "https://www.youtube.com/embed/_KwZ1tuibHw",
    createdAt: "2022-07-19T02:04:48.000Z",
    updatedAt: "2022-07-19T02:04:48.000Z",
    slug: "9-Bullets",
  },
  {
    id: 12,
    name: "Collision",
    discription:
      "Over the course of one fateful day, a corrupt businessman and his socialite wife race to save their daughter from a notorious crime lord.",
    image: "https://image.tmdb.org/t/p/w500//4zsihgkxMZ7MrflNCjkD3ySFJtc.jpg",
    link: "https://www.youtube.com/embed/UmDxTrJa3XA",
    createdAt: "2022-07-19T02:11:56.000Z",
    updatedAt: "2022-07-19T02:11:56.000Z",
    slug: "Collision",
  },
  {
    id: 13,
    name: "Fantastic Beasts: The Secrets of Dumbledore",
    discription:
      "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
    image: "https://image.tmdb.org/t/p/w500//8ZbybiGYe8XM4WGmGlhF0ec5R7u.jpg",
    link: "https://www.youtube.com/embed/7oIM33zm0v8",
    createdAt: "2022-07-19T02:12:52.000Z",
    updatedAt: "2022-07-19T02:12:52.000Z",
    slug: "Fantastic-Beasts-The-Secrets-of-Dumbledore",
  },
  {
    id: 14,
    name: "Jurassic World Dominion",
    discription:
      "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
    image: "https://image.tmdb.org/t/p/w500//kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
    link: "https://www.youtube.com/embed/saitwklE2zk",
    createdAt: "2022-07-19T02:13:48.000Z",
    updatedAt: "2022-07-19T02:13:48.000Z",
    slug: "Jurassic-World-Dominion",
  },
  {
    id: 15,
    name: "The Lost City",
    discription:
      "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
    image: "https://image.tmdb.org/t/p/w500//neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
    link: "https://www.youtube.com/embed/lWcD2icgoGs",
    createdAt: "2022-07-19T02:14:50.000Z",
    updatedAt: "2022-07-19T02:14:50.000Z",
    slug: "The-Lost-City",
  },
  {
    id: 16,
    name: "Memory",
    discription:
      "Alex, an assassin-for-hire, finds that he's become a target after he refuses to complete a job for a dangerous criminal organization. With the crime syndicate and FBI in hot pursuit, Alex has the skills to stay ahead, except for one thing: he is struggling with severe memory loss, affecting his every move. Alex must question his every action and whom he can ultimately trust.",
    image: "https://image.tmdb.org/t/p/w500//4Q1n3TwieoULnuaztu9aFjqHDTI.jpg",
    link: "https://www.youtube.com/embed/ye63hQLDj4k",
    createdAt: "2022-07-19T02:16:42.000Z",
    updatedAt: "2022-07-19T02:16:42.000Z",
    slug: "Memory",
  },
  {
    id: 17,
    name: "Mobius",
    discription:
      "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
    image: "https://image.tmdb.org/t/p/w500//8OA7xqy0mvq62DYVloqnRvmUkmM.jpg",
    link: "https://www.youtube.com/embed/N1-8SLr7oCE",
    createdAt: "2022-07-19T02:17:49.000Z",
    updatedAt: "2022-07-19T02:17:49.000Z",
    slug: "Mobius",
  },
  {
    id: 18,
    name: "Shark Bait",
    discription:
      "A group of friends enjoying a weekend steal a couple of jetskis racing them out to sea, ending up in a horrific head-on collision. They struggle to find a way home with a badly injured friend while from the waters below predators lurk.",
    image: "https://image.tmdb.org/t/p/w500//mVVU9zC8snNHlcqYONY2HOsh9ob.jpg",
    link: "https://www.youtube.com/embed/3U09a_Gyv6w",
    createdAt: "2022-07-19T02:18:39.000Z",
    updatedAt: "2022-07-19T02:18:39.000Z",
    slug: "Shark-Bait",
  },
  {
    id: 19,
    name: "Sonic the Hedgehog 2",
    discription:
      "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
    image: "https://image.tmdb.org/t/p/w500//6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
    link: "https://www.youtube.com/embed/M1kNc7xTwSs",
    createdAt: "2022-07-19T02:21:11.000Z",
    updatedAt: "2022-07-19T02:21:11.000Z",
    slug: "Sonic-the-Hedgehog-2",
  },
  {
    id: 20,
    name: "Spider-Man: No Way Home",
    discription:
      "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    image: "https://image.tmdb.org/t/p/w500//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    link: "https://www.youtube.com/embed/vG7-hKnYcxQ",
    createdAt: "2022-07-19T02:22:33.000Z",
    updatedAt: "2022-07-19T02:22:33.000Z",
    slug: "Spider-Man-No-Way-Home",
  },
  {
    id: 21,
    name: "The Ledge",
    discription:
      "A rock climbing adventure between two friends turns into a terrifying nightmare. After Kelly captures the murder of her best friend on camera, she becomes the next target of a tight-knit group of friends who will stop at nothing to destroy the evidence and anyone in their way. Desperate for her safety, she begins a treacherous climb up a mountain cliff and her survival instincts are put to the test when she becomes trapped with the killers just 20 feet away.",
    image: "https://image.tmdb.org/t/p/w500//mKFT6Q7PjrRLYuPLfmH4WLCXOiD.jpg",
    link: "https://www.youtube.com/embed/Qsg6ZjZExgs",
    createdAt: "2022-07-19T02:23:30.000Z",
    updatedAt: "2022-07-19T02:23:30.000Z",
    slug: "The-Ledge",
  },
  {
    id: 22,
    name: "Thor: Love and Thunder",
    discription:
      "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
    image: "https://image.tmdb.org/t/p/w500//pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    link: "https://www.youtube.com/embed/sN3HEtWOcjA",
    createdAt: "2022-07-19T02:24:31.000Z",
    updatedAt: "2022-07-19T02:24:31.000Z",
    slug: "Thor-Love-and-Thunder",
  },
  {
    id: 23,
    name: "Turning Red",
    discription:
      "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
    image: "https://image.tmdb.org/t/p/w500//qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
    link: "https://www.youtube.com/embed/3U7KaI_NPGg",
    createdAt: "2022-07-19T02:25:15.000Z",
    updatedAt: "2022-07-19T02:25:15.000Z",
    slug: "Turning-Red",
  },
  {
    id: 24,
    name: "The black phone",
    discription:
      "Finney Shaw, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.",
    image: "https://image.tmdb.org/t/p/w500//bxHZpV02OOu9vq3sb3MsOudEnYc.jpg",
    link: "https://www.youtube.com/embed/VbBX8gtZoII",
    createdAt: "2022-07-19T02:26:18.000Z",
    updatedAt: "2022-07-19T02:26:18.000Z",
    slug: "The-black-phone",
  },
  {
    id: 25,
    name: "Lightyear",
    discription:
      "Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.",
    image: "https://image.tmdb.org/t/p/w500//vpILbP9eOQEtdQgl4vgjZUNY07r.jpg",
    link: "https://www.youtube.com/embed/vOIkBdhTaYs",
    createdAt: "2022-07-19T02:27:48.000Z",
    updatedAt: "2022-07-19T02:27:48.000Z",
    slug: "Lightyear",
  },
  {
    id: 26,
    name: "Chickenhare and the Hamster of Darkness",
    discription:
      "Young Chickenhare is the adopted son of King Peter, a famous adventurer. Part chicken and part hare, he has a really tough time growing up and disguises himself as a hare to avoid the mockeries of his peers. When the day of the Royal Adventurer Society trials comes, Chickenhare, hampered by his disguise, fails miserably. But he is determined to grab a second chance and find the Scepter of the Hamster of Darkness, before his evil Uncle Lapin. The Scepter will give immense power to its holder. If Lapin gets hold of it, he will be unstoppable. Accompanied by his faithful servant Abe, a sarcastic turtle, and Meg, a martial arts expert skunk, he sets of on an epic and initiatory quest.",
    image: "https://image.tmdb.org/t/p/w500//8XgmIsbpVamdhwcNVsYzohFZTtT.jpg",
    link: "https://www.youtube.com/embed/xy7nx8fKk7M",
    createdAt: "2022-07-19T02:28:44.000Z",
    updatedAt: "2022-07-19T02:28:44.000Z",
    slug: "Chickenhare-and-the-Hamster-of-Darkness",
  },
  {
    id: 27,
    name: "Superwho?",
    discription:
      "Struggling actor Cedric seems doomed to lead the life of a loser. He's broke and his girlfriend has dumped him. Even his own father, sister and best buddies have lost faith in his ability to do anything worthwhile. Then finally, he gets a lead role: the superhero “Badman“. A chance to pull himself out of an endless downward spiral and gain his father's respect. But fate strikes again! Rushing off the set in full costume, Cedric has a car accident, loses his memory, and wakes up convinced he really is a superhero on mission! Confronted with real-life adventure and danger, his true nature is put to the test. Does he have what it takes to tackle the forces of evil, defend the weakest among us and beat the bad guys? But you can't just decide to be a hero, let alone a superhero... especially someone like Cedric!",
    image: "https://image.tmdb.org/t/p/w500//Aie2kiYOUgZeakpshM2N64PKof1.jpg",
    link: "https://www.youtube.com/embed/i0YxNp-Moc4",
    createdAt: "2022-07-19T02:29:29.000Z",
    updatedAt: "2022-07-19T02:29:29.000Z",
    slug: "Superwho?",
  },
  {
    id: 28,
    name: "Fireheart",
    discription:
      "The film explores the world of firefighters in 1920s New York City and tells the story of a 16-year-old girl who will have to become a hero in order to save her city.",
    image: "https://image.tmdb.org/t/p/w500//hepwOZWJNUmLzB68gKYEdEJAaD3.jpg",
    link: "https://www.youtube.com/embed/i0YxNp-Moc4",
    createdAt: "2022-07-19T02:31:15.000Z",
    updatedAt: "2022-07-19T02:31:15.000Z",
    slug: "Fireheart",
  },
  {
    id: 29,
    name: "DC League of Super-Pets",
    discription:
      "When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.",
    image: "https://image.tmdb.org/t/p/w500//r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
    link: "https://www.youtube.com/embed/7_GXTLJxoa8",
    createdAt: "2022-07-19T02:32:27.000Z",
    updatedAt: "2022-07-19T02:32:27.000Z",
    slug: "DC-League-of-Super-Pets",
  },
  {
    id: 30,
    name: "Cube",
    discription:
      "Six complete strangers with widely varying personalities are involuntarily placed in an endless maze of interlocking cube-shaped rooms containing deadly traps.",
    image: "https://image.tmdb.org/t/p/w500//npcWz1YMEESjhgkdNY11M34PfcT.jpg",
    link: "https://www.youtube.com/embed/XumXdNoZKlg",
    createdAt: "2022-07-19T02:33:17.000Z",
    updatedAt: "2022-07-19T02:33:17.000Z",
    slug: "Cube",
  },
  {
    id: 31,
    name: "X",
    discription:
      "In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.",
    image: "https://image.tmdb.org/t/p/w500//woTQx9Q4b8aO13jR9dsj8C9JESy.jpg",
    link: "https://www.youtube.com/embed/zYVZMei0_tI",
    createdAt: "2022-07-19T02:34:14.000Z",
    updatedAt: "2022-07-19T02:34:14.000Z",
    slug: "X",
  },
  {
    id: 32,
    name: "Men",
    discription:
      "In the aftermath of a personal tragedy, Harper retreats alone to the beautiful English countryside, hoping to find a place to heal. But someone — or something — from the surrounding woods appears to be stalking her, and what begins as simmering dread becomes a fully-formed nightmare, inhabited by her darkest memories and fears.",
    image: "https://image.tmdb.org/t/p/w500//jo1Kv3P3UgDVk7JnUFr2Cl8WWUM.jpg",
    link: "https://www.youtube.com/embed/pt81CJcWZy8",
    createdAt: "2022-07-19T02:35:32.000Z",
    updatedAt: "2022-07-19T02:35:32.000Z",
    slug: "Men",
  },
  {
    id: 33,
    name: "Nope",
    discription:
      "Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
    image: "https://image.tmdb.org/t/p/w500//AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
    link: "https://www.youtube.com/embed/dxGReS_Cnrc",
    createdAt: "2022-07-19T02:36:18.000Z",
    updatedAt: "2022-07-19T02:36:18.000Z",
    slug: "Nope",
  },
  {
    id: 34,
    name: "The Gray Man",
    discription:
      "When the CIA's most skilled mercenary known as Court Gentry, aka Sierra Six, accidentally uncovers dark agency secrets, he becomes a primary target and is hunted around the world by psychopathic former colleague Lloyd Hansen and international assassins.",
    image: "https://image.tmdb.org/t/p/w500//e4J1S8pm90aWoIsoJJlt099CtA.jpg",
    link: "https://www.youtube.com/embed/fBpdF_Vrh40",
    createdAt: "2022-07-19T02:39:10.000Z",
    updatedAt: "2022-07-19T02:39:10.000Z",
    slug: "The-Gray-Man",
  },
  {
    id: 35,
    name: "Confessions of a Hitman",
    discription:
      "Confessions of a Hitman is a Canadian crime drama film, directed by Luc Picard and released in 2021.",
    image: "https://image.tmdb.org/t/p/w500//oH75pNmhrRWNgDq1ZtNvmDo5JCf.jpg",
    link: "https://www.youtube.com/embed/fBpdF_Vrh40",
    createdAt: "2022-07-19T02:42:30.000Z",
    updatedAt: "2022-07-19T02:42:30.000Z",
    slug: "Confessions-of-a-Hitman",
  },
  {
    id: 36,
    name: "Top Gun: Maverick",
    discription:
      "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
    image: "https://image.tmdb.org/t/p/w500//62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    link: "https://www.youtube.com/embed/KElCq5eCegE",
    createdAt: "2022-07-19T02:43:25.000Z",
    updatedAt: "2022-07-19T02:43:25.000Z",
    slug: "Top-Gun-Maverick",
  },
  {
    id: 37,
    name: "Cro Minion",
    discription: "Two minions have to babysit a little Neanderthal baby.",
    image: "https://image.tmdb.org/t/p/w500//57j78RppxH7JQg0u2UslVllyBKk.jpg",
    link: "https://www.youtube.com/embed/Zd7Tm9DM9EE",
    createdAt: "2022-07-20T04:19:10.000Z",
    updatedAt: "2022-07-20T04:19:10.000Z",
    slug: "Cro-Minion",
  },
  {
    id: 38,
    name: "Despicable Me Presents: Minion Madness",
    discription:
      "3 Mini movies that feature the Minions. Orientation Day, Home Makeover and Banana.",
    image: "https://image.tmdb.org/t/p/w500//grTeVcG9Tkr5YJantK1RRl8M6HR.jpg",
    link: "https://www.youtube.com/embed/Zd7Tm9DM9EE",
    createdAt: "2022-07-20T04:20:14.000Z",
    updatedAt: "2022-07-20T04:20:14.000Z",
    slug: "Despicable-Me-Presents-Minion-Madness",
  },
  {
    id: 39,
    name: "Minion Scouts",
    discription:
      "When Margo, Agnes and Edith return from Badger Scout camp, three of the Minions are entranced by the girls' merit badges. Their own attempt at scout camp results in attracting a bear, eating poison berries and eventually blowing up a dam, creating a massive flood. But, when they arrive back home, the girls share their badges, encouraging the rest of the Minions to try their hand at scouting.",
    image: "https://image.tmdb.org/t/p/w500//8l2y1VCgMcAD1mmqadhJowUCE1H.jpg",
    link: "https://www.youtube.com/embed/Zd7Tm9DM9EE",
    createdAt: "2022-07-20T04:22:51.000Z",
    updatedAt: "2022-07-20T04:22:51.000Z",
    slug: "Minion-Scouts",
  },
  {
    id: 40,
    name: "Despicable Me: Minion Mayhem",
    discription:
      "Gru, one of the world's greatest villains and fathers, has invented a new weapon, the Minion Gun, a machine capable of turning ordinary humans into Minions. He has let his three daughters (Margo, Edith and Agnes) in charge of training some guests. However, because of a distraction in the middle of the training, the Minion-transformed riders, along with Gru and his daughters are forced to recover Agnes' one-year anniversary adoption gift for Gru in the depths of his own laboratory.",
    image: "https://image.tmdb.org/t/p/w500//a4decOGsC1Z0KqJsP0cUr11jzZR.jpg",
    link: "https://www.youtube.com/embed/3Zibb6lVCRw",
    createdAt: "2022-07-20T04:25:22.000Z",
    updatedAt: "2022-07-20T04:25:22.000Z",
    slug: "Despicable-Me-Minion-Mayhem",
  },
  {
    id: 41,
    name: "Minions: The Rise of Gru",
    discription:
      "Gru, one of the world's greatest villains and fathers, has invented a new weapon, the Minion Gun, a machine capable of turning ordinary humans into Minions. He has let his three daughters (Margo, Edith and Agnes) in charge of training some guests. However, because of a distraction in the middle of the training, the Minion-transformed riders, along with Gru and his daughters are forced to recover Agnes' one-year anniversary adoption gift for Gru in the depths of his own laboratory.",
    image: "https://image.tmdb.org/t/p/w500//wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
    link: "https://www.youtube.com/embed/3Zibb6lVCRw",
    createdAt: "2022-07-20T04:30:41.000Z",
    updatedAt: "2022-07-20T04:30:41.000Z",
    slug: "Minions-The-Rise-of-Gru",
  },
  {
    id: 42,
    name: "Minions",
    discription:
      "Gru, one of the world's greatest villains and fathers, has invented a new weapon, the Minion Gun, a machine capable of turning ordinary humans into Minions. He has let his three daughters (Margo, Edith and Agnes) in charge of training some guests. However, because of a distraction in the middle of the training, the Minion-transformed riders, along with Gru and his daughters are forced to recover Agnes' one-year anniversary adoption gift for Gru in the depths of his own laboratory.",
    image: "https://image.tmdb.org/t/p/w500//vlOgaxUiMOA8sPDG9n3VhQabnEi.jpg",
    link: "https://www.youtube.com/embed/3Zibb6lVCRw",
    createdAt: "2022-07-20T04:31:31.000Z",
    updatedAt: "2022-07-20T04:31:31.000Z",
    slug: "Minions",
  },
  {
    id: 43,
    name: "Illumination Presents: 10 Minion Mini-Movies",
    discription:
      "Gru, one of the world's greatest villains and fathers, has invented a new weapon, the Minion Gun, a machine capable of turning ordinary humans into Minions. He has let his three daughters (Margo, Edith and Agnes) in charge of training some guests. However, because of a distraction in the middle of the training, the Minion-transformed riders, along with Gru and his daughters are forced to recover Agnes' one-year anniversary adoption gift for Gru in the depths of his own laboratory.",
    image: "https://image.tmdb.org/t/p/w500//srMx2wGs4f0iUEl4VvEuT8e5SYV.jpg",
    link: "https://www.youtube.com/embed/3Zibb6lVCRw",
    createdAt: "2022-07-20T04:31:53.000Z",
    updatedAt: "2022-07-20T04:31:53.000Z",
    slug: "Illumination-Presents-10-Minion-Mini-Movies",
  },
];

function ListMovie() {
  // const [data, setData] = useState([]);
  const [list, setList] = useState(listMovie.slice(0, 10));
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const buttonRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
    // const fetchApi = async () => {
    //   const result = await readApi();
    //   setData(result);
    // };
    // fetchApi();
  }, []);
  useEffect(() => {
    if (show) {
      setList(listMovie.slice(0));
      buttonRef.current.classList.add("hide");
    } else {
      setList(listMovie.slice(0, 10));
      buttonRef.current.classList.remove("hide");
    }
  }, [show]);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleShow = () => {
    setShow(!show);
  };
  const handleSearch = () => {
    setList(
      listMovie.filter((item) => item.name.toLowerCase().includes(search))
    );
    setSearch("");
  };

  return (
    <>
      <Header />
      <div className="page-header">
        <h2>Danh sách phim hay</h2>
      </div>
      <div className="container-search">
        <div className="search">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            onKeyDown={handleKey}
            type="text"
            placeholder="Enter keyword"
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="movie-list-container">
          {list.map((item, index) => (
            <div key={index} className="item-movie">
              <a href=".">
                <div style={{ position: `relative` }}>
                  <img src={item.image} alt="" />
                  <Link to={`../detail/${item.slug}`}>
                    <button className="watch-btn">
                      <i class="fa-solid fa-play"></i>
                    </button>
                  </Link>
                </div>
                <h3 className="name-item">{item.name}</h3>
              </a>
            </div>
          ))}
        </div>
        <div className="load-btn">
          <button
            onClick={() => handleShow()}
            className="section-btn"
            ref={buttonRef}
          >
            <p className="hide-btn">Ẩn bớt</p>
            <p className="show-btn">Load more</p>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ListMovie;
