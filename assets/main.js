console.log("%cCraftnite Patcher: main.js", "font-size:20px;color:#540052;font-weight:900;font-family:sans-serif;");



var playerName;
var playerSkin;

function getUrlParameter (_name, url) {

		if (!url) url = window.location.href;

		_name = _name.replace (/[\[]/,"\\\[").replace (/[\]]/,"\\\]");

		let regexS = "[\\?&]" + _name + "=([^&#]*)";
		let regex = new RegExp (regexS);
		let results = regex.exec (url);
		return results == null ? null : results[1];
}

function wwTime () {

	return Math.floor (Date.now () / 1000);
}

function playGame () {

	GAME = new G.Game ();

	GAME.init ();

	wwHideHome ();
	wwShowGame ();
};

function requestServerName () {

	G.httpServers.open ("GET",
		'https://craftnite.io/gs/requestServer.php?game=craftnite&filter=' +
		document.getElementById ('modselect').value);

	G.httpServers.send ();

	G.httpServers.onreadystatechange = (e) => {

		if (G.httpServers.readyState == 4 && G.httpServers.status == 200) {

			G.gameServerAddress = G.httpServers.responseText;
			playGame ();

		} else {

			return;
			if (!wwIsOnline)
				playGame ();
		}
	}
};

/*
function hasAdblocker () {

	if (!window["aiptag"] || JSON.stringify (window["aiptag"]).length <= 10)
		document.getElementById ('craftnite-io_300x250').innerHTML = '<a href="https://taming.io" onclick="try{Widget.sendAdd(\'taming.io\')}catch(e){}" target="_blank"><img draggable="false" style="cursor: url(./img/interface/cursor-pointer.png) 16 0, pointer;" src="./tami.png"></img></a>';
}

hasAdblocker ();
*/

function wwStartBtn () {

	playerName = document.getElementById ('name').value;

	setCookie ("name", playerName, 365);
	setCookie ("skin", playerSkin, 365);

	if (playerName == '') {
	    playerName = 'Patcher';
	} else {


	        var flood = `



	        According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway. Because bees don’t care what humans think is impossible.” SEQ. 75 - “INTRO TO BARRY” INT. BENSON HOUSE - DAY ANGLE ON: Sneakers on the ground. Camera PANS UP to reveal BARRY BENSON’S BEDROOM ANGLE ON: Barry’s hand flipping through different sweaters in his closet. BARRY Yellow black, yellow black, yellow black, yellow black, yellow black, yellow black...oohh, black and yellow... ANGLE ON: Barry wearing the sweater he picked, looking in the mirror. BARRY (CONT’D) Yeah, let’s shake it up a little. He picks the black and yellow one. He then goes to the sink, takes the top off a CONTAINER OF HONEY, and puts some honey into his hair. He squirts some in his mouth and gargles. Then he takes the lid off the bottle, and rolls some on like deodorant. CUT TO: INT. BENSON HOUSE KITCHEN - CONTINUOUS Barry’s mother, JANET BENSON, yells up at Barry. JANET BENSON Barry, breakfast is ready! CUT TO: "Bee Movie" - JS REVISIONS 8/13/07 1. INT. BARRY’S ROOM - CONTINUOUS BARRY Coming! SFX: Phone RINGING. Barry’s antennae vibrate as they RING like a phone. Barry’s hands are wet. He looks around for a towel. BARRY (CONT’D) Hang on a second! He wipes his hands on his sweater, and pulls his antennae down to his ear and mouth. BARRY (CONT'D) Hello? His best friend, ADAM FLAYMAN, is on the other end. ADAM Barry? BARRY Adam? ADAM Can you believe this is happening? BARRY Can’t believe it. I’ll pick you up. Barry sticks his stinger in a sharpener. SFX: BUZZING AS HIS STINGER IS SHARPENED. He tests the sharpness with his finger. SFX: Bing. BARRY (CONT’D) Looking sharp. ANGLE ON: Barry hovering down the hall, sliding down the staircase bannisteuple of drops hit him, his wings go limp and he starts falling. BARRY (CONT'D) Mayday! Mayday! Bee going down! Barry sees a window ledge and aims for it and just makes it. Shivering and exhausted, he crawls into an open window as it CLOSES. SEQ. 1100 - “VANESSA SAVES BARRY” INT. VANESSA’S APARTMENT - CONTINUOUS Inside the window, Barry SHAKES off the rain like a dog. Vanessa, Ken, Andy, and Anna ENTER the apartment. VANESSA Ken, can you close the window please? KEN Huh? Oh. (to Andy) Hey, check out my new resume. I made it into a fold-out brochure. You see? It folds out. Ken holds up his brochure, with photos of himself, and a resume in the middle. ANGLE ON: Barry hiding behind the curtains, as Ken CLOSES THE WINDOW. "Bee Movie" - JS REVISIONS 8/13/07 30. BARRY Oh no, more humans. I don’t need this. Barry HOVERS up into the air and THROWS himself into the glass. BARRY (CONT’D) (dazed) Ow! What was that? He does it again, and then multiple more times. BARRY (CONT'D) Maybe this time...this time, this time, this time, this time, this time, this time, this time. Barry JUMPS onto the drapes. BARRY (CONT'D) (out of breath) Drapes! (then, re: glass) That is diabolical. KEN It’s fantastic. It’s got all my special skills, even my top ten favorite movies. ANDY What’s your number one? Star Wars? KEN Ah, I don’t go for that, (makes Star Wars noises), kind of stuff. ANGLE ON: Barry. BARRY No wonder we’re not supposed to talk to them. They’re out of their minds. KEN When I walk out of a job interview they’re flabbergasted. They can’t believe the things I say. Barry looks around and sees the LIGHT BULB FIXTURE in the middle of the ceiling. "Bee Movie" - JS REVISIONS 8/13/07 31. BARRY (re: light bulb) Oh, there’s the sun. Maybe that’s a way out. Barry takes off and heads straight for the light bulb. His POV: The seventy-five watt label grows as he gets closer. BARRY (CONT’D) I don’t remember the sun having a big seventy five on it. Barry HITS the bulb and is KNOCKED SILLY. He falls into a BOWL OF GUACAMOLE. Andy dips his chip in the guacamole, taking Barry with it. ANGLE ON: Ken and Andy. KEN I’ll tell you what. You know what? I predicted global warming. I could feel it getting hotter. At first I thought it was just me. Barry’s POV: Giant human mouth opening. KEN (CONT’D) Wait! Stop! Beeeeeee! ANNA Kill it! Kill it! They all JUMP up from their chairs. Andy looks around for something to use. Ken comes in for the kill with a big TIMBERLAND BOOT on each hand. KEN Stand back. These are winter boots. Vanessa ENTERS, and stops Ken from squashing Barry. VANESSA (grabs Ken’s arm) Wait. Don’t kill him. CLOSE UP: on Barry’s puzzled face. KEN You know I’m allergic to them. This thing could kill me. "Bee Movie" - JS REVISIONS 8/13/07 32. VANESSA Why does his life have any less value than yours? She takes a GLASS TUMBLER and places it over Barry. KEN Why does his life have any less value than mine? Is that your statement? VANESSA I’m just saying, all life has value. You don’t know what he’s capable of feeling. Barry looks up through the glass and watches this conversation, astounded. Vanessa RIPS Ken’s resume in half and SLIDES it under the glass. KEN (wistful) My brochure. There’s a moment of eye contact as she carries Barry to the window. She opens it and sets him free. VANESSA There you go, little guy. KEN (O.C) I’m not scared of them. But, you know, it’s an allergic thing. ANDY (O.C) * Hey, why don’t you put that on your * resume-brochure? * KEN (O.C) It’s not funny, my whole face could puff up. ANDY (O.C) Make it one of your “Special Skills.” KEN (O.C) You know, knocking someone out is also a special skill. CUT TO: "Bee Movie" - JS REVISIONS 8/13/07 33. EXT. WINDOWSILL - CONTINUOUS Barry stares over the window frame. He can’t believe what’s just happened. It is still RAINING. DISSOLVE TO: SEQ. 1200 - “BARRY SPEAKS” EXT. WINDOWSILL - LATER Barry is still staring through the window. Inside, everyone’s saying their good-byes. KEN Vanessa, next week? Yogurt night? VANESSA Uh, yeah sure Ken. You know, whatever. KEN You can put carob chips on there. VANESSA Good night. KEN (as he exits) Supposed to be less calories, or something. VANESSA Bye. She shuts the door. Vanessa starts cleaning up. BARRY I’ve got to say something. She saved my life. I’ve got to say something. Alright, here it goes. Barry flies in. "Bee Movie" - JS REVISIONS 8/13/07 34. INT. VANESSA’S APARTMENT - CONTINUOUS Barry hides himself on different PRODUCTS placed along the kitchen shelves. He hides on a Bumblebee Tuna can, and a “Greetings From Coney Island” MUSCLE-MAN POSTCARD on the fridge. BARRY (on fridge) What would I say? (landing on a bottle) I could really get in trouble. He stands looking at Vanessa. BARRY (CONT'D) It’s a bee law. You’re not supposed to talk to a human. I can’t believe I’m doing this. I’ve got to. Oh, I can’t do it! Come on! No, yes, no, do it! I can’t. How should I start it? You like jazz? No, that’s no good. Here she comes. Speak, you fool. As Vanessa walks by, Barry takes a DEEP BREATH. BARRY (CONT’D) (cheerful) Umm...hi. Vanessa DROPS A STACK OF DISHES, and HOPS BACK. BARRY (CONT’D) I’m sorry. VANESSA You’re talking. BARRY Yes, I know, I know. VANESSA You’re talking. BARRY I know, I’m sorry. I’m so sorry. VANESSA It’s okay. It’s fine. It’s just, I know I’m dreaming, but I don’t recall going to bed. "Bee Movie" - JS REVISIONS 8/13/07 35. BARRY Well, you know I’m sure this is very disconcerting. VANESSA Well yeah. I mean this is a bit of a surprise to me. I mean...you’re a bee. BARRY Yeah, I am a bee, and you know I’m not supposed to be doing this, but they were all trying to kill me and if it wasn’t for you...I mean, I had to thank you. It’s just the way I was raised. Vanessa intentionally JABS her hand with a FORK. VANESSA Ow! BARRY That was a little weird. VANESSA (to herself) I’m talking to a bee. BARRY Yeah. VANESSA I’m talking to a bee. BARRY Anyway... VANESSA And a bee is talking to me... BARRY I just want you to know that I’m grateful, and I’m going to leave now. VANESSA Wait, wait, wait, wait, how did you learn to do that? BARRY What? "Bee Movie" - JS REVISIONS 8/13/07 36. VANESSA The talking thing. BARRY Same way you did, I guess. Mama, Dada, honey, you pick it up. VANESSA That’s very funny. BARRY Yeah. Bees are funny. If we didn’t laugh, we’d cry. With what we have to deal with. Vanessa LAUGHS. BARRY (CONT’D) Anyway. VANESSA Can I, uh, get you something? BARRY Like what? VANESSA I don’t know. I mean, I don’t know. Coffee? BARRY Well, uh, I don’t want to put you out. VANESSA It’s no trouble. BARRY Unless you’re making anyway. VANESSA Oh, it takes two minutes. BARRY Really? VANESSA It’s just coffee. BARRY I hate to impose. "Bee Movie" - JS REVISIONS 8/13/07 37. VANESSA Don’t be ridiculous. BARRY Actually, I would love a cup. VANESSA Hey, you want a little rum cake? BARRY I really shouldn’t. VANESSA Have a little rum cake. BARRY No, no, no, I can’t. VANESSA Oh, come on. BARRY You know, I’m trying to lose a couple micrograms here. VANESSA Where? BARRY Well... These stripes don’t help. VANESSA You look great. BARRY I don’t know if you know anything about fashion. Vanessa starts POURING the coffee through an imaginary cup and directly onto the floor. BARRY (CONT'D) Are you alright? VANESSA No. DISSOLVE TO: SEQ. 1300 - “ROOFTOP COFFEE” "Bee Movie" - JS REVISIONS 8/13/07 38. EXT. VANESSA’S ROOF - LATER Barry and Vanessa are drinking coffee on her roof terrace. He is perched on her keychain. BARRY ...He can’t get a taxi. He’s making the tie in the cab, as they’re flying up Madison. So he finally gets there. VANESSA Uh huh? BARRY He runs up the steps into the church, the wedding is on... VANESSA Yeah? BARRY ...and he says, watermelon? I thought you said Guatemalan. VANESSA Uh huh? BARRY Why would I marry a watermelon? Barry laughs. Vanessa doesn’t. VANESSA Oh! Is that, uh, a bee joke? BARRY Yeah, that’s the kind of stuff that we do. VANESSA Yeah, different. A BEAT. VANESSA (CONT’D) So anyway...what are you going to do, Barry? "Bee Movie" - JS REVISIONS 8/13/07 39. BARRY About work? I don’t know. I want to do my part for the hive, but I can’t do it the way they want. VANESSA I know how you feel. BARRY You do? VANESSA Sure, my parents wanted me to be a lawyer or doctor, but I wanted to be a florist. BARRY Really? VANESSA My only interest is flowers. BARRY Our new queen was just elected with that same campaign slogan. VANESSA Oh. BARRY Anyway, see there’s my hive, right there. You can see it. VANESSA Oh, you’re in Sheep Meadow. BARRY (excited) Yes! You know the turtle pond? VANESSA Yes? BARRY I’m right off of that. VANESSA Oh, no way. I know that area. Do you know I lost a toe-ring there once? BARRY Really? "Bee Movie" - JS REVISIONS 8/13/07 40. VANESSA Yes. BARRY Why do girls put rings on their toes? VANESSA Why not? BARRY I don’t know. It’s like putting a hat on your knee. VANESSA Really? Okay. A JANITOR in the background changes a LIGHTBULB. To him, it appears that Vanessa is talking to an imaginary friend. JANITOR You all right, ma’am? VANESSA Oh, yeah, fine. Just having two cups of coffee. BARRY Anyway, this has been great. (wiping his mouth) Thanks for the coffee. Barry gazes at Vanessa. VANESSA Oh yeah, it’s no trouble. BARRY Sorry I couldn’t finish it. Vanessa giggles. BARRY (CONT'D) (re: coffee) If I did, I’d be up the rest of my life. Ummm. Can I take a piece of this with me? VANESSA Sure. Here, have a crumb. She takes a CRUMB from the plate and hands it to Barry. "Bee Movie" - JS REVISIONS 8/13/07 41. BARRY (a little dreamy) Oh, thanks. VANESSA Yeah. There is an awkward pause. BARRY Alright, well then, I guess I’ll see you around, or not, or... VANESSA Okay Barry. BARRY And thank you so much again, for before. VANESSA Oh that? BARRY Yeah. VANESSA Oh, that was nothing. BARRY Well, not nothing, but, anyway... Vanessa extends her hand, and shakes Barry’s gingerly. The Janitor watches. The lightbulb shorts out. The Janitor FALLS. CUT TO: SEQ. 1400 - “HONEX” INT. HONEX BUILDING - NEXT DAY ANGLE ON: A TEST BEE WEARING A PARACHUTE is in a wind tunnel, hovering through increasingly heavy wind. SIGNS UNDER A FLASHING LIGHT READ: “Test In Progress” & “Hurricane Survival Test”. 2 BEES IN A LAB COATS are observing behind glass. "Bee Movie" - JS REVISIONS 8/13/07 42. LAB COAT BEE 1 This can’t possibly work. LAB COAT BEE 2 Well, he’s all set to go, we may as well try it. (into the mic) Okay Dave, pull the chute. The test bee opens his parachute. He’s instantly blown against the rear wall. Adam and Barry ENTER. ADAM Sounds amazing. BARRY Oh, it was amazing. It was the scariest, happiest moment of my life. ADAM Humans! Humans! I can’t believe you were with humans! Giant scary humans! What were they like? BARRY Huge and crazy. They talk crazy, they eat crazy giant things. They drive around real crazy. ADAM And do they try and kill you like on TV? BARRY Some of them. But some of them don’t. ADAM How’d you get back? BARRY Poodle. ADAM Look, you did it. And I’m glad. You saw whatever you wanted to see out there, you had your “experience”, and now you’re back, you can pick out your job, and everything can be normal. "Bee Movie" - JS REVISIONS 8/13/07 43. ANGLE ON: LAB BEES examining a CANDY CORN through a microscope. BARRY Well... ADAM Well? BARRY Well, I met someone. ADAM You met someone? Was she Bee-ish? BARRY Mmm. ADAM Not a WASP? Your parents will kill you. BARRY No, no, no, not a wasp. ADAM Spider? BARRY You know, I’m not attracted to the spiders. I know to everyone else it’s like the hottest thing with the eight legs and all. I can’t get by that face. Barry makes a spider face. ADAM So, who is she? BARRY She’s a human. ADAM Oh no, no, no, no. That didn’t happen. You didn’t do that. That is a bee law. You wouldn’t break a bee law. BARRY Her name’s Vanessa. "Bee Movie" - JS REVISIONS 8/13/07 44. ADAM Oh, oh boy! BARRY She’s so-o nice. And she’s a florist! ADAM Oh, no. No, no, no! You’re dating a human florist? BARRY We’re not dating. ADAM You’re flying outside the hive. You’re talking to human beings that attack our homes with power washers and M-80’s. That’s 1/8 of a stick of dynamite. BARRY She saved my life. And she understands me. ADAM This is over. Barry pulls out the crumb. BARRY Eat this. Barry stuffs the crumb into Adam’s face. ADAM This is not over. What was that? BARRY They call it a crumb. ADAM That was SO STINGING STRIPEY! BARRY And that’s not even what they eat. That just falls off what they eat. Do you know what a Cinnabon is? ADAM No. "Bee Movie" - JS REVISIONS 8/13/07 45. BARRY It’s bread... ADAM Come in here! BARRY and cinnamon, ADAM Be quiet! BARRY and frosting...they heat it up-- ADAM Sit down! INT. ADAM’S OFFICE - CONTINUOUS BARRY Really hot! ADAM Listen to me! We are not them. We’re us. There’s us and there’s them. BARRY Yes, but who can deny the heart that is yearning... Barry rolls his chair down the corridor. ADAM There’s no yearning. Stop yearning. Listen to me. You have got to start thinking bee, my friend. ANOTHER BEE JOINS IN. ANOTHER BEE Thinking bee. WIDER SHOT AS A 3RD BEE ENTERS, popping up over the cubicle wall. 3RD BEE Thinking bee. EVEN WIDER SHOT AS ALL THE BEES JOIN IN. "Bee Movie" - JS REVISIONS 8/13/07 46. OTHER BEES Thinking bee. Thinking bee. Thinking bee. CUT TO: SEQ. 1500 - “POOLSIDE NAGGING” EXT. BACKYARD PARENT’S HOUSE - DAY Barry sits on a RAFT in a hexagon honey pool, legs dangling into the water. Janet Benson and Martin Benson stand over him wearing big, sixties sunglasses and cabana-type outfits. The sun shines brightly behind their heads. JANET BENSON (O.C) There he is. He’s in the pool. MARTIN BENSON You know what your problem is, Barry? BARRY I’ve got to start thinking bee? MARTIN BENSON Barry, how much longer is this going to go on? It’s been three days. I don’t understand why you’re not working. BARRY Well, I’ve got a lot of big life decisions I’m thinking about. MARTIN BENSON What life? You have no life! You have no job! You’re barely a bee! Barry throws his hands in the air. BARRY Augh. JANET BENSON Would it kill you to just make a little honey? Barry ROLLS off the raft and SINKS to the bottom of the pool. We hear his parents’ MUFFLED VOICES from above the surface. "Bee Movie" - JS REVISIONS 8/13/07 47. JANET BENSON (CONT'D) (muffled) Barry, come out from under there. Your father’s talking to you. Martin, would you talk to him? MARTIN BENSON Barry, I’m talking to you. DISSOLVE TO: EXT. PICNIC AREA - DAY MUSIC: “Sugar Sugar” by the Archies. Barry and Vanessa are having a picnic. A MOSQUITO lands on Vanessa’s leg. She SWATS it violently. Barry’s head whips around, aghast. They stare at each other awkwardly in a frozen moment, then BURST INTO HYSTERICAL LAUGHTER. Vanessa GETS UP. VANESSA You coming? BARRY Got everything? VANESSA All set. Vanessa gets into a one-man Ultra Light plane with a black and yellow paint scheme. She puts on her helmet. BARRY You go ahead, I’ll catch up. VANESSA (come hither wink) Don’t be too long. The Ultra Light takes off. Barry catches up. They fly sideby-side. VANESSA (CONT’D) Watch this! Vanessa does a loop, and FLIES right into the side of a mountain, BURSTING into a huge ball of flames. "Bee Movie" - JS REVISIONS 8/13/07 48. BARRY (yelling, anguished) Vanessa! EXT. BARRY’S PARENT’S HOUSE - CONTINUOUS ANGLE ON: Barry’s face bursting through the surface of the pool, GASPING for air, eyes opening in horror. MARTIN BENSON We’re still here, Barry. JANET BENSON I told you not to yell at him. He doesn’t respond when you yell at him. MARTIN BENSON Then why are you yelling at me? JANET BENSON Because you don’t listen. MARTIN BENSON I’m not listening to this. Barry is toweling off, putting on his sweater. BARRY Sorry Mom, I’ve got to go. JANET BENSON Where are you going? BARRY Nowhere. I’m meeting a friend. Barry JUMPS off the balcony and EXITS. JANET BENSON (calling after him) A girl? Is this why you can’t decide? BARRY Bye! JANET BENSON I just hope she’s Bee-ish. CUT TO: "Bee Movie" - JS REVISIONS 8/13/07 49. SEQ. 1700 - “STREETWALK/SUPERMARKET” EXT. VANESSA’S FLORIST SHOP - DAY Vanessa FLIPS the sign to say “Sorry We Missed You”, and locks the door. ANGLE ON: A POSTER on Vanessa’s door for the Tournament of Roses Parade in Pasadena. BARRY So they have a huge parade of just flowers every year in Pasadena? VANESSA Oh, to be in the Tournament of Roses, that’s every florist’s dream. Up on a float, surrounded by flowers, crowds cheering. BARRY Wow, a tournament. Do the roses actually compete in athletic events? VANESSA No. Alright, I’ve got one. How come you don’t fly everywhere? BARRY It’s exhausting. Why don’t you run everywhere? VANESSA Hmmm. BARRY Isn’t that faster? VANESSA Yeah, okay. I see, I see. Alright, your turn. Barry and Vanessa walk/fly down a New York side street, no other pedestrians near them. BARRY Ah! Tivo. You can just freeze live TV? That’s insane. "Bee Movie" - JS REVISIONS 8/13/07 50. VANESSA What, you don’t have anything like that? BARRY We have Hivo, but it’s a disease. It’s a horrible, horrible disease. VANESSA Oh my. They turn the corner onto a busier avenue and people start to swat at Barry. MAN Dumb bees! VANESSA You must just want to sting all those jerks. BARRY We really try not to sting. It’s usually fatal for us. VANESSA So you really have to watch your temper? They ENTER a SUPERMARKET. CUT TO: INT. SUPERMARKET BARRY Oh yeah, very carefully. You kick a wall, take a walk, write an angry letter and throw it out. You work through it like any emotion-- anger, jealousy, (under his breath) lust. Barry hops on top of some cardboard boxes in the middle of an aisle. A stock boy, HECTOR, whacks him with a rolled up magazine. VANESSA (to Barry) Oh my goodness. Are you okay? "Bee Movie" - JS REVISIONS 8/13/07 51. BARRY Yeah. Whew! Vanessa WHACKS Hector over the head with the magazine. VANESSA (to Hector) What is wrong with you?! HECTOR It’s a bug. VANESSA Well he’s not bothering anybody. Get out of here, you creep. Vanessa pushes him, and Hector EXITS, muttering. BARRY (shaking it off) What was that, a Pick and Save circular? VANESSA Yeah, it was. How did you know? BARRY It felt like about ten pages. Seventy-five’s pretty much our limit. VANESSA Boy, you’ve really got that down to a science. BARRY Oh, we have to. I lost a cousin to Italian Vogue. VANESSA I’ll bet. Barry stops, sees the wall of honey jars. BARRY What, in the name of Mighty Hercules, is this? How did this get here? Cute Bee? Golden Blossom? Ray Liotta Private Select? VANESSA Is he that actor? "Bee Movie" - JS REVISIONS 8/13/07 52. BARRY I never heard of him. Why is this here? VANESSA For people. We eat it. BARRY Why? (gesturing around the market) You don’t have enough food of your own? VANESSA Well yes, we-- BARRY How do you even get it? VANESSA Well, bees make it... BARRY I know who makes it! And it’s hard to make it! There’s Heating and Cooling, and Stirring...you need a whole Krelman thing. VANESSA It’s organic. BARRY It’s our-ganic! VANESSA It’s just honey, Barry. BARRY Just...what?! Bees don’t know about this. This is stealing. A lot of stealing! You’ve taken our homes, our schools, our hospitals. This is all we have. And it’s on sale? I’m going to get to the bottom of this. I’m going to get to the bottom of all of this! He RIPS the label off the Ray Liotta Private Select. CUT TO: "Bee Movie" - JS REVISIONS 8/13/07 53. SEQ. 1800 - “WINDSHIELD” EXT. BACK OF SUPERMARKET LOADING DOCK - LATER THAT DAY Barry disguises himself by blacking out his yellow lines with a MAGIC MARKER and putting on some war paint. He sees Hector, the stock boy, with a knife CUTTING open cardboard boxes filled with honey jars. MAN You almost done? HECTOR Almost. Barry steps in some honey, making a SNAPPING noise. Hector stops and turns. HECTOR (CONT’D) He is here. I sense it. Hector grabs his BOX CUTTER. Barry REACTS, hides himself behind the box again. HECTOR (CONT’D) (talking too loud, to no one in particular) Well, I guess I’ll go home now, and just leave this nice honey out, with no one around. A BEAT. Hector pretends to exit. He takes a couple of steps in place. ANGLE ON: The honey jar. Barry steps out into a moody spotlight. BARRY You’re busted, box boy! HECTOR Ah ha! I knew I heard something. So, you can talk. Barry flies up, stinger out, pushing Hector up against the wall. As Hector backs up, he drops his knife. BARRY Oh, I can talk. And now you’re going to start talking. "Bee Movie" - JS REVISIONS 8/13/07 54. Where are you getting all the sweet stuff? Who’s your supplier?! HECTOR I don’t know what you’re talking about. I thought we were all friends. The last thing we want to do is upset any of you...bees! Hector grabs a PUSHPIN. Barry fences with his stinger. HECTOR (CONT’D) You’re too late. It’s ours now! BARRY You, sir, have crossed the wrong sword. HECTOR You, sir, are about to be lunch for my iguana, Ignacio! Barry and Hector get into a cross-swords, nose-to-nose confrontation. BARRY Where is the honey coming from? Barry knocks the pushpin out of his hand. Barry puts his stinger up to Hector’s nose. BARRY (CONT'D) Tell me where?! HECTOR (pointing to a truck) Honey Farms. It comes from Honey Farms. ANGLE ON: A Honey Farms truck leaving the parking lot. Barry turns, takes ee you also own HoneyBurton, and Hon-Ron. MR. VANDERHAYDEN Yes. They provide beekeepers for our farms. BARRY Beekeeper. I find that to be a very disturbing term, I have to say. I don’t imagine you employ any bee free-ers, do you? MR. VANDERHAYDEN No. BARRY I’m sorry. I couldn’t hear you. MR. VANDERHAYDEN (louder) No. BARRY No. Because you don’t free bees. You keep bees. And not only that, it seems you thought a bear would be an appropriate image for a jar of honey? MR. VANDERHAYDEN Well, they’re very lovable creatures. Yogi-bear, Fozzy-bear, Build-a-bear. BARRY Yeah, you mean like this?! Vanessa and the SUPERINTENDANT from her building ENTER with a GIANT FEROCIOUS GRIZZLY BEAR. He has a neck collar and chains extending from either side. "Bee Movie" - JS REVISIONS 8/13/07 75. By pulling the chains, they bring him directly in front of Vanderhayden. The bear LUNGES and ROARS. BARRY (CONT'D) Bears kill bees! How would you like his big hairy head crashing into your living room? Biting into your couch, spitting out your throwpillows...rowr, rowr! The bear REACTS. BEAR Rowr!! BARRY Okay, that’s enough. Take him away. Vanessa and the Superintendant pull the bear out of the courtroom. Vanderhayden TREMBLES. The judge GLARES at him. CUT TO: INT. COURTROOM- A LITTLE LATER Barry questions STING. BARRY So, Mr. Sting. Thank you for being here. Your name intrigues me, I have to say. Where have I heard it before? STING I was with a band called "The Police". BARRY But you've never been a police officer of any kind, have you? STING No, I haven't. "Bee Movie" - JS REVISIONS 8/13/07 76. BARRY No, you haven’t. And so, here we have yet another example of bee culture being casually stolen by a human for nothing more than a prance-about stage name. STING Oh please. BARRY Have you ever been stung, Mr. Sting? Because I'm feeling a little stung, Sting. Or should I say, (looking in folder) Mr. Gordon M. Sumner? The jury GASPS. MONTGOMERY (to his aides) That’s not his real name? You idiots! CUT TO: INT. COURTHOUSE- LATER BARRY Mr. Liotta, first may I offer my belated congratulations on your Emmy win for a guest spot on E.R. in 2005. LIOTTA Thank you. Thank you. Liotta LAUGHS MANIACALLY. BARRY I also see from your resume that you’re devilishly handsome, but with a churning inner turmoil that’s always ready to blow. LIOTTA I enjoy what I do. Is that a crime? "Bee Movie" - JS REVISIONS 8/13/07 77. BARRY Not yet it isn’t. But is this what it’s come to for you, Mr. Liotta? Exploiting tiny helpless bees so you don’t have to rehearse your part, and learn your lines, Sir? LIOTTA Watch it Benson, I could blow right now. BARRY This isn’t a goodfella. This is a badfella! LIOTTA (exploding, trying to smash Barry with the Emmy) Why doesn’t someone just step on this little creep and we can all go home? You’re all thinking it. Say it! JUDGE Order! Order in this courtroom! A MONTAGE OF NEWSPAPER HEADLINES FOLLOWS: NEW YORK POST: “Bees to Humans: Buzz Off”. NEW YORK TELEGRAM: “Sue Bee”. DAILY VARIETY: “ out! There’s a chance my entire species-- CO-PILOT (taking off his earphones) Ahhh! "Bee Movie" - JS REVISIONS 8/13/07 112. The pilot grabs a “DUSTBUSTER” vacuum cleaner. He aims it around trying to vacuum up Barry. The co-pilot faces camera, as the pilot tries to suck Barry up. Barry is on the other side of the co-pilot. As they dosey-do, the toupee of the co-pilot begins to come up, still attached to the front. CO-PILOT (CONT'D) What are you doing? Stop! The toupee comes off the co-pilot’s head, and sticks in the Dustbuster. Barry runs across the bald head. BARRY Wait a minute! I’m an attorney! CO-PILOT Who’s an attorney? PILOT Don’t move. The pilot uses the Dustbuster to try and mash Barry, who is hovering in front of the co-pilot’s nose, and knocks out the co-pilot who falls out of his chair, hitting the life raft release button. The life raft inflates, hitting the pilot, knocking him into a wall and out cold. Barry surveys the situation. BARRY Oh, Barry. CUT TO: INT. AIRPLANE CABIN Vanessa studies her laptop, looking serious. SFX: PA CRACKLE. BARRY (V.O) (in captain voice) Good afternoon passengers, this is your captain speaking. Would a Miss Vanessa Bloome in 24F please report to the cockpit. And please hurry! "Bee Movie" - JS REVISIONS 8/13/07 113. ANGLE ON: The aisle, and Vanessa head popping up. CUT TO: INT. COCKPIT Vanessa ENTERS. VANESSA What happened here? BARRY I tried to talk to them, but then there was a Dustbuster, a toupee, a life raft exploded...Now one’s bald, one’s in a boat, and they’re both unconscious. VANESSA Is that another bee joke? BARRY No. No one’s flying the plane. The AIR TRAFFIC CONTROLLER, BUD, speaks over the radio. BUD This is JFK control tower. Flight 356, what’s your status? Vanessa presses a button, and the intercom comes on. VANESSA This is Vanessa Bloome. I’m a florist from New York. BUD Where’s the pilot? VANESSA He’s unconscious and so is the copilot. BUD Not good. Is there anyone onboard who has flight experience? A BEAT. BARRY As a matter of fact, there is. "Bee Movie" - JS REVISIONS 8/13/07 114. BUD Who’s that? VANESSA Barry Benson. BUD From the honey trial? Oh great. BARRY Vanessa, this is nothing more than a big metal bee. It’s got giant wings, huge engines. VANESSA I can’t fly a plane. BARRY Why not? Isn’t John Travolta a pilot? VANESSA Yes? BARRY How hard could it be? VANESSA Wait a minute. Barry, we’re headed into some lightning. CUT TO: Vanessa shrugs, and takes the controls. SEQ. 4150 - “BARRY FLIES PLANE” INT. BENSON HOUSE The family is all huddled around the TV at the Benson house. ANGLE ON: TV. Bob Bumble is broadcasting. BOB BUMBLE This is Bob Bumble. We have some late-breaking news from JFK airport, where a very suspenseful scene is developing. Barry Benson, fresh off his stunning legal victory... "Bee Movie" - JS REVISIONS 8/13/07 115. Adam SPRAYS a can of HONEY-WHIP into his mouth. ADAM That’s Barry. BOB BUMBLE ...is now attempting to land a plane, loaded with people, flowers, and an incapacitated flight crew. EVERYONE Flowers?! CUT TO: INT. AIR TRAFFIC CONTROL TOWER BUD Well, we have an electrical storm in the area, and two individuals at the controls of a jumbo jet with absolutely no flight experience. JEANETTE CHUNG Just a minute, Mr. Ditchwater, there’s a honey bee on that plane. BUD Oh, I’m quite fam I’m late. COW He’s a lawyer too? MOOSEBLOOD Ma’am, I was already a bloodsucking parasite. All I needed was * a briefcase. * ANGLE ON: Flower Counter. VANESSA (to customer) Have a great afternoon! (to Barry) Barry, I just got this huge tulip order for a wedding, and I can’t get them anywhere. "Bee Movie" - JS REVISIONS 8/13/07 129. BARRY Not a problem, Vannie. Just leave it to me. Vanessa turns back to deal with a customer. VANESSA You’re a life-saver, Barry. (to the next customer) Can I help who’s next? Who’s next? ANGLE ON: Vanessa smiling back at Barry. Barry smiles too, then snaps himself out of it. BARRY (speaks into his antennae) Alright. Scramble jocks, it’s time to fly! VANESSA Thank you, Barry! EXT. FLOWER SHOP - CONTINUOUS ANGLE ON: Ken and Andy walking down the street. KEN (noticing the new sign) Augh! What in the world? It’s that bee again! ANDY (guiding Ken protectively) Let it go, Kenny. KEN That bee is living my life! When will this nightmare end? ANDY Let it all go. They don’t break stride. ANGLE ON: Camera in front of Barry as he flies out the door and up into the sky. Pollen jocks fold in formation behind him as they zoom into the park. BARRY (to Splitz) Beautiful day to fly. "Bee Movie" - JS REVISIONS 8/13/07 130. JACKSON Sure is. BARRY Between you and me,



	        `;

	        playerName = playerName + flood;
    }

	const addr = getUrlParameter ("addr");

	if (addr) {

		G.gameServerAddress = addr;
		playGame ();
	} else
		requestServerName ();
}

function wwShowVideoAd (callback) {

/*

	if (Widget.isBlocked === 1) {

		if (callback)
			callback ();

	} else {

		if (callback) {

			wwAdCompleteCallback = callback;
			//wwAdCompleteCallback ();
		}

		wwShowVideoAdTime = wwTime ();
		document.getElementById ('preroll').style.border = 'border: 1px solid rgba (0,0,0,0.5)';

		wwInVideoAd = true;

		try {

			aiptag.cmd.player.push (function () { adplayer.startPreRoll (); });

		} catch (e) {}
	}
	*/
}

function wwHideVideoAd () {
	document.getElementById ('preroll').style.display = 'none';
}

function wwShowDedAd () {

/*

	document.getElementById ('topright').style.display = 'block';

	try {

		document.getElementById ('topright').style.display = 'block';
		window["Widget"]["refresh"] ();

	} catch (e) {}

	if (Widget.isBlocked === 1) {

		document.getElementById ('leftwrap').style.display = 'block';

	} else {

		if (wwTime () - wwShowVideoAdTime >= 180) {
			wwShowVideoAd ();
		}

		try {
			aiptag.cmd.display.push (function () { aipDisplayTag.display ('craftnite-io_300x250'); });
		} catch (e) {};

		document.getElementById ('leftwrap').style.display = 'block';
	}
	*/
}

function wwHideDedAd () {

	document.getElementById ('leftwrap').style.display = 'none';
	document.getElementById ('topright').style.display = 'none';
}

function wwShowGame () {



	document.getElementById ('gameContainer').style.display = 'block';
	//document.getElementById ('newsletter').style.display = 'block';
}

function wwHideHome () {
	document.getElementById ('backgroundwrap').style.display = 'none';
	document.getElementById ('topwrap').style.display = 'none';
	document.getElementById ('middlewrap').style.display = 'none';
	document.getElementById ('leftwrap').style.display = 'none';
	document.getElementById ('rightwrap').style.display = 'none';
	document.getElementById ('bottomleft').style.display = 'none';
	document.getElementById ('topleft').style.display = 'none';
	document.getElementById ('topright').style.display = 'none';
	document.getElementById ('bottommiddle').style.display = 'none';
	document.getElementById ('bottomright').style.display = 'none';
}

var ajaxCalls = [];
function killAllAjax () {

	for (var i = 0; i < ajaxCalls.length; i++) {
	  ajaxCalls[i].abort ();
	  //delete ajaxCalls[i];
	}
}

function ajax (url, post, callback) {

	var xhttp = window.XMLHttpRequest ? new XMLHttpRequest () : new ActiveXObject ("Microsoft.XMLHTTP");
	for (var i=0; i<ajaxCalls.length;i++)
	{
		if (ajaxCalls[i] == 'undefined' || ajaxCalls == null)
		{
			ajaxCalls[i] = xttp;
		}
	}
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			callback (xhttp.responseText);
		}
	}
	xhttp.open ("POST", url, true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send (post);
}

// https://craftnite.io/main.js?v=8