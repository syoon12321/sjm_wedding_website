// src/adventureData.ts
import { Scene } from './types';

export const scenes: Scene[] = [
  {
    id: 'start',
    text: 'How many times did Manuel and Soohyun meet before they started dating? Play this game to find out!',
    choices: [
      { text: 'Continue', nextSceneId: 'genChem' },
    ],
  },
  {
    id: 'genChem',
    text: 'Soohyun is at office hours for General Chemistry. She and a handful of other students are crammed into Dr. Kincaid’s office to get help on the latest problem set. One of the students asks a question and Kincaid stares him down. “Mr. Pacheco...” she says sternly before answering his question. Soohyun looks at the boy with curly hair and thinks he looks rather smart. Should she ask him out?',
    choices: [
      { text: 'Yes', nextSceneId: 'end' },
      { text: 'No', nextSceneId: 'genChemNo' },
    ],
  },
  {
    id: 'genChemNo',
    text: 'Soohyun is way too busy trying to pass this class to see any chemistry with this “Mr. Pacheco.” Keep going.',
    choices: [
      { text: 'Continue', nextSceneId: 'hanszenPublic' },
    ],
  },
  {
    id: 'hanszenPublic',
    text: 'Manuel is dancing around the pole at the Hanszen public party. The event is winding down, and Manuel is a little drunk/doesn’t feel like walking all the way across campus to his dorm on his own. Thankfully, there are plenty of Hanszenites putting in their freshmen service hours and helping inebriated partyers (culture of care y’all). A guy named David and a girl name Soohyun offer to walk him to Jones. Maybe it’s the alcohol talking or the romance of Rice campus at night, but Soo’s kinda sweet. Should he ask her out?',
    choices: [
      { text: 'Yes', nextSceneId: 'end' },
      { text: 'No', nextSceneId: 'hanszenPublicNo' },
    ],
  },
  {
    id: 'hanszenPublicNo',
    text: 'Manuel decides to sleep on it and wakes up with a hangover the next day. Keep going.',
    choices: [
      { text: 'Continue', nextSceneId: 'riceBikes' },
    ],
  },
  {
    id: 'riceBikes',
    text: 'Soohyun is working a shift at Rice Bikes with Anthony and Louis. A customer walks in with a very bent bike wheel. Apparently, he rode into the fountain by the business school (sober) and needs a new wheel. Wheel standard are really confusing, and while it’s clear they’ll need to order a wheel, no one really knows what they’re doing (they end up ordering the wrong wheel). Anthony and Louis are friends with the customer, Manuel, and they’re all joking around. Soo lies Manuel’s good humor. Should she ask him out?',
    choices: [
      { text: 'Yes', nextSceneId: 'end' },
      { text: 'No', nextSceneId: 'riceBikesNo' },
    ],
  },
  {
    id: 'riceBikesNo',
    text: 'Manuel leaves the shop, and Soohyun has to spend the rest of shift listening to Louis and Anthony make lewd jokes about bike nipples. Keep going.',
    choices: [
      { text: 'Continue', nextSceneId: 'beerBike' },
    ],
  },
  {
    id: 'beerBike',
    text: 'BEER!!! BIKE!!!!! Soohyun has finished her two laps for Hanszen college in the women’s race, and she’s watching the men’s teams warm up around the track. She’s cheering for her friend Kutub repping Sid Rich college when a flash of green passes. A Jones biker! She’s seen him around before, and he looks pretty fast! Should she ask him out?',
    choices: [
      { text: 'Yes', nextSceneId: 'end' },
      { text: 'No', nextSceneId: 'beerBikeNo' },
    ],
  },
  {
    id: 'beerBikeNo',
    text: 'He’s moving too fast for her to make a move. Keep going.',
    choices: [
      { text: 'Continue', nextSceneId: 'moving' },
    ],
  },
  {
    id: 'moving',
    text: 'Manuel and Mao launch a side-hustle at the end of freshman year helping Rice students move out of their dorms for the summer. He advertises his services on the Rice students’ Facebook groups, and soon enough, Soohyun Yoon slides into his DM’s. They arrange the time and place, and Manuel and Mao show up to help Soohyun and Megan move their things from the third floor dorm to a storage unit nearby. Manuel even helps the girls rescue a baby bird. He also notices Soohyun checking out his muscles. Should he ask her out?',
    choices: [
      { text: 'Yes', nextSceneId: 'end' },
      { text: 'No', nextSceneId: 'movingNo' },
    ],
  },
  {
    id: 'movingNo',
    text: 'Nah, her mini fridge and other worldly were super heavy to carry down all those flights of stairs, and Manuel is more into that minimalist lifestyle. Keep going.',
    choices: [
      { text: 'Continue', nextSceneId: 'hackathon' },
    ],
  },
  {
    id: 'hackathon',
    text: "It’s sophomore year, and Manuel is participating in the Lilie Lab Startup Hackathon. His team wants to pitch a bike share business and are conducting research on bike rental options. Their search leads them to the Rice Bikes garage. Lucky for Manuel, the project manager who oversees the shop’s rental program is on shift when he walks in. She takes a break from the bike she’s fixing to answer his questions about the rental program. Manuel had fun talking to her and thinks he might be interested in starting a different venture with her, unrelated to the hackathon. Should he ask her out?",
    choices: [
      { text: 'Yes', nextSceneId: 'end' },
      { text: 'No', nextSceneId: 'hackathonNo' },
    ],
  },
  {
    id: 'hackathonNo',
    text: 'Nonetheless, they exchange phone numbers in case Manuel has any more questions. She’s saved as “Soo Rice Bikes” on his phone, and he’s saved as “Manuel Pancheto” on hers due to an unfortunate case of spell-it-like-it-sounds. Keep going.',
    choices: [
      { text: 'Continue', nextSceneId: 'jobInterview' },
    ],
  },
  {
    id: 'jobInterview',
    text: 'It’s the spring of sophomore year, and Manuel decides to apply for a job as a mechanic at Rice Bikes. Luckily, he gets called in for an interview. He sits down at the shop with three managers and talks about why he would be the perfect employee. He notices a lot of nodding and smiling, which is a good sign. He also notices that the personnel manager who’s leading the meeting, Soohyun, looks pretty cute as she’s scribbling notes. Should he ask her out?',
    choices: [
      { text: 'Yes', nextSceneId: 'end' },
      { text: 'No', nextSceneId: 'jobInterviewNo' },
    ],
  },
  {
    id: 'jobInterviewNo',
    text: 'Manuel decides hitting on the hiring manager is decidedly unprofessional. He finished off the interview strong by talking about his passion for fried chicken. Keep going.',
    choices: [
      { text: 'Continue', nextSceneId: 'ruct' },
    ],
  },
  {
    id: 'ruct',
    text: 'Manuel got the job at Rice Bikes! He’s about to start working, but he has a lot on his plate. New hire training is scheduled for next Saturday, and the Rice University Cycling and Triathlon spring training camp is taking place the same weekend in Austin. He was really looking forward to riding his bike up and down the Texas hill country, but he knows he shouldn’t miss the mandatory job training. Should he email Soohyun to ask if he can reschedule?',
    choices: [
      { text: 'Yes', nextSceneId: 'ructYes' },
      { text: 'No', nextSceneId: 'ructNo' },
    ],
  },
  {
    id: 'ructYes',
    text: 'Soo agrees to let Manuel reschedule his new hire training, and Manuel happily runs for the hills. Because she is a dingbat, she forgets to actually reschedule his training. Manuel therefore never learns how to count petty cash or half the other things you’re supposed to take care of in the shop for that matter. Keep going.',
    choices: [
      { text: 'Continue', nextSceneId: 'facebook' },
    ],
  },
  {
    id: 'ructNo',
    text: 'Manuel decides to go to the RUCT training without notifying Soo and hopes she doesn’t notice he’s missing. She doesn’t and Manuel never learns to count petty cash, thus leading Rice Bikes into financial ruin. Go to jail, and don’t pass go.',
    choices: [
      { text: 'Continue', nextSceneId: 'facebook' },
    ],
  },
  {
    id: 'facebook',
    text: 'Sophomore year really flew by, and the summer takes Soohyun and Manuel down different paths. Manuel is in Austin for an internship, and Soohyun is juggling too many different things in Houston. She updates her Facebook profile picture one day, and Manuel notices, maybe for the first time, that she’s really really cute. Should he ask her out?',
    choices: [
      { text: 'Yes', nextSceneId: 'end' },
      { text: 'No', nextSceneId: 'facebookNo' },
    ],
  },
  {
    id: 'facebookNo',
    text: 'He doesn’t do more than like the post, but she’s definitely on his mind. Keep going.',
    choices: [
      { text: 'Continue', nextSceneId: 'biketrack' },
    ],
  },
  {
    id: 'biketrack',
    text: "It's the start of junior year, and Soohyun decides to stop by the bike track on her way home. The sun has set, and only a few other bikers are there. Among them are Manuel and Nishant, who catch up to her after a few laps to say hello. Nishant rides off to talk to some other bikers, but Manuel hangs back to ride with Soo. They chat for a little while, as they cruise around the track, talking about work and their summers and other things two acquaintances talk about. Time flies, and Soo realizes she really enjoyed biking with Manuel. Should she ask him out?",
    choices: [
      { text: 'Yes', nextSceneId: 'end' },
      { text: 'No', nextSceneId: 'biketrackNo' },
    ],
  },
  {
    id: 'biketrackNo',
    text: "She doesn't really know this guy well, so she bikes home. Keep going.",
    choices: [
      { text: 'Continue', nextSceneId: 'pineapples' },
    ],
  },
  {
    id: 'pineapples',
    text: 'Manuel is chasing a runaway pineapple as Soohyun wonders how they ended up here. She sent a message to the Rice Bikes Slack about the fall semester crawl, adding an open invite to bike out to HEB for party supplies. Manuel saw this as his chance to not only spend time with Soo but also to take the shop tricycle on a joy ride. Plus, the adult-sized trike has a rear basket perfect for transporting the pineapple he needs for his pina coladas. However, pineapples are suprisingly aerodynamic, and they have to make frequent stops for Manuel to rescue his pineapple whenever it flies out of the basket. Soo thinks Manuel’s a little crazy but admires his quirkiness and determination. Should she ask him out?',
    choices: [
      { text: 'Yes', nextSceneId: 'end' },
      { text: 'No', nextSceneId: 'pineapplesNo' },
    ],
  },
  {
    id: 'pineapplesNo',
    text: 'Soohyun, Manuel, and the pineapple make it back to Rice in one piece. They split to get ready for the party that night. Keep going.',
    choices: [
      { text: 'Continue', nextSceneId: 'crawl' },
    ],
  },
  {
    id: 'crawl',
    text: 'It’s later that night. The party is in full swing, and Manuel sits next to Soohyun on the balcony of Old Hanszen dorms. The night is clear, and humidity (and maybe love) is in the air. Think Manuel think, what do you say to pretty girls at parties? Bikes, obviously. He asks her if she’s done any cool bike rides lately. They start chatting, and Manuel suggests that they should go on a bike ride sometime. Together. Soo agrees, less concerned about the fact that this guy is lowkey flirting with her and more concerned that he suggested biking from Houston to Austin together. She thinks he can’t be serious until she gets a message from him the next morning. “Soo! Still down for Houston to Austin?” How should she respond?',
    choices: [
      { text: 'Yes', nextSceneId: 'end' },
      { text: 'HECK YEAH', nextSceneId: 'end' },
    ],
  },
  {
    id: 'end',
    text: 'Soohyun and Manuel agree to start off slow by going on a bike ride to Buffalo Bayou together. They go on one bike ride, and then another, and the rest is history. Over the next few years, life takes them on a wild ride with many ups and downs, but they stick together. Then, on 04/14/24, they found themselves back at Buffalo Bayou. Manuel had an album full of memories, a letter he wrote, and a ring. He asked Soo another ambitious question. “Will you marry me?” And Soo said, “Yes!”',
    choices: [
      { text: 'RSVP', nextSceneId: 'RSVP' },
      { text: 'Play again', nextSceneId: 'start' },
    ],
  },
  // Add more scenes as needed
];
