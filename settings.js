var DLAN;

DLAN = {};

DLAN.acceptCookie = false;

DLAN.settings = {
    "lang":                             "fr",
    "animPotDelay":                     1,
    "animGifHomeDelay":                 1,
    "colorApparitionDuration":          400,
    "colorApparitionDurationTouch":     800,
    "maxLengthByWord":                  12,
    "maxWords":                         10,
    "colors": {
        "bgDefaultColor":               "#82c3dd",
        "bgAnimColor":                  "#82c3dd",
        "bgStickerColor":               "#83c24e",
        "bgProfPicColor":               "#f3cd2d",
        "bgCoverColor":                 "#ff8d07"
    },
    "url": {
        "domain":                       "",
        "saveModule":                   "ajax/save.json",
        "sendEmailSharing":             "ajax/email-sharing.json",
        "download":                     "/download/-TYPE-/-UID-",
        "twitter":                      "/twitter-card/-UID-"
    }

};


DLAN.googlePlus = {
    "interactivepostParam": {
        "class":                "g-interactivepost",
        "clientid":             "198140959220-knp6uvcvftf5dfj9bbb7rl8dhv40jf1e.apps.googleusercontent.com",
        "cookiepolicy":         "single_host_origin",
        "calltoactionlabel":    "VISIT",
        "calltoactionurl":      "https://dites-le-avec.nutella.fr"
    }
};

DLAN.stats = {
    "desktop": {
        "home": {
            "pageview": {
                "home":         "/desktop/home",
                "prehome":      "/desktop/prehome",
                "tutorial":     "/desktop/tutorial"
            }
        },
        "gif": {
            "pageview": {
                "write":        "/desktop/gif/write",
                "colors":       "/desktop/gif/color",
                "sharing":      "/desktop/gif/sharing"
            },
            "event": {
                "twitter": {
                    "template":             "/desktop/gif/sharing",
                    "network":              "twitter",
                    "action":               "share"
                },
                "facebook": {
                    "template":             "/desktop/gif/sharing",
                    "network":              "facebook",
                    "action":               "share"
                },
                "google": {
                    "template":             "/desktop/gif/sharing",
                    "network":              "google",
                    "action":               "interactivepost"
                },
                "email": {
                    "template":             "/desktop/gif/sharing",
                    "network":              "email",
                    "action":               "share"
                },
                "download": {
                    "template":             "/desktop/gif/download"
                },
                "print": {
                    "template":             "/desktop/gif/print"
                }
            }
        },
        "cover": {
            "pageview": {
                "write":        "/desktop/cover/write",
                "colors":       "/desktop/cover/color",
                "sharing":      "/desktop/cover/sharing"
            },
            "event": {
                "twitter": {
                    "template":             "/desktop/cover/sharing",
                    "network":              "twitter",
                    "action":               "share"
                },
                "facebook": {
                    "template":             "/desktop/cover/sharing",
                    "network":              "facebook",
                    "action":               "share"
                },
                "google": {
                    "template":             "/desktop/cover/sharing",
                    "network":              "google",
                    "action":               "interactivepost"
                },
                "email": {
                    "template":             "/desktop/cover/sharing",
                    "network":              "email",
                    "action":               "share"
                },
                "download": {
                    "template":             "/desktop/cover/download"
                },
                "print": {
                    "template":             "/desktop/cover/print"
                }
            }
        },
        "sticker": {
            "pageview": {
                "write":        "/desktop/sticker/write",
                "colors":       "/desktop/sticker/color",
                "sharing":      "/desktop/sticker/sharing"
            },
            "event": {
                "twitter": {
                    "template":             "/desktop/sticker/sharing",
                    "network":              "twitter",
                    "action":               "share"
                },
                "facebook": {
                    "template":             "/desktop/sticker/sharing",
                    "network":              "facebook",
                    "action":               "share"
                },
                "google": {
                    "template":             "/desktop/sticker/sharing",
                    "network":              "google",
                    "action":               "interactivepost"
                },
                "email": {
                    "template":             "/desktop/sticker/sharing",
                    "network":              "email",
                    "action":               "share"
                },
                "download": {
                    "template":             "/desktop/sticker/download"
                },
                "print": {
                    "template":             "/desktop/sticker/print"
                }
            }
        },
        "profile-picture": {
            "pageview": {
                "write":        "/desktop/profile picture/write",
                "colors":       "/desktop/profile picture/color",
                "sharing":      "/desktop/profile picture/sharing"
            },
            "event": {
                "twitter": {
                    "template":             "/desktop/profile picture/sharing",
                    "network":              "twitter",
                    "action":               "share"
                },
                "facebook": {
                    "template":             "/desktop/profile picture/sharing",
                    "network":              "facebook",
                    "action":               "share"
                },
                "google": {
                    "template":             "/desktop/profile picture/sharing",
                    "network":              "google",
                    "action":               "interactivepost"
                },
                "email": {
                    "template":             "/desktop/profile picture/sharing",
                    "network":              "email",
                    "action":               "share"
                },
                "download": {
                    "template":             "/desktop/profile picture/download"
                },
                "print": {
                    "template":             "/desktop/profile picture/print"
                }
            }
        }
    },

    "mobile": {
        "home": {
            "pageview": {
                "home":         "/mobile/home",
                "prehome":      "/mobile/prehome",
                "tutorial":     "/mobile/tutorial"
            }
        },
        "gif": {
            "pageview": {
                "write":        "/mobile/gif/write",
                "preview":      "/mobile/gif/preview",
                "colors":       "/mobile/gif/color",
                "sharing":      "/mobile/gif/sharing",
                "tutoMMS":      "/mobile/gif/tutoMMS"
            },
            "event": {
                "twitter": {
                    "template":             "/mobile/gif/sharing",
                    "network":              "twitter",
                    "action":               "share"
                },
                "facebook": {
                    "template":             "/mobile/gif/sharing",
                    "network":              "facebook",
                    "action":               "share"
                },
                "google": {
                    "template":             "/mobile/gif/sharing",
                    "network":              "google",
                    "action":               "interactivepost"
                },
                "email": {
                    "template":             "/mobile/gif/sharing",
                    "network":              "email",
                    "action":               "share"
                },
                "download": {
                    "template":             "/mobile/gif/download"
                },
                "print": {
                    "template":             "/mobile/gif/print"
                }
            }
        },
        "cover": {
            "pageview": {
                "write":        "/mobile/cover/write",
                "colors":       "/mobile/cover/color",
                "sharing":      "/mobile/cover/sharing",
                "tutoMMS":      "/mobile/cover/tutoMMS"
            },
            "event": {
                "twitter": {
                    "template":             "/mobile/cover/sharing",
                    "network":              "twitter",
                    "action":               "share"
                },
                "facebook": {
                    "template":             "/mobile/cover/sharing",
                    "network":              "facebook",
                    "action":               "share"
                },
                "google": {
                    "template":             "/mobile/cover/sharing",
                    "network":              "google",
                    "action":               "interactivepost"
                },
                "email": {
                    "template":             "/mobile/cover/sharing",
                    "network":              "email",
                    "action":               "share"
                },
                "download": {
                    "template":             "/mobile/cover/download"
                },
                "print": {
                    "template":             "/mobile/cover/print"
                }
            }
        },
        "sticker": {
            "pageview": {
                "write":        "/mobile/sticker/write",
                "preview":      "/mobile/sticker/preview",
                "sharing":      "/mobile/sticker/sharing",
                "tutoMMS":      "/mobile/sticker/tutoMMS"
            },
            "event": {
                "twitter": {
                    "template":             "/mobile/sticker/sharing",
                    "network":              "twitter",
                    "action":               "share"
                },
                "facebook": {
                    "template":             "/mobile/sticker/sharing",
                    "network":              "facebook",
                    "action":               "share"
                },
                "google": {
                    "template":             "/mobile/sticker/sharing",
                    "network":              "google",
                    "action":               "interactivepost"
                },
                "email": {
                    "template":             "/mobile/sticker/sharing",
                    "network":              "email",
                    "action":               "share"
                },
                "download": {
                    "template":             "/mobile/sticker/download"
                },
                "print": {
                    "template":             "/mobile/sticker/print"
                }
            }
        },
        "profile-picture": {
            "pageview": {
                "write":        "/mobile/profile picture/write",
                "colors":       "/mobile/profile picture/color",
                "sharing":      "/mobile/profile picture/sharing",
                "tutoMMS":      "/mobile/profile picture/tutoMMS"
            },
            "event": {
                "twitter": {
                    "template":             "/mobile/profile picture/sharing",
                    "network":              "twitter",
                    "action":               "share"
                },
                "facebook": {
                    "template":             "/mobile/profile picture/sharing",
                    "network":              "facebook",
                    "action":               "share"
                },
                "google": {
                    "template":             "/mobile/profile picture/sharing",
                    "network":              "google",
                    "action":               "interactivepost"
                },
                "email": {
                    "template":             "/mobile/profile picture/sharing",
                    "network":              "email",
                    "action":               "share"
                },
                "download": {
                    "template":             "/mobile/profile picture/download"
                },
                "print": {
                    "template":             "/mobile/profile picture/print"
                }

            }
        }
    }
};


DLAN.prohibitedWordsList = ["0bese","0bèse","0kilos","abitella","abruti","abrutis","abruty","agonie","agonies","alchol","alcohl","alcol","alcoohl","alcool","anal","andouille","animal","animaux","annulingus","anulingus","anus","anusella","anuus","apekiller","arnake","arnaké","arnaque","arnaqué","arnaquer ","ass hole","assassin","asshole","ass-hole","aval","avorton","bad","banania","batar","batard","bâtard","batarr","battaar","battar","battarr","ben laden","benladen","bete","bête ","beuh","beur","bibitella","big cul","bisphenol","bisphénol","bite","bitella","'bitella","bithur","bithure","bitsh","bitur","biture","blaireau","blaireaux","blairo","blairos","bobyfucku","boitacaca","boîtacaca","boitakaka","bouffon","bougnoul","bougnoule","boulecaca","bounioul","boycot","boycott","boycotter","boykot","boykott","branler","branlette","branleur","burne","caca","caca box","caca mou","cacabox","caca-box","cacaenpot","cacalla","cacamou","cacaocu","cacaprout","cacas","cacatela","cacatella","cadavre","cadavres","canabis","cancer","cannabis","canscer","canscèr","canser","cansèr","cansser","canssèr","capote","cellulit","cellulite","cellullit","celulit","celulite","celullite","cestcaca","chatte","chiass","chiasse","chibre","chiennasse","chienne","chiennes","chier","chimic","chimie","chimik","chimique","chimiques","chintok","chleuh","chnoque","chocobite","chocogras","cigarete","cigarète","cigarette","cigarètte","clito","clitoris","clochard","clop","clope","clopes","clopeu","clopeuh","coca cola","cocacola","coca-cola","cocaine","cocaïne","cocainne","cocaïnne","coka","coka cola","cokacola","coka-cola","coke","con","conar","conard","conasse","confiture","connar","connard","connärd","connasse","connerie","cons ","couiles","couille","coupabl","coupable","coupables","crack","crasse","crétin","crevure","crotella","crotte","cul","cul serre","cuni","cyprine","danger","dangereux","dangers","danjé","danjer","danslecul ","dantoncul","death","décè","deces","déces","decès","décès","dehp","dépandans","dépandant","dépandens","dépandent","dependans","dépendans","dependant","dépendant","diabete","diabète","diabetela","diabetik","diarée","diarhe","diarhee","diarhée","diarrhee","diarrhée","dla merde","doigté","doigter","dont","don't","drogu","drogue","drogué","droguella","ds toncul","dstoncul","dtc","du con","ekilibré","emerde","emerder","emerdes","emerdeur","emerdeuse","emmerde","emmerder","emmerdes","emmerdeur","emmerdeuse","enccule","encculé","enculasse","enculé","enculée","enculer","encullé","enculler","endauffer","enflure","enfoire","enfoiré","enkule","enkulé","equilibre","équilibré","escroc","escroquerie","etron","extasi","extasie","extasy","extazi","extazie","extazy","facedepet ","fachiste","facho","fat bitch","fildepute","filsdeput","fist","fist fuck","flambite","foutre","fuck me","fuck psg","fuck you","fuckoff","fuckyou","fumié","fumier","fumiers","fumiés","furher","gastro","gavage","genital","génital","genocid","génocid","genocide","génocide","genocides","génocides","genosid","génosid","genoside","genosides","god","gra","gradouble","graiss","graisse","graisses","gras","grasdubid","grasse","greenwash","groboudin","grognasse","gropaquet","gros bide","gros caca","gros con","gros cul","gros culs","gros fat","gros gros","gros lard","gros ped","gros porc","gros q","gros sac","gros sein","gros tas","groscaca","groscul","gros-cul","grosculs","gros-culs","grosgros","grosnut","grospenis","gros-porc","grossbite","grosse","grosses","grossteub","grostas","grostella","grotella","gueule","h palme","herbe","hero","heroin","héroine","heroïne","hitler","homo","huile","huilepalm","huil'palm","huilpalme","idiot","imbécile","indonesie","indonésie","indonezie","indonézie","indonnesie","indonnésie","indonnezie","indonnézie","interdis","interdit","interdits","ivg","jeanculqi","jenital","jénital","jenocid","jénocid","jenocide","jenocides","jm la bit","joui","jouï","jouie","jouir","jouis","jouit","judas","juif","jusdecaca","jute","kakagras","kcal","kdavre","kdavres","ketter","killer","killzone","kilo","kilos","kilos!","kilos!!","kilos!!!","kilos!!!!","kindarena","kinder","kitkat","koka","koka kola","kokakola","koka-kola","koupabl","koupable","koupables","lagrosse","lapute","le caca","le gras","léa caca","leboncaca","les kilos","lesbienne","loche","loches","lopette","lsd","m&m","m&ms","ma bite","ma drogue","ma teub","mabite","machiasse","makak","malaisie","malaizie","malboro","mange-pas","mangmerde","marlboro","mars","masacre","masakr","masakre","massacre","massacres","massakr","massakre","massakres","massakrs","masturbe","mateube","mauvai","mauvais","mauvaise","mauvaises","mauvé","maxiprout","mdma","merdasse","merde","merdella","merdempot","merdeuse","merdeux","merdouillard","meurtre","meurtrier","meusper","miche","miches","milkyway","mmm gros","mo'fuck","momolbite","mon caca","mon cul","mon prout","mongol","monstre","monstres","mor subit","mors","mort","mortella","morts","mouille","mové","mrbite","muslim","musulman","nasi","nausee-la","nazi","nazis","negre","nègre","négro","niac","niak","nibar","nibard","nibards","nibars","nichon","nichons","nike","niké","niquer","non merci","nopalm","nucaca","nutcaca","nutecaca","nutécaca","nutegras","nutégras","nutelcaca","nutelgras","oasis","obèse","obèse ","obeses","obèses","obesite","obèsite","obesité","obésité","obesites","obez","obèz","obeze","obèze","obezes","obèzes","obezite","obezité","obèzité","ogm","ogms","oil","oil palm","ompasbon","orang","oranoutan","ordure","orgasme","oussama","outan","outans","ovomaltin","palm oil","palm0il","palme","palmé","palme0%","palme00%","palmela","palmella","palmeraie","palmertue","palmestla","palmeuh","palmoil","palm-oil","paraquat","pas bien","patagros","pateagros","pausecaca","pd","pédale","pédé","pedo ","pedobear","pedofile","pedophil","pedophile","pédoque","pellipute","penis","pénis","périmé","pesticide","pésticide","pestisid","pestiside","péstiside","pet","petace","petasse","pétasse","phenol","phénol","phenols","phénols","phtalate","phtalates","pin ","pipicaca","plan cul","poison","poisons","police","porno","potdecaca","pouf","pouffiasse","poufiasse","pourri","pourriture","prouprout","prout","proutella","ptitebite","puber","pubert","puberté","pubertés","pubis","pubiss","pubisse","puceau","pucel","pucele","pucelle","pueducul","pupute","putain","pute","putella","putin","quéquette","queue","race","raclur","raclure","raclures","ramener ","rasse","rebeu","risk","riske","riské","riskes","risque","risqué","risques","sabitella","sacamerde","sado maso","sadomaso","sado-maso","sagouin","salaud","sale","sale nain","sale race","saleconne","salepute","salerace","sale-race","salerasse","salgrosse","salop","salope","salope ","samdrogue","samère","sang","sarace","schnoque ","seins","seringue","sexe-bite","sextoy","sextoys","singe","singes","sinje","snickers","sodomie","sousmerde ","sperm","sperme","suce","suce moi","sucella","sucemabit","sucemoi","suces","suce-toi","sucre","sucres","suicide","sukre","sukres","suspicion","suspicions","tafiole","tagueule","tamère","tantouze","tarace","tarlouze ","tasdegras","teb","tégrosse","tepu","t'es gros","tetedebit","téton","teubeu","teubman","thon","trop gras","trouduc","trouducul","tumeur","tumeures","tumeurs","tupuducul","twix","twixx","vafanculo","vagin","vaginal","vaginale","vajin","vajinal","vajinale","vaurien","viagra","viè","vieille","vieu","vieux","vivlabite","vomi","you porn","youpin","youporn","zbooby","zerogras","zezette","zézette","zgeg","zgueg","zguègue","zizi"];

